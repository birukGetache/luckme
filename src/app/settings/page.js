import React from 'react';
import BottomNavBar from '../components/BottomNavBar';
import { FaUser, FaLock, FaBell, FaSave, FaBatteryHalf, FaLaptop, FaGlobe, FaQuestionCircle, FaDice, FaHandshake, FaMobileAlt } from 'react-icons/fa';

const SettingsPage = () => {
  const sections = [
    { id: 1, title: 'Account', icon: <FaUser /> },
    { id: 2, title: 'Privacy and Security', icon: <FaLock /> },
    { id: 3, title: 'Notification and Sounds', icon: <FaBell /> },
    { id: 4, title: 'Data and Storage', icon: <FaSave /> },
    { id: 5, title: 'Power Saving', icon: <FaBatteryHalf /> },
    { id: 6, title: 'Devices', icon: <FaLaptop /> },
    { id: 7, title: 'Language', icon: <FaGlobe /> },
    { id: 8, title: 'Ask Question', icon: <FaQuestionCircle /> },
    { id: 9, title: 'Lucky Me FAQ', icon: <FaDice /> },
    { id: 10, title: 'Invite Friends', icon: <FaHandshake /> }, // New section
    { id: 11, title: 'Lucky Me Features', icon: <FaMobileAlt /> }, // New section
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow-md">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
              index < sections.length - 1 ? 'border-b' : ''
            }`}
          >
            <span className="text-2xl mr-4 text-[#85726a] ">{section.icon}</span>
            <span className="text-lg font-medium text-gray-700">{section.title}</span>
          </div>
        ))}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default SettingsPage;