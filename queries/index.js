module.exports = `
{
  blog: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          slug
        }
      }
    }
}
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit:1000
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
`;
