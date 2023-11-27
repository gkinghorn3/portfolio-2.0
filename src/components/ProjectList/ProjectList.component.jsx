import ProjectCard from "../ProjectCard/ProjectCard.component";

import "./ProjectList.styles.scss";

const projects = [
  {
    projectTitle: "Elios",
    projectDescription:
      "Custom theme development for a UK based tool company built on the Big Commerce platform.",
    technologies: ["React", "SCSS"],
    projectSiteLink: "https://eliosedinburgh.com/",
    projectCodeLink: "https://github.com/gkinghorn3/Elios",
    projectImage: "/images/elios2.0.png",
    siteType: "site",
  },

  {
    projectTitle: "Uni Quiz Revision App",
    projectDescription:
      "A simple React application used for revising my current uni module. The app displays summary stats at the end. See Github readMe for more info.",
    technologies: ["React", "Vanilla CSS"],
    projectSiteLink: "https://capable-belekoy-f3ea2a.netlify.app/",
    projectCodeLink: "https://github.com/gkinghorn3/quiz-app/tree/master",
    projectImage: "/images/quizApp.webp",
    siteType: "Demo",
  },

  {
    projectTitle: "MV Sport Van Logo",
    projectDescription:
      "Logo re-design for MV Commercial's line of Sport Ford Transit vans.",
    technologies: ["Logo Design", "Adobe Illustrator"],
    projectSiteLink: "",
    projectCodeLink: "",
    projectImage: "/images/MVSportlogo.jpg",
    siteType: "Demo",
  },


  {
    projectTitle: "Centro Edinburgh",
    projectDescription:
      "A complete website re-design for a city centre family-ran Italian restaurant built using Wordpress & Elementor.",
    technologies: ["Wordpress", "Vanilla CSS"],
    projectSiteLink: "https://centroedinburgh.co.uk/",
    projectCodeLink: "",
    projectImage: "/images/centro-fullpage.jpg",
    siteType: "site",
  },

  {
    projectTitle: "N-Durance Tools",
    projectDescription:
      "Custom theme development for a UK based tool company built on the Big Commerce platform.",
    technologies: ["Big Commerce", "Handlebars", "SCSS"],
    projectSiteLink: "https://www.ndurancetools.co.uk/",
    projectCodeLink: "",
    projectImage: "/images/Ndurancecapture.jpg",
    siteType: "site",
  },

  {
    projectTitle: "Little White Pig",
    projectDescription:
      "A clean & responsive website for an Edinburgh based New Town bar & kitchen built on Webflow's platform.",
    technologies: ["Webflow", "Vanilla CSS"],
    projectSiteLink: "https://www.littlewhitepig.co.uk/",
    projectCodeLink: "",
    projectImage: "/images/LWPfullcapture.jpg",
    siteType: "site",
  },
];

// https://capable-belekoy-f3ea2a.netlify.app/

const ProjectList = () => {
  return (
    <section className="project-list-container" id="projects">
      <h2 className="project-section-heading">PROJECTS</h2>
      {projects.map((project, index) => {
        return (
          <ProjectCard
            project={project}
            layoutOrientation={index % 2 === 1 ? "alternate" : ""}
          />
        );
      })}
    </section>
  );
};

export default ProjectList;
