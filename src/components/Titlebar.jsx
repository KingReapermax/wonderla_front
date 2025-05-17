import React from "react";

// You can download the Wonderla logo SVG from their site or use a CDN link
const WONDERLA_LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAZOuK6rpK0wPDJAtskfK3Egf2BlmIrF2ww&s"; // Replace with SVG for best quality

const NAV_OPTIONS = [
  {
    label: "Locations",
    href: "#",
    img: "https://wonderla.vercel.app/icons/location.svg",
  },
  {
    label: "Offers",
    href: "#",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75",
  },
  {
    label: "Rides",
    href: "#",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75",
  },
  {
    label: "Restaurants",
    href: "#",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=48&q=75",
  },
  {
    label: "Events",
    href: "#",
    img: "	https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=48&q=75",
  },
];

const Titlebar = ({ setIsOpen }) => (
  <nav className="w-full flex justify-center pt-6 pb-4 bg-transparent">
    <div
      className="flex items-center bg-white rounded-2xl shadow-lg px-8 py-3 mt-3"
      style={{ minWidth: 1100, maxWidth: 1800, width: "90%" }}
    >
      {/* Logo */}
      <img
        src={WONDERLA_LOGO}
        alt="Wonderla Logo"
        className="h-10 mr-8 select-none"
        draggable={false}
      />

      {/* Center nav options */}
      <div className="flex-1 flex justify-center gap-6">
        {NAV_OPTIONS.map((opt) => (
          <a
            key={opt.label}
            href={opt.href}
            className="text-[#717D92] font-semibold text-base px-2 py-1 hover:text-yellow-400 transition-colors"
          >
            <img src={opt.img} alt={opt.label} style={
    opt.label !== "Locations"
      ? {
          color: "transparent",
          filter:
            "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)"
        }
      : undefined
  } className="h-5 inline mr-1"
  
/>
            {opt.label.toUpperCase()}
          </a>
        ))}
      </div>

      {/* Book Tickets Button */}
      <button className="bg-[#fad600] hover:bg-yellow-300 text-[#334dcf] font-bold px-2.5 py-2 rounded-lg shadow transition-colors text-sm mr-3">
        BOOK TICKETS
        <img
          src="https://wonderla.vercel.app/icons/tickets.svg"
          className="h-3 px-1 inline"
        />
      </button>

      {/* Hamburger menu */}
      <button
        className="ml-1 flex flex-col justify-center items-center w-10 h-10"
        aria-label="Open menu"
        style={{ border: "none", background: "none" }}
        onClick={() => setIsOpen(true)}
      >
        <div className="w-7 h-1 bg-[#1a237e] rounded mb-1"></div>
        <div className="w-7 h-1 bg-[#1a237e] rounded mb-1"></div>
        <div className="w-7 h-1 bg-[#1a237e] rounded"></div>
      </button>
    </div>
  </nav>
);

export default Titlebar;
