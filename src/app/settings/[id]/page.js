"use client";
import { useRouter } from 'next/navigation';

const settingsDetails = {
  1: { title: 'Account', description: 'Manage your account settings' },
  3: { title: 'Notification and Sounds', description: 'Set your notifications and sound preferences' },
  6: { title: 'Devices', description: 'Manage your connected devices' },
  7: { title: 'Language', description: 'Choose your preferred language' },
  8: { title: 'Ask Question', description: 'Submit your questions or feedback' },
  9: { title: 'Tankwa FAQ', description: 'Frequently Asked Questions' },
  10: { title: 'Invite Friends', description: 'Invite your friends to join' }
};

export default function SettingDetail({ params }) {
  const { id } = params; // Use params to get the id
  const router = useRouter(); // Initialize the useRouter hook

  const setting = settingsDetails[id];

  if (!setting) {
    return <div className="text-center text-xl font-semibold">Setting not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()} // Go back to the previous page
          className="mb-6 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Back
        </button>
        
        <h2 className="text-4xl font-semibold text-gray-900 mb-6">{setting.title}</h2>
        <p className="text-lg text-gray-700 mb-6">{setting.description}</p>

        {/* Example of settings based on category */}
        {setting.title === "Account" && (
          <div className="space-y-4 p-6 bg-gray-100 rounded-md shadow-sm">
            <h3 className="text-2xl font-medium text-gray-800">Change Email</h3>
            <p className="text-gray-600">Update your email address for notifications and communication.</p>
            {/* Here you can add a form or a button to change email */}
          </div>
        )}

        {setting.title === "Notification and Sounds" && (
          <div className="space-y-4 p-6 bg-gray-100 rounded-md shadow-sm">
            <h3 className="text-2xl font-medium text-gray-800">Notification Settings</h3>
            <p className="text-gray-600">Adjust your notification preferences and sounds.</p>
            {/* Here you can add toggle buttons or options for notifications */}
          </div>
        )}

        {/* Add other specific settings if needed */}
      </div>
    </div>
  );
}
