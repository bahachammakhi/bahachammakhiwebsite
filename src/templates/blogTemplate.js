import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { SEO } from "../components/SEO";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO
        type="NewsArticle"
        title={frontmatter.title}
        articleBody={frontmatter.description}
        datePublished={frontmatter.normalDate}
        dateModified={
          frontmatter.edited ? frontmatter.edited : frontmatter.date
        }
        cover={frontmatter.thumbnail}
        location={frontmatter.slug}
        description={frontmatter.description}
        readTime={frontmatter.timeToRead}
      />
      <article className="container m-auto pt-20">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="markdown container m-auto max-w-screen-md  "
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
