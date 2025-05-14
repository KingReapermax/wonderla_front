import React from 'react';

const RideCard = ({ ride }) => (
  <div className="relative w-[310px] h-[420px] rounded-3xl overflow-hidden shadow-2xl group">
    <video
      src={ride.video}
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover"
      playsInline
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e] via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
      <h3 className="text-2xl font-bold text-white">{ride.title}</h3>
      <p className="text-base text-yellow-300 font-semibold">{ride.location}</p>
      <p className="text-white text-sm mt-2 mb-4 line-clamp-2">{ride.description}</p>
      <button className="bg-yellow-400 text-[#1a237e] font-bold rounded-lg px-6 py-2 uppercase shadow hover:bg-yellow-300 transition">
        Ride Details
      </button>
    </div>
  </div>
);


export default RideCard;
