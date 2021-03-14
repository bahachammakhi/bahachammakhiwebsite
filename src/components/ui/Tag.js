import React from "react";

export default function Tag({ children }) {
  return (
    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
      {children}
    </div>
  );
}
