// src/SponsorPage.js
"use client"
import React, { useState } from 'react';
import { FaLink, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import BottomNavBar from '../components/BottomNavBar';

// Array of sponsors with actual logos
const sponsorsData = [
  {
    name: 'Sponsor A',
    logo: 'https://via.placeholder.com/100?text=LogoA',  // Use actual online images here
    url: 'https://sponsorA.com',
    description: 'Sponsor A is a leader in innovative tech solutions.',
    twitter: 'https://twitter.com/sponsorA',
    facebook: 'https://facebook.com/sponsorA',
    instagram: 'https://instagram.com/sponsorA',
  },
  {
    name: 'Sponsor B',
    logo: 'https://via.placeholder.com/100?text=LogoB',
    url: 'https://sponsorB.com',
    description: 'Sponsor B supports the arts and creativity.',
    twitter: 'https://twitter.com/sponsorB',
    facebook: 'https://facebook.com/sponsorB',
    instagram: 'https://instagram.com/sponsorB',
  },
  {
    name: 'Sponsor C',
    logo: 'https://via.placeholder.com/100?text=LogoC',
    url: 'https://sponsorC.com',
    description: 'Sponsor C is a global leader in sustainable energy.',
    twitter: 'https://twitter.com/sponsorC',
    facebook: 'https://facebook.com/sponsorC',
    instagram: 'https://instagram.com/sponsorC',
  },
  // Add more sponsors as needed
];

const SponsorPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter sponsors based on the search term
  const filteredSponsors = sponsorsData.filter((sponsor) =>
    sponsor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8 text-center">
        Our Amazing Sponsors
      </h1>

      {/* Search Bar */}
      <div className="mb-6 w-full max-w-xs">
        <input
          type="text"
          placeholder="Search sponsors..."
          className="w-full p-3 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display Sponsors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {filteredSponsors.length > 0 ? (
          filteredSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block text-center mb-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32 object-contain transition-transform transform group-hover:scale-105"
                />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700">{sponsor.name}</h2>
              </a>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{sponsor.description}</p>

              <div className="flex justify-center space-x-4 mb-4">
                {/* Social Media Links */}
                {sponsor.twitter && (
                  <a href={sponsor.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-blue-500 hover:text-blue-600 transition-colors" size={18} />
                  </a>
                )}
                {sponsor.facebook && (
                  <a href={sponsor.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-blue-700 hover:text-blue-800 transition-colors" size={18} />
                  </a>
                )}
                {sponsor.instagram && (
                  <a href={sponsor.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-pink-500 hover:text-pink-600 transition-colors" size={18} />
                  </a>
                )}
              </div>

              {/* External Website Link */}
              <div className="text-center">
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-blue-600 hover:text-blue-700"
                >
                  <FaLink className="mr-2" size={16} />
                  Visit Website
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No sponsors found for "{searchTerm}"</p>
        )}
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
};

export default SponsorPage;
