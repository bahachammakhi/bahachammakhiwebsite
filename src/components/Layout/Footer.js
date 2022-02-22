import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative text-white bg-blue-500 pt-8 pb-6 mt-12">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute  bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-500 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-white font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Find me on any of sthese platforms, I respond 1-2 business days.
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://resume.bahachammakhi.tn"
                        target="_blank"
                      >
                        Resume
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://blog.bahachammakhi.tn"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/bahachammakhi"
                        target="_blank"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/contact"
                        target="_blank"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()} bahachammakhi.tn{" "}
                <a
                  href="https://www.bahachammakhi.tn"
                  className="text-white hover:text-gray-900"
                >
                  Baha eddine chammakhi
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
