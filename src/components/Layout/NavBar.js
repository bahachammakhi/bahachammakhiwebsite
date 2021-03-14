import React from "react";

export default function NavBar() {
  return (
    <nav className=" fixed navbar-expand-lg shadow-md bg-white w-full inline-flex space-x-96 items-start justify-start  px-8 py-8 z-50">
      <div className="flex space-x-1.5 items-center justify-end w-72 h-full">
        <div className="h-full bg-blue-600 rounded-lg" />
        <p
          style={{ fontFamily: "'Oswald', sans-serif" }}
          className="w-60 h-full text-2xl"
        >
          BAHA EDDINE CHAMMAKHI
        </p>
      </div>
      <div className="flex space-x-8 items-start justify-start">
        <a href="#" className="w-20 h-full text-2xl text-blue-500">
          Home
        </a>
        <a href="#" className="w-24 h-full text-2xl text-gray-700">
          Projects
        </a>
        <a href="#" className="w-20 h-full text-2xl text-gray-700">
          About
        </a>
        <a href="#" className="w-24 h-full text-2xl text-gray-700">
          Services
        </a>
        <a href="#" className="w-14 h-full text-2xl text-gray-700">
          Blog
        </a>
        <a href="#" className="w-28 h-full text-2xl text-gray-700">
          Contact
        </a>
      </div>
    </nav>
  );
}
