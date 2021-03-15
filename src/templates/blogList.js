import React from "react";
import Layout from "../components/layout";
import BlogCard from "../components/ui/BlogCard";

export default ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  console.log("group", group);

  return (
    <Layout>
      <div className="flex w-full flex-wrap m-auto container pt-20">
        {group.map(
          ({
            node: {
              id,
              description,
              timeToRead,
              frontmatter: { title, date, thumbnail, tag, author, slug },
            },
          }) => (
            <div className="m-4 w-1/4">
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
    </Layout>
  );
};
