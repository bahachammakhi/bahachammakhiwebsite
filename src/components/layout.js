import React from "react";
import Footer from "./Layout/Footer";
import NavBar from "./Layout/NavBar";
export default function Layout({ children }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
