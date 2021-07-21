import React from "react";

export default function ProjectCard({
  title,
  description,
  image,
  company,
  link,
  tags,
}) {
  console.log({ company });
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img
          alt="gallery"
          className="opacity-0 lg:opacity-100 absolute inset-0 w-full h-full object-cover object-center"
          src={image}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 lg:opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            {company}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <h1 className="title-font text-lg font-light text-blue-600 mb-3">
            {tags}
          </h1>
          <p className="leading-relaxed">{description}</p>
          {link && (
            <a href={link} target="_blank" className="text-blue-600 py-4">
              Check it
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
