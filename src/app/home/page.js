import React from 'react';
import BottomNavBar from '../components/BottomNavBar';

const Card = ({ image, date, winType, name }) => {
  return (
    <div className="border p-4 rounded-lg flex shadow-lg max-w-sm mx-auto font-playfair">
         <div className="flex justify-center">
          <img src={image} alt="card-image" className="w-24 h-24 object-cover rounded-md" />
        </div>
      <div className="space-y-1">
        <div className="text-center">
          <h2 className="text-xl text-gray-600 font-semibold">Name: {name}</h2>
          <h2 className="text-xl text-gray-600 font-semibold">Win Type: {winType}</h2>
          <p className="text-gray-500">Date: {new Date(date).toLocaleDateString()}</p>
        </div>

       
      </div>
    </div>
  );
};

const App = () => {
  const cardDataList = [
    {
      image: '/late.avif',
      name: "kebeDe ALem",
      date: '2025-01-23',
      winType: 'Friend',
    },
    {
      image: '/late.avif',
      name: "kebeDe ALem",
      date: '2024-12-18',
      winType: 'Family',
    },
    {
      image: '/late.avif',
      name: "kebeDe ALem",
      date: '2023-08-10',
      winType: 'Solo',
    },
    {
      image: '/late.avif',
      name: "kebeDe ALem",
      date: '2025-02-15',
      winType: 'Friend',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
      {cardDataList.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
      <BottomNavBar />
    </div>
  );
};

export default App;
