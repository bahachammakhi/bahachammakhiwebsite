import React from "react";

import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { sideProjects } = useStaticQuery(graphql`
    query {
      sideProjects: allSideprojectsYaml {
        edges {
          node {
            id
            title
            # image {
            #   childImageSharp {
            #     fluid(maxWidth: 630) {
            #       ...GatsbyImageSharpFluid_tracedSVG
            #     }
            #   }
            # }
            image
            link
            description
          }
        }
      }
    }
  `);
  console.log("sideProjectsgdfgdfg", sideProjects);
  return <div></div>;
};
