import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const BeneficiaryDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [beneficiary, setBeneficiary] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(true)

  // Dummy data (replace with actual API call in a real application)
  const beneficiaries = [
    { cnic: "11223", name: "Michael Jordan", phone: "1112223333", address: "Chicago" },
    { cnic: "44556", name: "Kobe Bryant", phone: "3332221111", address: "Los Angeles" },
  ]

  const beneficiaryHistory = [
    { date: "2023-01-15", action: "Benefit Claimed", status: "Approved", phone: "1112223333", name: "Michael Jordan" },
    {
      date: "2023-03-22",
      action: "Information Updated",
      status: "Completed",
      phone: "1112223333",
      name: "Michael Jordan",
    },
    { date: "2023-06-10", action: "Benefit Claimed", status: "Pending", phone: "1112223333", name: "Michael Jordan" },
  ]

  useEffect(() => {
    const foundBeneficiary = beneficiaries.find((b) => b.cnic === id)
    if (foundBeneficiary) {
      setBeneficiary(foundBeneficiary)
      setLoading(false)
    } else {
      setLoading(false)
      setBeneficiary(null)
    }
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBeneficiary((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveChanges = () => {
    console.log("Updated Beneficiary Data:", beneficiary)
    setIsEditing(false)
    // Here you would typically send the updated data to your backend
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>
  }

  if (!beneficiary) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Beneficiary not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Beneficiary Details Box */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Beneficiary Details</h1>
            <div className="space-x-2">
              <button
                onClick={() => navigate("/Admintabs")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back to List
              </button>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(beneficiary).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 capitalize">{key}</label>
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`p-2 border rounded-md ${isEditing ? "border-blue-300" : "border-gray-300 bg-gray-50"}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Beneficiary History Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold p-4 border-b border-slate-300 bg-slate-50">Beneficiary History</h2>
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">Date</p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">Action</p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">Status</p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">Phone Number</p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">Name</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {beneficiaryHistory.map((history, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="p-4 border-b border-slate-200 py-5">
                    <p className="block font-semibold text-sm text-slate-800">{history.date}</p>
                  </td>
                  <td className="p-4 border-b border-slate-200 py-5">
                    <p className="text-sm text-slate-500">{history.action}</p>
                  </td>
                  <td className="p-4 border-b border-slate-200 py-5">
                    <p className="text-sm text-slate-500">{history.status}</p>
                  </td>
                  <td className="p-4 border-b border-slate-200 py-5">
                    <p className="text-sm text-slate-500">{history.phone}</p>
                  </td>
                  <td className="p-4 border-b border-slate-200 py-5">
                    <p className="text-sm text-slate-500">{history.name}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BeneficiaryDetailPage