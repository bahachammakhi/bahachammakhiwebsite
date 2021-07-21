import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectCard from "../../components/ui/ProjectCard";

export default function PortfolioSection() {
  const { sideProjects } = useStaticQuery(graphql`
    query {
      sideProjects: allSideprojectsYaml {
        edges {
          node {
            id
            title
            image
            link
            company
            description
            tags
          }
        }
      }
    }
  `);

  return (
    <section id="projects" class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            My work portfolio
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            From Web Components and UI/UX animations to React.JS, Redux, Vue.JS,
            and Node.JS. Check out my latest web software development portfolio
            projects.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {sideProjects.edges.map(({ node }, index) => (
            <ProjectCard {...node} />
          ))}
        </div>
      </div>
    </section>
  );
}
