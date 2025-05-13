import React from 'react';

const RideCard = ({ ride }) => {
  return (
    <div className="w-64 h-80 bg-white rounded-lg overflow-hidden shadow-lg m-4 transition-transform duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={ride.image} 
          alt={ride.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{ride.title}</h3>
        <p className="text-sm text-gray-600">{ride.location}</p>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{ride.description}</p>
      </div>
    </div>
  );
};

export default RideCard;