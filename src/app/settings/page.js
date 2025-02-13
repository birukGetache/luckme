"use client";
import { useRouter } from 'next/navigation';
import BottomNavBar from '../components/BottomNavBar';
import {
  FaUser,          // Account
  FaBell,          // Notification and Sounds
  FaMobileAlt,     // Devices
  FaGlobe,         // Language
  FaQuestionCircle,// Ask Question
  FaInfoCircle,    // Tankwa FAQ
  FaUserPlus,      // Invite Friends
} from 'react-icons/fa';

const settingsList = [
  { id: 1, title: 'Account', icon: <FaUser className="inline-block mr-4" /> },
  { id: 3, title: 'Notification ', icon: <FaBell className="inline-block mr-4" /> },
  { id: 6, title: 'Devices', icon: <FaMobileAlt className="inline-block mr-4" /> },
  { id: 7, title: 'Language', icon: <FaGlobe className="inline-block mr-4" /> },
  { id: 8, title: 'Ask Question', icon: <FaQuestionCircle className="inline-block mr-4" /> },
  { id: 9, title: 'Tankwa FAQ', icon: <FaInfoCircle className="inline-block mr-4" /> },
  { id: 10, title: 'Invite Friends', icon: <FaUserPlus className="inline-block mr-4" /> },
];

export default function Settings() {
  const router = useRouter();

  const handleNavigation = (id) => {
    // Redirect to different pages for each section
    router.push(`/settings/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r bg-white flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">Settings</h1>
        <ul className="space-y-6">
          {settingsList.map((setting) => (
            <li
              key={setting.id}
              className="p-6 bg-gradient-to-r bg-blue-300 rounded-lg cursor-pointer transform hover:scale-105 hover:shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
              onClick={() => handleNavigation(setting.id)}
            >
              <div className="flex items-center">
                {setting.icon} {/* Render the icon */}
                <span className="text-xl font-semibold text-gray-800">{setting.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <BottomNavBar />
    </div>
  );
}