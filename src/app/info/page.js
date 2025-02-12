"use client"; // Marks the file as client-side rendered

import React, { useState, useEffect } from 'react';
import qrcode from 'qrcode';  // Importing the qrcode package
import { FaRegWindowClose } from 'react-icons/fa'; // For closing the modal
import BottomNavBar from '../components/BottomNavBar';

const App = () => {
  // Static data to display
  const [data] = useState({
    nationality: 'Ethiopia',
    passportNumber: '09090909',
    email: 'example@example.com',
    phoneNumber: '+251123 456 7890',
    departureLocation: 'Bahir Dar',
    destinationLocation: 'Gonder',
    preferredDate: '2025-03-15',
    numberOfPassengers: 2,
    typeOfTransport: 'Ferris',
    paymentMethod: 'Chapa',
    currency: 'Birr',
    specialNeeds: 'Wheelchair required',
    accessibilityNeeds: 'Elevator access',
    foodPreferences: 'Vegetarian',
    petInfo: 'No pets',
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state to toggle
  const [qrUrl, setQrUrl] = useState('');  // Store the generated QR code URL

  // Toggle Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Generate QR Code URL when data changes
  useEffect(() => {
    qrcode.toDataURL(JSON.stringify(data), (err, url) => {
      if (err) console.error('Error generating QR code:', err);
      else setQrUrl(url); // Set the generated QR URL
    });
  }, [data]); // Regenerate QR code when `data` changes

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      {/* Main Container */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full sm:w-96 relative">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Booking Information</h1>

        <div className="space-y-4 mb-4 text-gray-700">
          <p><strong className="text-indigo-700">Nationality:</strong> {data.nationality}</p>
          <p><strong className="text-indigo-700">Passport Number:</strong> {data.passportNumber}</p>
          <p><strong className="text-indigo-700">Email:</strong> {data.email}</p>
          <p><strong className="text-indigo-700">Phone Number:</strong> {data.phoneNumber}</p>
          <p><strong className="text-indigo-700">Departure Location:</strong> {data.departureLocation}</p>
          <p><strong className="text-indigo-700">Destination Location:</strong> {data.destinationLocation}</p>
          <p><strong className="text-indigo-700">Preferred Date:</strong> {data.preferredDate}</p>
          <p><strong className="text-indigo-700">Number of Passengers:</strong> {data.numberOfPassengers}</p>
          <p><strong className="text-indigo-700">Transport Type:</strong> {data.typeOfTransport}</p>
          <p><strong className="text-indigo-700">Payment Method:</strong> {data.paymentMethod}</p>
          <p><strong className="text-indigo-700">Currency:</strong> {data.currency}</p>
        </div>

        {/* QR Code */}
        {qrUrl && (
          <div className="absolute bottom-4 right-4">
            <img
              src={qrUrl}  // Use the generated QR code URL
              alt="QR Code"
              className="w-20 h-20 cursor-pointer hover:opacity-90 transition-opacity duration-300"
              onClick={openModal}  // Click to open modal
            />
          </div>
        )}
      </div>

      {/* Modal Popup (Only QR Code) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full sm:w-96 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-1 rounded-full text-gray-500 hover:text-gray-800"
            >
              <FaRegWindowClose size={24} />
            </button>
            {/* Display Only QR Code in Modal */}
            <div className="flex justify-center mb-6">
              <img
                src={qrUrl}
                alt="QR Code"
                className="w-64 h-64" // Larger QR code in modal
              />
            </div>
          </div>
        </div>
      )}
      <BottomNavBar></BottomNavBar>
    </div>
  );
};

export default App;
