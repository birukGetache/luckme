import React from "react";

const SponsorshipCard = ({ sponsor }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4">
      <img className="w-full h-48 object-cover" src={sponsor.imageUrl} alt={sponsor.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{sponsor.name}</div>
        <p className="text-gray-700 text-base">{sponsor.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={sponsor.website}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

const SponsorshipSection = ({ sponsors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sponsors.map((sponsor, index) => (
        <SponsorshipCard key={index} sponsor={sponsor} />
      ))}
    </div>
  );
};

export default SponsorshipSection;
