// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useParams } from "react-router-dom"; // Import useParams

// const Admintabs = () => {
//     const navigate = useNavigate(); // Use navigate hook
//     const [isPageOpen, setIsPageOpen] = useState(false);
//     const [selectedIndex, setSelectedIndex] = useState(null);
//     const [isEditing, setIsEditing] = useState(false);
//     const [activeTab, setActiveTab] = useState("User");
//     const [rowData, setRowData] = useState(null);

//     // Dummy data for Users and Beneficiaries
//     const users = [
//         { employeeId: "E12345", userName: "JohnDoe", email: "john@example.com", departments: "HR" },
//         { employeeId: "E67890", userName: "JaneSmith", email: "jane@example.com", departments: "IT" },
//     ];

//     const beneficiaries = [
//         { cnic: "11223", name: "Michael Jordan", phone: "1112223333", address: "Chicago" },
//         { cnic: "44556", name: "Kobe Bryant", phone: "3332221111", address: "Los Angeles" },
//     ];

//     const data = activeTab === "User" ? users : beneficiaries;

    

//     const handleRowClick = (index) => {
//         setSelectedIndex(index);
//         setRowData(data[index]);
//         setIsPageOpen(true);
//         setIsEditing(false); // Reset editing mode
    
//         // Determine the row ID based on the active tab
//         const rowId = activeTab === "User" ? data[index].employeeId : data[index].cnic;
//         navigate(`/details/${rowId}`); // Navigate with dynamic ID in the URL
//     };
    

//     const handleClosePage = () => {
//         setIsPageOpen(false);
//         setSelectedIndex(null);
//         setIsEditing(false);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setRowData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSaveChanges = () => {
//         console.log("Updated Row Data:", rowData);
//         setIsEditing(false);
//         // Save the updated data to backend or state as required
//     };

//     const handlePrevious = () => {
//         if (selectedIndex > 0) {
//             const newIndex = selectedIndex - 1;
//             setSelectedIndex(newIndex);
//             setRowData(data[newIndex]);
//             setIsEditing(false);
//         }
//     };

//     const handleNext = () => {
//         if (selectedIndex < data.length - 1) {
//             const newIndex = selectedIndex + 1;
//             setSelectedIndex(newIndex);
//             setRowData(data[newIndex]);
//             setIsEditing(false);
//         }
//     };

//     return (
//         <div className="w-full h-full">
//             {/* Tab Navigation */}
//             <div className="w-full h-full flex justify-between items-center mb-3 mt-1 pl-3">
//                 <div className="flex space-x-4 mb-4">
//                     <button
//                         onClick={() => setActiveTab("Beneficiary")}
//                         className={`px-4 py-2 rounded ${
//                             activeTab === "Beneficiary" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700"
//                         }`}
//                     >
//                         Beneficiary
//                     </button>

//                     <button
//                         onClick={() => setActiveTab("User")}
//                         className={`px-4 py-2 rounded ${
//                             activeTab === "User" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700"
//                         }`}
//                     >
//                         User
//                     </button>
//                 </div>
//             </div>

//             {/* Table Display */}
//             <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
//                 <table className="w-full text-left table-auto min-w-max">
//                     <thead>
//                         <tr>
//                             {Object.keys(data[0]).map((key, idx) => (
//                                 <th key={idx} className="p-4 border-b border-slate-300 bg-slate-50 capitalize">
//                                     {key.replace(/([A-Z])/g, " $1")}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((row, index) => (
//                             <tr
//                                 key={index}
//                                 className="hover:bg-slate-50 cursor-pointer"
//                                 onClick={() => handleRowClick(index)}
//                             >
//                                 {Object.values(row).map((value, idx) => (
//                                     <td key={idx} className="p-4 border-b border-slate-200 py-5">
//                                         {value}
//                                     </td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Admintabs;



import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admintabs = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("User");

    // Dummy data for Users and Beneficiaries
    const users = [
        { employeeId: "E12345", userName: "JohnDoe", email: "john@example.com", departments: "HR" },
        { employeeId: "E67890", userName: "JaneSmith", email: "jane@example.com", departments: "IT" },
    ];

    const beneficiaries = [
        { cnic: "11223", name: "Michael Jordan", phone: "1112223333", address: "Chicago" },
        { cnic: "44556", name: "Kobe Bryant", phone: "3332221111", address: "Los Angeles" },
    ];

    const data = activeTab === "User" ? users : beneficiaries;

    const handleRowClick = (index) => {
        const rowData = data[index];
        const id = activeTab === "User" ? rowData.employeeId : rowData.cnic;
        navigate(`/${activeTab.toLowerCase()}/${id}`);
    };

    return (
        <div className="w-full h-full p-6 bg-gray-100">
            <div className="w-full flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <div className="flex space-x-4">
                    <button
                        onClick={() => setActiveTab("Beneficiary")}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            activeTab === "Beneficiary" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        Beneficiary
                    </button>
                    <button
                        onClick={() => setActiveTab("User")}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            activeTab === "User" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        User
                    </button>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full text-left table-auto">
                    <thead>
                        <tr className="bg-gray-50">
                            {Object.keys(data[0]).map((key, idx) => (
                                <th key={idx} className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.map((row, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 transition-colors cursor-pointer"
                                onClick={() => handleRowClick(index)}
                            >
                                {Object.values(row).map((value, idx) => (
                                    <td key={idx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admintabs;