import React from 'react';
import Link from 'next/link';
import { FaHome, FaPlus, FaCity, FaInfoCircle, FaCog } from 'react-icons/fa'; // Import icons

const BottomNavBar = () => {
  return (
    <div className=" pb-20">
    <nav className="fixed bottom-0 left-0 w-full rounded-md bg-blue-500 text-white flex justify-around py-5">
      <Link href="/" className=" text-2xl">
        <FaHome /> {/* Home Icon */}
      </Link>
      <Link href="/home" className="  text-2xl">
        <FaPlus /> {/* Plus Icon */}
      </Link>
      <Link href="/info" className="  text-2xl">
        <FaInfoCircle /> {/* Info Icon */}
      </Link>
      <Link href="/settings" className=" text-2xl">
        <FaCog /> {/* Settings Icon */}
      </Link>
    </nav>
    </div>
  );
};

export default BottomNavBar;
