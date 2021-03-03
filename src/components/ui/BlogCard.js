import React from "react";

export default function BlogCard({ cardImg }) {
  return (
    <div className="relative">
      {" "}
      <img src={cardImg} className="max-h-30 absolute w-full top-0" />
      <div
        className="inline-flex pt-60 flex-col space-y-1.5 items-start justify-start p-7 bg-white shadow"
        style={{ width: 400, height: 500 }}
      >
        <div className="w-11/12  h-7">
          <p className="flex-1 text-lg text-gray-700">22 Oct 2020</p>
        </div>
        <div className="w-11/12 h-14">
          <p className="flex-1 text-lg font-semibold text-gray-700">
            Getting Started with NodeJS and express
          </p>
        </div>
        <div className="w-11/12 h-36">
          <p className="flex-1 h-full text-lg text-gray-500">
            IndigoWorkPlace Platform that generates a video slider from media
            (PDF/JPG/PNG) by choosing layout, background, videos and select the
            zones.
          </p>
        </div>
      </div>
    </div>
  );
}
