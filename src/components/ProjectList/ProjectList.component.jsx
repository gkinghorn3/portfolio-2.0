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
    projectImage: "/images/LWPfullcapture.jpg",
    siteType: "site",
  },
  
  {
    projectTitle: "Centro Edinburgh",
    projectDescription:
      "A complete website re-design for a city centre family-ran Italian restaurant built using Wordpress & Elementor.",
    technologies: ["Wordpress", "HTML", "CSS", "Javascript"],
    projectSiteLink: "https://centroedinburgh.co.uk/",
    projectCodeLink: "",
    projectImage: "/images/centro-fullpage.jpg",
    siteType: "site",
  }, 

  {
    projectTitle: "N-Durance Tools",
    projectDescription:
      "Custom theme development for a UK based tool company built on the Big Commerce platform.",
    technologies: ["Big Commerce", "HTML", "CSS"],
    projectSiteLink: "https://centroedinburgh.co.uk/",
    projectCodeLink: "",
    projectImage: "/images/Ndurancecapture.jpg",
    siteType: "site",
  }, 


];

const ProjectList = () => {
  return (
    <section class='project-list-container' id='projects'>
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
