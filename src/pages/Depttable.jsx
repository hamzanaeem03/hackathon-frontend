import { useState } from "react";
import jsPDF from "jspdf";

const Depttable = () => {
    const [isRowDialogOpen, setIsRowDialogOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [rowDialogData, setRowDialogData] = useState({
        category: "Medical Assistance", // Default value for dropdown
        purpose: "",
    });

    const handleRowClick = (row) => {
        setSelectedRow(row);
        setIsRowDialogOpen(true);
    };

    const handleCloseRowDialog = () => {
        setIsRowDialogOpen(false);
        setSelectedRow(null);
    };

    const handleRowDialogChange = (e) => {
        const { name, value } = e.target;
        setRowDialogData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRowDialogSubmit = (e) => {
        e.preventDefault();

        // Initialize jsPDF instance
        const doc = new jsPDF();

        // Title Styling
        doc.setFontSize(18);
        doc.setTextColor(40, 40, 40);
        doc.text("Token Details", 105, 20, { align: "center" });

        // Add a horizontal line below the title
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.5);
        doc.line(15, 25, 195, 25);

        // User Details Section Header
        doc.setFontSize(16);
        doc.setTextColor(40, 40, 40);
        doc.text("User Details", 20, 70);

        // User Details Styling
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`CNIC:`, 20, 80);
        doc.text(selectedRow?.cnic || "-", 60, 80);

        doc.text(`Name:`, 20, 90);
        doc.text(selectedRow?.name || "-", 60, 90);

        doc.text(`Phone Number:`, 20, 100);
        doc.text(selectedRow?.phone || "-", 60, 100);

        doc.text(`Address:`, 20, 110);
        doc.text(selectedRow?.address || "-", 60, 110);

        // Category Section (with safety check)
        doc.setFontSize(14);
        doc.setTextColor(50, 50, 50);
        doc.text("Category:", 20, 40);
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 255); // Blue color
        doc.text(rowDialogData?.category || "-", 60, 40);

        // Purpose Section (with safety check)
        doc.setFontSize(14);
        doc.setTextColor(50, 50, 50);
        doc.text("Purpose:", 20, 50);
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 255);
        doc.text(rowDialogData?.purpose || "-", 60, 50);

        // Add a decorative rectangle border around the content
        doc.setDrawColor(100, 100, 100);
        doc.setLineWidth(0.5);
        doc.rect(15, 30, 180, 100);

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text(
            "This token is generated by the system. Please keep it safe.",
            105,
            140,
            { align: "center" }
        );

        // Save the styled PDF
        doc.save("token.pdf");

        // Reset state and close the dialog
        setRowDialogData(null); // Reset the dialog data (or set default values as needed)
        setIsRowDialogOpen(false); // Close the dialog
    };

    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex justify-between items-center mb-3 mt-1 pl-3">
                <div className="ml-3">
                    <div className="w-full max-w-sm min-w-[200px] relative">
                        <div className="relative">
                            <input
                                className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                placeholder="Search"
                            />
                            <button
                                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={3}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-slate-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
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
                        {[
                            { cnic: "12345", name: "John Doe", phone: "1234567890", address: "New York" },
                            { cnic: "67890", name: "Jane Smith", phone: "0987654321", address: "California" },
                        ].map((row, index) => (
                            <tr
                                key={index}
                                className="hover:bg-slate-50 cursor-pointer"
                                onClick={() => handleRowClick(row)}
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

            {isRowDialogOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    role="dialog"
                >
                    <form
                        onSubmit={handleRowDialogSubmit}
                        className="w-1/3 p-6 bg-white rounded shadow"
                    >
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold mb-4">Update Status</h2>
                            <label className="block text-sm text-gray-700 mb-1">Status</label>
                            <select
                                name="status"
                                value={rowDialogData.status} // Ensure this controls the selected value
                                onChange={handleRowDialogChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="Pending">Pending</option>
                                <option value="Reject">Reject</option>
                                <option value="Resolved">Resolved</option>
                            </select>


                        </div>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-1">Purpose</label>
                            <input
                                type="text"
                                name="purpose"
                                value={rowDialogData.purpose}
                                onChange={handleRowDialogChange}
                                className="w-full p-2 border rounded"
                                placeholder="Enter Note"
                                required
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="px-4 py-2 text-gray-700 bg-gray-200 rounded mr-2"
                                onClick={handleCloseRowDialog}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                            >
                                Update Status
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Depttable;
