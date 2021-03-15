const createPaginatedPages = require("gatsby-paginate");
const path = require("path");
const Queries = require("./queries");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);

  return graphql(Queries).then((result) => {
    console.log(result);
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    createPaginatedPages({
      edges: result.data.posts.edges,
      createPage,
      pageTemplate: "./src/templates/blogList.js",
      pageLength: 6,
      pathPrefix: "blog",
    });

    return result.data.blog.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      });
    });
  });
};
