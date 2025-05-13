import React from 'react';

const CarouselControls = ({ onPrev, onNext }) => {
  return (
    <div className="flex justify-center mt-6 space-x-4">
      <button
        onClick={onPrev}
        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label="Previous"
      >
        &lt;
      </button>
      <button
        onClick={onNext}
        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
};

export default CarouselControls;