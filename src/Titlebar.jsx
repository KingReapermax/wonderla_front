import React from "react";

// You can download the Wonderla logo SVG from their site or use a CDN link
const WONDERLA_LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAZOuK6rpK0wPDJAtskfK3Egf2BlmIrF2ww&s"; // Replace with SVG for best quality

const NAV_OPTIONS = [
  { label: "Locations", href: "#" },
  { label: "Offers", href: "#" },
  { label: "Rides", href: "#" },
  { label: "Restaurants", href: "#" },
  { label: "Events", href: "#" },
];

const Titlebar = () => (
  <nav className="w-full flex justify-center pt-6 pb-4 bg-transparent">
    <div className="flex items-center bg-white rounded-2xl shadow-lg px-8 py-3" style={{ minWidth: 1100, maxWidth: 1400, width: "90%" }}>
      {/* Logo */}
      <img
        src={WONDERLA_LOGO}
        alt="Wonderla Logo"
        className="h-10 mr-8 select-none"
        draggable={false}
      />

      {/* Center nav options */}
      <div className="flex-1 flex justify-center gap-8">
        {NAV_OPTIONS.map((opt) => (
          <a
            key={opt.label}
            href={opt.href}
            className="text-[#1a237e] font-semibold text-base px-2 py-1 hover:text-yellow-400 transition-colors"
          >
            {opt.label}
          </a>
        ))}
      </div>

      {/* Book Tickets Button */}
      <button className="bg-yellow-400 hover:bg-yellow-300 text-[#1a237e] font-bold px-6 py-2 rounded-lg shadow transition-colors text-sm mr-3">
        BOOK TICKETS
      </button>

      {/* Hamburger menu */}
      <button
        className="ml-1 flex flex-col justify-center items-center w-10 h-10"
        aria-label="Open menu"
        style={{ border: "none", background: "none" }}
      >
        <div className="w-7 h-1 bg-[#1a237e] rounded mb-1"></div>
        <div className="w-7 h-1 bg-[#1a237e] rounded mb-1"></div>
        <div className="w-7 h-1 bg-[#1a237e] rounded"></div>
      </button>
    </div>
  </nav>
);

export default Titlebar;
