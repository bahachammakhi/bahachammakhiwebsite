import React from "react";
import { navigate } from "gatsby";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={` navbar-expand-lg shadow-md bg-white w-full flex-col lg:flex-row lg:inline-flex space-x-1.5 space-y-1.5 lg:space-x-40 xl:space-x-96 lg:items-start lg:justify-start  px-8 py-8 z-50 ${
        navbarOpen ? "bg-white shadow-md" : ""
      }
`}
    >
      <div className="flex space-x-1.5 items-center lg:justify-end lg:w-72 h-full">
        <div className="flex h-full  bg-blue-600 rounded-lg" />
        <p
          style={{ fontFamily: "'Oswald', sans-serif" }}
          className=" w-full lg:w-60 h-full text-2xl"
        >
          BAHA EDDINE CHAMMAKHI
        </p>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="m-auto flex lg:hidden focus:outline-none"
        >
          {navbarOpen ? (
            <>
              <CloseIcon className="h-6 w-6 mr-1" /> Fermer{" "}
            </>
          ) : (
            <>
              <MenuIcon className="h-6 w-6 mr-1" /> Menu
            </>
          )}
        </button>
      </div>

      <div
        className={
          "flex-col lg:flex lg:flex-row lg:space-x-8 lg:items-start lg:justify-start" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <a
          onClick={() => navigate("/")}
          className="w-20 h-full text-2xl text-blue-500"
        >
          Home
        </a>
        <a href="/#projects" className="w-24 h-full text-2xl text-gray-700">
          Projects
        </a>
        <a href="#" className="w-20 h-full text-2xl text-gray-700">
          About
        </a>
        <a href="/#services" className="w-24 h-full text-2xl text-gray-700">
          Services
        </a>
        <a
          href="https://blog.bahachammakhi.tn"
          className="w-14 h-full text-2xl text-gray-700"
        >
          Blog
        </a>
        <a href="#contact" className="w-28 h-full text-2xl text-gray-700">
          Contact
        </a>
      </div>
    </nav>
  );
}
