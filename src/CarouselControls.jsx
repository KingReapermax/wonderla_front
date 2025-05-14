import React from "react";

const CarouselControls = ({ onPrev, onNext, disablePrev, disableNext }) => (
  <div className="flex gap-4">
    <button
      className={`p-3 rounded-full bg-yellow-400 bg-opacity-100 hover:scale-115 hover:text-[#1a237e] text-white text-2xl transition shadow-lg ${disablePrev ? "opacity-40 cursor-not-allowed" : ""}`}
      onClick={onPrev}
      disabled={disablePrev}
      aria-label="Previous"
    >&#8592;</button>
    <button
      className={`p-3 rounded-full bg-yellow-400 bg-opacity-100 hover:scale-115 hover:text-[#1a237e] text-white text-2xl transition shadow-lg ${disableNext ? "opacity-40 cursor-not-allowed" : ""}`}
      onClick={onNext}
      disabled={disableNext}
      aria-label="Next"
    >&#8594;</button>
  </div>
);

export default CarouselControls;
