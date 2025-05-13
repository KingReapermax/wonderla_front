import React from 'react';

const RideCard = ({ ride }) => {
  return (
    <div className="w-64 h-80 rounded-lg relative overflow-hidden shadow-lg m-4 transition-transform duration-300 hover:scale-105">
      <div className="h-80 overflow-hidden linear-gradient relative">
        {/* <div className="absolute inset-0 bg-white opacity-50"></div> */}
        {/* <div className="absolute bottom-30 h-30 inset-0 bg-gradient-to-t from-blue to-transparent"></div> */}
        <video
          src={ride.video} 
          type="video/mp4"
          autoPlay
          loop
          muted
          alt={ride.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(51,77,207,0)_42.94%,_#334DCF_100%)] lg:bg-[linear-gradient(180deg,_rgba(34,48,74,0)_34.08%,_#22304A_100%)]"></div>
        {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(51,77,207,0)_50%,_#334DCF_100%)] lg:bg-[linear-gradient(180deg,_rgba(34,48,74,0)_34.08%,_#22304A_100%)]"></div> */}
        
        
         
        
      </div>
      <div className="absolute bottom-0 right-0 left-0 p-4 ">
        <h3 className="text-xl font-bold text-grey-800 ">{ride.title}</h3>
        <p className="text-sm text-grey-600 ">{ride.location}</p>
        <p className="text-sm text-grey-500 mt-2 line-clamp-2 ">{ride.description}</p>
        <a className="inline-block w-full max-w-[150px]" href="https://google.com/">
        <div className="h-10 w-full max-w-[150px] rounded-lg text-xs font-black uppercase leading-tight flex items-center justify-center text-blue bg-yellow mt-2">Ride Details</div></a>
        
      </div>
    </div>
  );
};

export default RideCard;