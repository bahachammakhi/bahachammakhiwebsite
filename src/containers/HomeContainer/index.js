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
    <div>
      <SEO title="Hello world!" type="Organization" />
      <title>Home Page</title>
      <section id="herosection">
        <div className="grid grid-cols-2 justify-items-center align-middle content-center m-auto">
          <div className="col-span-1 flex flex-col justify-between w-9/12  m-auto">
            <CatchupSection />
            <div className="mt-5">
              <Button label="CONTACT ME" />
            </div>
          </div>
          <div className="col-span-1">
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
