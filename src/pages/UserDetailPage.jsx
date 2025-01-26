// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const DetailsPage = () => {
//   const { id } = useParams(); // Get the dynamic ID from the URL
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [activeTab, setActiveTab] = useState("User"); // Set active tab to User by default

//   // Dummy data
//   const users = [
//     { employeeId: "E12345", userName: "JohnDoe", email: "john@example.com", departments: "HR" },
//     { employeeId: "E67890", userName: "JaneSmith", email: "jane@example.com", departments: "IT" },
//   ];

//   const beneficiaries = [
//     { cnic: "11223", name: "Michael Jordan", phone: "1112223333", address: "Chicago" },
//     { cnic: "44556", name: "Kobe Bryant", phone: "3332221111", address: "Los Angeles" },
//   ];

//   // Determine if the ID is for a User or Beneficiary
//   useEffect(() => {
//     let dataSource = null;

//     // Determine whether we're looking for a User or Beneficiary
//     if (id.startsWith("E")) {
//       dataSource = users; // Users are identified by employeeId starting with 'E'
//     } else {
//       dataSource = beneficiaries; // Beneficiaries are identified by cnic
//     }

//     // Fetch the correct data based on the ID
//     const foundData = dataSource.find((item) => item.employeeId === id || item.cnic === id);

//     if (foundData) {
//       setData(foundData);
//       setLoading(false);
//     } else {
//       setLoading(false);
//       setData(null); // No data found, set to null to show error message
//     }
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSaveChanges = () => {
//     console.log("Updated Row Data:", data);
//     setIsEditing(false);
//   };

//   const dataToDisplay = activeTab === "User" ? users : beneficiaries;

//   if (loading) {
//     return <div>Loading...</div>; // Show loading message while data is fetching
//   }

//   if (!data) {
//     return <div>Data not found</div>; // Show error if no data is found for the ID
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <header className="text-xl font-semibold mb-6">
//         <span>Details</span>
//       </header>

//       <section className="bg-white rounded-lg shadow p-6 mb-6">
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center space-x-4">
//             <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-600 text-2xl font-bold">
//               {data.userName ? data.userName[0] : data.name[0]}
//             </div>
//             <div>
//               <p className="font-medium text-lg">{data.userName ? data.userName : data.name}</p>
//               <p className="text-gray-500">{data.email || data.phone}</p>
//             </div>
//           </div>
//           <div className="text-right">
//             {data.employeeId ? (
//               <>
//                 <p>
//                   <span className="font-medium">Employee ID: </span>
//                   {data.employeeId}
//                 </p>
//                 <p>
//                   <span className="font-medium">Department: </span>
//                   {data.departments}
//                 </p>
//               </>
//             ) : (
//               <>
//                 <p>
//                   <span className="font-medium">CNIC: </span>
//                   {data.cnic}
//                 </p>
//                 <p>
//                   <span className="font-medium">Address: </span>
//                   {data.address}
//                 </p>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Edit button inside the box */}
//         <div className="flex justify-end mb-4">
//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="px-4 py-2 bg-gray-500 text-white rounded"
//           >
//             {isEditing ? "Save" : "Edit"}
//           </button>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           {Object.keys(data).map((key) => (
//             <div key={key} className="mb-4">
//               <label className="block text-gray-700 text-sm mb-2 capitalize">{key}</label>
//               <input
//                 type="text"
//                 name={key}
//                 value={data[key]}
//                 onChange={handleInputChange}
//                 disabled={!isEditing}
//                 className={`w-full p-2 border ${isEditing ? "border-blue-300" : "border-gray-300"} rounded`}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Table displaying beneficiaries */}
//       {activeTab === "Beneficiary" && (
//         <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mt-6">
//           <table className="w-full text-left table-auto min-w-max">
//             <thead>
//               <tr>
//                 {Object.keys(dataToDisplay[0]).map((key, idx) => (
//                   <th key={idx} className="p-4 border-b border-slate-300 bg-slate-50 capitalize">
//                     {key.replace(/([A-Z])/g, " $1")}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {dataToDisplay.map((row, index) => (
//                 <tr
//                   key={index}
//                   className="hover:bg-slate-50 cursor-pointer"
//                   onClick={() => console.log("Row clicked:", row)}
//                 >
//                   {Object.values(row).map((value, idx) => (
//                     <td key={idx} className="p-4 border-b border-slate-200 py-5">
//                       {value}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DetailsPage;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const UserDetailPage = () => {
//   const { id } = useParams(); // Get the user ID from URL
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Simulating a fetch request for user data
//     const users = [
//       { employeeId: "E12345", userName: "JohnDoe", email: "john@example.com", departments: "HR" },
//       { employeeId: "E67890", userName: "JaneSmith", email: "jane@example.com", departments: "IT" },
//     ];

//     const foundUser = users.find((user) => user.employeeId === id);
//     if (foundUser) {
//       setUser(foundUser);
//     } else {
//       setUser(null); // Set to null if no user is found
//     }
//   }, [id]);

//   if (!user) {
//     return <div>Loading user data...</div>; // Show loading if no user data
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-xl font-semibold mb-6">User Details for {user.userName}</h1>
//       <div className="bg-white p-6 rounded-lg shadow">
//         <p><strong>Employee ID:</strong> {user.employeeId}</p>
//         <p><strong>User Name:</strong> {user.userName}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Department:</strong> {user.departments}</p>
//       </div>
//     </div>
//   );
// };

// export default UserDetailPage;



import { useParams } from "react-router-dom";

const UserDetailPage = () => {
  const { id } = useParams();
  console.log(id); // Log to check the id value
  return <div>User Detail Page for ID: {id}</div>;
};

export default UserDetailPage;
