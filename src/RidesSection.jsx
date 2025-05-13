import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import RideCard from './RideCard';
import CategorySidebar from './CategorySidebar';
import CarouselControls from './CarouselControls';
import ridesData from '../data/ridesData.json';
import './index.css'; // Assuming you have a CSS file for styles
const RidesSection = () => {
  const [activeCategory, setActiveCategory] = useState('land');
  const carouselRef = useRef(null);

  const filteredRides = ridesData.filter(ride => ride.category === activeCategory);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-rgb(51,77,207)-100 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white-800 mb-8">Experience Thrilling Rides</h2>
        
        <div className="flex gap-8">
          <CategorySidebar 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          
          <div className="flex-1">
            <div 
              ref={carouselRef}
              className="flex overflow-x-hidden scroll-smooth space-x-4 py-4 px-2"
              style={{ scrollbarWidth: 'none' }} // Hide scrollbar for Firefox
            >
              {filteredRides.map((ride) => (
                <RideCard key={ride.id} ride={ride} />
              ))}
            </div>
            
            <CarouselControls onPrev={scrollLeft} onNext={scrollRight} />
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Explore All Rides!
          </button>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RidesSection />
  </React.StrictMode>
);

export default RidesSection;