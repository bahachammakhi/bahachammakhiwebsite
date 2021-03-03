import React from "react";
import Footer from "./Layout/Footer";
import NavBar from "./Layout/NavBar";
export default function Layout({ children }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
