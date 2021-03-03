import React from "react";
import BlogCard from "../../components/ui/BlogCard";
import Button from "../../components/ui/Button";
const imgLink =
  "https://res.cloudinary.com/bahachammakhi/image/upload/v1613310888/Black_Technology_Blog_Banner_ea809724f2.png";
export default function BlogPreviewSection() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold my-10 text-gray-700">Articles</h1>
      <div className="flex flex-wrap justify-between">
        <div className="m-4">
          <BlogCard cardImg={imgLink} />
        </div>{" "}
        <div className="m-4">
          <BlogCard cardImg={imgLink} />
        </div>
        <div className="m-4">
          <BlogCard cardImg={imgLink} />
        </div>
      </div>
      <div className="mt-5">
        <Button label="SEE MORE" />
      </div>
    </div>
  );
}
