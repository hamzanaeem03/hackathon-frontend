import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BeneficiaryDetailPage = () => {
  const { id } = useParams(); // Get the beneficiary ID from URL
  const [beneficiary, setBeneficiary] = useState(null);

  useEffect(() => {
    // Simulating a fetch request for beneficiary data
    const beneficiaries = [
      { cnic: "11223", name: "Michael Jordan", phone: "1112223333", address: "Chicago" },
      { cnic: "44556", name: "Kobe Bryant", phone: "3332221111", address: "Los Angeles" },
    ];

    const foundBeneficiary = beneficiaries.find((beneficiary) => beneficiary.cnic === id);
    if (foundBeneficiary) {
      setBeneficiary(foundBeneficiary);
    } else {
      setBeneficiary(null); // Set to null if no beneficiary is found
    }
  }, [id]);

  if (!beneficiary) {
    return <div>Loading beneficiary data...</div>; // Show loading if no beneficiary data
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-semibold mb-6">Beneficiary Details for {beneficiary.name}</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p><strong>CNIC:</strong> {beneficiary.cnic}</p>
        <p><strong>Name:</strong> {beneficiary.name}</p>
        <p><strong>Phone:</strong> {beneficiary.phone}</p>
        <p><strong>Address:</strong> {beneficiary.address}</p>
      </div>
    </div>
  );
};

export default BeneficiaryDetailPage;
