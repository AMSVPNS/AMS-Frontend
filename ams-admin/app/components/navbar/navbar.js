"use client";

import { FaBookReader } from "react-icons/fa";

import { FiBell, FiMoon, FiInfo, FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <header
      className="w-full bg-white shadow-sm"
      style={{ marginLeft: "64px" }}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2">
        <h1 className="text-2xl font-semibold text-blue-700">Dashboard</h1>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <FiSearch className="absolute left-2 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Icons */}
          <button className="text-gray-600 hover:text-blue-600">
            <FiBell size={20} />
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <FiMoon size={20} />
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <FiInfo size={20} />
          </button>

          {/* Profile Image */}
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
            {/*<Image src="/profile.jpg"  />*/}
            <FaBookReader alt="Profile" width={32} height={100} />;
          </div>
        </div>
      </div>
    </header>
  );
}
