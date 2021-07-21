import * as React from "react";
import Button from "../../components/ui/Button";
import BlogPreviewSection from "./BlogPreviewSection";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import CatchupSection from "./CatchupSection";
import Illustration from "./Illustration";
import Projects from "./Projects";
import { SEO } from "../../components/SEO";

const HomeContainer = () => {
  return (
    <div className="overflow-hidden m-auto">
      <SEO title="Hello world!" type="Organization" />
      <title>Home Page</title>
      <section id="herosection">
        <div className="grid grid-cols-2 justify-items-center align-middle content-center m-4 mt-10 sm:m-auto">
          <div className="col-span-2 sm:col-span-1 flex flex-col justify-between w-full md:w-9/12 m-1  sm:m-auto">
            <CatchupSection />
            <div className="mt-5">
              <Button label="CONTACT ME" />
            </div>
          </div>
          <div className=" hidden sm:flex col-span-2 sm:col-span-1">
            <Illustration />
          </div>
        </div>
      </section>
      <PortfolioSection />
      <ServicesSection />
      <Projects />
      <BlogPreviewSection />
    </div>
  );
};

export default HomeContainer;
