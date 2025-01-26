import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="text-xl font-semibold mb-6">Dashboard</header>

      {/* User Details Section */}
      <section className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">User Details</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-600 text-2xl font-bold">
              A
            </div>
            <div>
              <p className="font-medium text-lg">Andrei Adamtsuk</p>
              <p className="text-gray-500">a.adamtsuk@gmail.com</p>
            </div>
          </div>
          <div className="text-right">
            <p>
              <span className="font-medium">Join Time: </span>
              24/01/2025
            </p>
            <p>04:56:35</p>
            <p className="mt-2">
              <span className="font-medium">Phone Number: </span>
              +447557956377
            </p>
          </div>
        </div>
      </section>

      {/* Created Jobs Section */}
      <section className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Created Jobs</h2>
          <span className="font-medium text-gray-600">Total 1 Jobs</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-600">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Job Type</th>
                <th className="px-4 py-2 border-b">Postcode</th>
                <th className="px-4 py-2 border-b">Date Posted</th>
                <th className="px-4 py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">583</td>
                <td className="px-4 py-2 border-b">Electrical</td>
                <td className="px-4 py-2 border-b">ME15 7HS</td>
                <td className="px-4 py-2 border-b">24/01/2025</td>
                <td className="px-4 py-2 border-b text-green-600 font-medium flex items-center">
                  Opened
                  <span className="ml-2 text-yellow-500">&rarr;</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-500 rounded" disabled>
            Previous
          </button>
          <span className="px-4 py-2 bg-yellow-200 text-yellow-700 rounded">1</span>
          <button className="px-4 py-2 bg-gray-200 text-gray-500 rounded" disabled>
            Next
          </button>
        </div>
        
      </section>

      <table className="w-full text-left table-auto min-w-max">
  <thead>
    <tr>
      <th className="p-4 border-b border-slate-300 bg-slate-50">
        <p className="block text-sm font-normal leading-none text-slate-500">
          CNIC
        </p>
      </th>
      <th className="p-4 border-b border-slate-300 bg-slate-50">
        <p className="block text-sm font-normal leading-none text-slate-500">
          Name
        </p>
      </th>
      <th className="p-4 border-b border-slate-300 bg-slate-50">
        <p className="block text-sm font-normal leading-none text-slate-500">
          Phone Number
        </p>
      </th>
      <th className="p-4 border-b border-slate-300 bg-slate-50">
        <p className="block text-sm font-normal leading-none text-slate-500">
          Address
        </p>
      </th>
    </tr>
  </thead>

  <tbody>
    {[{ cnic: "12345", name: "John Doe", phone: "1234567890", address: "New York" },
      { cnic: "67890", name: "Jane Smith", phone: "0987654321", address: "California" }]
      .map((row, index) => (
        <tr
          key={index}
          className="hover:bg-slate-50 cursor-pointer"
        >
          <td className="p-4 border-b border-slate-200 py-5">
            <p className="block font-semibold text-sm text-slate-800">
              {row.cnic}
            </p>
          </td>
          <td className="p-4 border-b border-slate-200 py-5">
            <p className="text-sm text-slate-500">{row.name}</p>
          </td>
          <td className="p-4 border-b border-slate-200 py-5">
            <p className="text-sm text-slate-500">{row.phone}</p>
          </td>
          <td className="p-4 border-b border-slate-200 py-5">
            <p className="text-sm text-slate-500">{row.address}</p>
          </td>
        </tr>
      ))}
  </tbody>
</table>

    </div>
  );
};

export default Dashboard;
