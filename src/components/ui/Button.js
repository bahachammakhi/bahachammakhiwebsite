import React from "react";

export default function Button({ label }) {
  return (
    <button className=" focus:outline-none cursor-pointer w-56 h-16 rounded-lg">
      <div className="flex items-center justify-center flex-1 h-full py-4 px-3 bg-blue-600 border rounded-lg border-gray-50">
        <p className="flex-1 h-full text-xl font-bold text-center text-white">
          {label}
        </p>
      </div>
    </button>
  );
}
