import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import BlogCard from "../../components/ui/BlogCard";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function BlogPreviewSection() {
  const {
    popular: { edges },
  } = useStaticQuery(graphql`
    query {
      popular: allHashNodePost {
        edges {
          node {
            brief # "In this article..."
            coverImage # "http://..."
            slug # "my-great-article"
            title # "My Great Article"
            dateAdded
          }
        }
      }
    }
  `);

  return (
    <section className="flex m-auto  flex-col items-center">
      <h1 className="text-5xl font-bold my-10 text-gray-700">Articles</h1>
      <div className="flex flex-wrap m-auto container">
        {edges.map(
          ({ node: { brief, dateAdded, slug, title, coverImage } }) => (
            <div className="m-4">
              <BlogCard
                description={brief}
                date={new Date(dateAdded).toLocaleDateString("en-US", options)}
                slug={slug}
                thumbnail={coverImage}
                tag={"tag"}
                title={title}
                author={"author"}
              />
            </div>
          )
        )}
      </div>
      <div className="mt-5">
        <Button
          onClick={() => window.open("https://blog.bahachammakhi.tn/")}
          label="SEE MORE"
        />
      </div>
    </section>
  );
}
