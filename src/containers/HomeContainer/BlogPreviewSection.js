import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import BlogCard from "../../components/ui/BlogCard";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

const imgLink =
  "https://res.cloudinary.com/bahachammakhi/image/upload/v1613310888/Black_Technology_Blog_Banner_ea809724f2.png";
export default function BlogPreviewSection() {
  const {
    popular: { edges },
  } = useStaticQuery(graphql`
    query {
      popular: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { popular: { eq: true } } }
        limit: 3
      ) {
        edges {
          node {
            description: excerpt(pruneLength: 230)
            id
            timeToRead
            frontmatter {
              title
              date(formatString: "MMM DD, YYYY")
              author
              tag
              slug
              thumbnail
            }
          }
        }
      }
    }
  `);

  return (
    <section className="flex  flex-col items-center">
      <h1 className="text-5xl font-bold my-10 text-gray-700">Articles</h1>
      <div className="flex flex-wrap m-auto container">
        {edges.map(
          ({
            node: {
              id,
              description,
              timeToRead,
              frontmatter: { title, date, thumbnail, tag, author, slug },
            },
          }) => (
            <div className="m-4">
              <BlogCard
                description={description}
                date={date}
                slug={slug}
                thumbnail={thumbnail}
                tag={tag}
                title={title}
                author={author}
              />
            </div>
          )
        )}
      </div>
      <div className="mt-5">
        <Button label="SEE MORE" />
      </div>
    </section>
  );
}
{
  /* <div className="m-4 w-full">
          <Card />
        </div> */
}
