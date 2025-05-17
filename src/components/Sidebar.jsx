import React from "react";
// import wonderlaLogo from "../assets/wonderla-logo.png"; // Use your logo asset

const sidebarLinks = [
  {
    label: "Parks",
    description: "Explore Your favourite Wonderla Park",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=48&q=75",
  },
  {
    label: "Resorts",
    description: "Get a rejuvenating experience at Wonderla Resort",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75",
  },
  {
    label: "Offers & Combos",
    description: "Plan the perfect day with exciting offers",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75",
  },
  {
    label: "Timings And Guidelines",
    description: "Know the timings and other guidelines",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=48&q=75",
  },
  {
    label: "About Us",
    description: "Know all about Wonderla",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=48&q=75",
  },
  {
    label: "Quick Links",
    description: "Explore all other relevant information here",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=48&q=75",
  },
  {
    label: "Contact Us",
    description: "Get In Touch Wonderla Team",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=48&q=75",
  },
];

const sidebarButtons = [
  {
    label: "Group Booking",
    color: "yellow",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75",
    disc: "Reach Out To Wanderla Team",
  },
  {
    label: "Tour Operator Portal",
    color: "blue",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=96&q=75",
    disc: "Reach Out To Wanderla Team",
  },
  {
    label: "Partner With Us",
    color: "yellow",
    img: "https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75",
    disc: "Reach Out To Wanderla Team",
  },
];

const Sidebar = ({ isOpen, onClose }) => (
  <div
    className={`fixed top-0 right-0 h-full w-[470px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* Close button */}
    <div className="flex justify-between items-center bg-white w-[470px] p-8 pb-3">
      <img
        src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75"
        className="h-16"
      ></img>
      <button
        className="flex justify-center items-center mr-4 p-1.5 rounded-full bg-transparent cursor-pointer border-solid border-gray-200 hover:border-gray-200"
        onClick={onClose}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-black"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div className="flex flex-col gap-6 p-8 y-scroll">
      {sidebarLinks.slice(0, 4).map((item) => (
        <div key={item.label} className="mb-2">
          <div className="text-[#22304a] text-xl flex items-center gap-2">
            {/* Add an icon here if needed */}
            <img src={item.img} alt={item.label} className="h-6 w-6 mr-2" />
            <div className="flex flex-col">
              {item.label}
              <div className="text-black text-xs">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        {sidebarButtons.map((btn) => (
          <button
            key={btn.label}
            className={`flex flex-row items-center w-full rounded-2xl text-xl ${
              btn.color === "yellow"
                ? "bg-[#FAD600] text-black"
                : "bg-[#334DCF] text-white"
            }`}
          >
            <img src={btn.img} alt={btn.label} className="h-8 w-8 mr-3" />
            <div className="flex flex-col items-start">
              {btn.label}
              <div
                className={`text-xs font-mullet ${
                  btn.color === "yellow"
                    ? "bg-[#FAD600] text-black"
                    : "bg-[#334DCF] text-white"
                }`}
              >
                {btn.disc}
              </div>
            </div>
          </button>
        ))}
      </div>
      {sidebarLinks.slice(4).map((item) => (
        <div key={item.label} className="mb-2">
          <div className="text-[#22304a] text-xl flex items-center gap-2">
            <img src={item.img} alt={item.label} className="h-6 w-6 mr-2" />
            <div className="flex flex-col">
              {item.label}
              <div className="text-black text-xs">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
