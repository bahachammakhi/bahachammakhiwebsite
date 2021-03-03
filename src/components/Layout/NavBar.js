import React from "react";

export default function NavBar() {
  return (
    <nav className="inline-flex space-x-96 items-start justify-start  px-10 py-10">
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
        <p className="w-20 h-full text-2xl text-blue-500">Home</p>
        <p className="w-24 h-full text-2xl text-gray-700">Projects</p>
        <p className="w-20 h-full text-2xl text-gray-700">About</p>
        <p className="w-24 h-full text-2xl text-gray-700">Services</p>
        <p className="w-14 h-full text-2xl text-gray-700">Blog</p>
        <p className="w-28 h-full text-2xl text-gray-700">Contact</p>
      </div>
    </nav>
  );
}
