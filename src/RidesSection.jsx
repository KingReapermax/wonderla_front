import React, { useState, useRef, useEffect } from "react";
import ridesData from "../data/ridesData.json";
import RideCard from "./RideCard";
import CategorySidebar from "./CategorySidebar";
import CarouselControls from "./CarouselControls";
import Titlebar from "./Titlebar";

const CARD_WIDTH = 310 + 32; // Card width + horizontal margin (e.g., w-[310px] mx-4)
const CARD_PADDING = 32; // 16px left + 16px right (mx-4)

const RidesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("land");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const carouselContainerRef = useRef(null);

  // Filter rides by selected category
  const filteredRides = ridesData.filter(
    (ride) => ride.category === selectedCategory
  );

  // Dynamically calculate how many cards fit in the viewport
  useEffect(() => {
    function handleResize() {
      if (carouselContainerRef.current) {
        const containerWidth = carouselContainerRef.current.offsetWidth;
        const fit = Math.floor(containerWidth / CARD_WIDTH);
        setCardsPerView(fit > 0 ? fit : 1);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset carousel when category changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [selectedCategory, cardsPerView]);

  // Carousel boundaries
  const maxIndex = Math.max(filteredRides.length - cardsPerView, 0);

  // Slide by one card
  const handlePrev = () => setCarouselIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setCarouselIndex((i) => Math.min(i + 1, maxIndex));

  // For smooth sliding animation
  const translateX = -(carouselIndex * CARD_WIDTH);

  return (
    <section className="w-screen h-screen bg-[#1a237e] flex flex-col overflow-hidden">
      <Titlebar />
       <div className="flex flex-1 items-center justify-center">
        <CategorySidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="flex-1 flex flex-col items-center">
          {/* Heading and Controls */}
          <div className="flex items-center justify-between w-full max-w-7xl mb-8 px-8">
            <h2 className="text-5xl font-extrabold text-white tracking-tight">
              Our Iconic Rides
            </h2>
            <CarouselControls
              onPrev={handlePrev}
              onNext={handleNext}
              disablePrev={carouselIndex === 0}
              disableNext={carouselIndex >= maxIndex}
            />
          </div>
          {/* Carousel */}
          <div
            ref={carouselContainerRef}
            className="relative w-full max-w-7xl overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${translateX}px)`,
                width: filteredRides.length * CARD_WIDTH,
              }}
            >
              {filteredRides.map((ride) => (
                <div
                  key={ride.id}
                  className="mx-4 flex-shrink-0"
                  style={{ width: 310 }}
                >
                  <RideCard ride={ride} />
                </div>
              ))}
            </div>
          </div>
          {/* Explore Button */}
          <button className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-[#1a237e] font-bold text-xl px-10 py-4 rounded-2xl uppercase shadow-lg transition">
            Explore All Rides!
          </button>
        </div>
      </div>
    </section>
  );
};

export default RidesSection;
