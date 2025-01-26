import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const UserDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(true)

  // Dummy data (replace with actual API call in a real application)
  const users = [
    { employeeId: "E12345", userName: "JohnDoe", email: "john@example.com", departments: "HR" },
    { employeeId: "E67890", userName: "JaneSmith", email: "jane@example.com", departments: "IT" },
  ]

  useEffect(() => {
    const foundUser = users.find((user) => user.employeeId === id)
    if (foundUser) {
      setData(foundUser)
      setLoading(false)
    } else {
      setLoading(false)
      setData(null)
    }
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveChanges = () => {
    console.log("Updated User Data:", data)
    setIsEditing(false)
    // Here you would typically send the updated data to your backend
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>
  }

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">User not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">User Details</h1>
            <button
              onClick={() => navigate("/Admintabs")}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Back to List
            </button>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {data.userName[0]}
            </div>
            <div>
              <p className="font-medium text-lg">{data.userName}</p>
              <p className="text-gray-500">{data.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {Object.entries(data).map(([key, value]) => (
              <div key={key} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full p-2 border rounded-md ${
                    isEditing ? "border-blue-300" : "border-gray-300 bg-gray-50"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            {isEditing ? (
              <>
                <button
                  onClick={handleSaveChanges}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-2"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetailPage