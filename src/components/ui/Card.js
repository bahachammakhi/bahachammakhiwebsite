import React from "react";

export default function Card() {
  return (
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
        <div
          className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)",
          }}
        ></div>

        <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
          <div className="header-content inline-flex ">
            <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
              <div className="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
            </div>
            <div className="category-title flex-1 text-sm"> PHP</div>
          </div>
          <div className="title-post font-medium">Mon titre</div>

          <div className="summary-post text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis veritatis vel suscipit ex dolore possimus iure.
            <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm ">
              <span className="">Lire plus</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
