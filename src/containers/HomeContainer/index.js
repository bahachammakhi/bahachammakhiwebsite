import * as React from "react";
import Button from "../../components/ui/Button";
import BlogPreviewSection from "./BlogPreviewSection";
import CatchupSection from "./CatchupSection";
import Illustration from "./Illustration";

const HomeContainer = () => {
  return (
    <main>
      <title>Home Page</title>
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
      <BlogPreviewSection />
    </main>
  );
};

export default HomeContainer;
