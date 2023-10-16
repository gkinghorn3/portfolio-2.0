import ProjectCard from "../ProjectCard/ProjectCard.component";

import "./ProjectList.styles.scss";

const projects = [
  {
    projectTitle: "Little White Pig",
    projectDescription:
      "A clean & responsive website for an Edinburgh based New Town bar & kitchen built on Webflow's platform.",
    technologies: ["Webflow", "HTML", "CSS", "Javascript"],
    projectSiteLink: "https://www.littlewhitepig.co.uk/",
    projectCodeLink: "",
    projectImage: "/images/lwpfeature.jpg",
    siteType: "site",
  },
  {
    projectTitle: "N-Durance Tools",
    projectDescription:
      "An e-commerce website for a UK based tool company built on the Big Commerce platform & Handlebars. My role in the project involved developing the custom theme template along with the css rules to be used across the site.",
    technologies: ["Big Commerce", "HTML", "CSS", "handlebars"],
    projectSiteLink: "https://www.littlewhitepig.co.uk/",
    projectCodeLink: "",
    projectImage: "/images/lwpfeature.jpg",
    siteType: "site",
  },
];

const ProjectList = () => {
  return (
    <section class='project-list-container'>
      <h2 className='project-section-heading'>PROJECTS</h2>
      {
        projects.map((project, index) => {
          return <ProjectCard project={project} layoutOrientation={index % 2 === 1 ? 'alternate' : ''} />
        })
      }
    </section>
  )
};

export default ProjectList;
