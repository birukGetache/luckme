// components/Dashboard.jsx
'use client'
import React, { useEffect, useState } from 'react';
import BottomNavBar from '../components/BottomNavBar';

const Dashboard = () => {
  const [spinning, setSpinning] = useState(false);
  const [totalOnlineUsers, setTotalOnlineUsers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [lotteryType] = useState("Hotel Vacation");
  const [location] = useState("Bahir Dar, Ethiopia");
  const [lotteryId] = useState("LOT123456");
  const [luckyPerson, setLuckyPerson] = useState(null);
  const [users, setUsers] = useState([]);

  // Simulated user list
  useEffect(() => {
    // Simulate fetching user counts
    const onlineUsers = Math.floor(Math.random() * 100);
    setTotalOnlineUsers(onlineUsers);
    setTotalUsers(onlineUsers + Math.floor(Math.random() * 900)); // Adding more to make total users more than online users

    // Create a simulated user list
    const simulatedUsers = Array.from({ length: totalUsers }, (_, i) => `User${i + 1}`);
    setUsers(simulatedUsers);
  }, [totalUsers]);

  // Use timer to start and stop spinner
  const drawLuckyPerson = () => {
    setSpinning(true);
    setLuckyPerson(null);

    const winnerTimeout = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * users.length);
      setLuckyPerson(users[randomIndex]);
      setSpinning(false);
      clearTimeout(winnerTimeout);
    }, 3000); // Simulating a 3-second draw time
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 font-playfair bg-yellow-50 text-[#85726a]">
      <h1 className="text-2xl font-bold mb-4">Lottery Dashboard</h1>
      <div className=" rounded-lg p-6 w-full max-w-xs">
        <div className="mb-4">
          <p className="font-semibold">Total Online Users:</p>
          <p>{totalOnlineUsers}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Total Users:</p>
          <p>{totalUsers}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Lottery Type:</p>
          <p>{lotteryType}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Location:</p>
          <p>{location}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Lottery ID:</p>
          <p>{lotteryId}</p>
        </div>
        {/* <div className="flex items-center justify-center mb-4">
          <div className={`w-8 h-8 border-4 border-blue-500 rounded-full ${spinning ? 'animate-spin' : ''}`}></div>
        </div> */}
        {/* <button 
          onClick={drawLuckyPerson} 
          className="bg-blue-500 text-white py-2 px-4 rounded" 
        >
          Draw Lucky Person
        </button>
        {luckyPerson && (
          <div className="mt-4">
            <p className="font-semibold text-lg">Lucky Person:</p>
            <p>{luckyPerson}</p>
          </div>
        )} */}
        <p className="text-sm text-gray-500">{new Date().toLocaleTimeString()}</p>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
};

export default Dashboard;