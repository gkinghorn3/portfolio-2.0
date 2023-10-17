import "./ProjectCard.styles.scss";

const ProjectCard = ({
  project: {
    projectTitle,
    projectDescription,
    technologies,
    projectSiteLink,
    projectCodeLink,
    projectImage,
    siteType,
  },
  layoutOrientation,
}) => {
  return (
    <article className={`project-container ${layoutOrientation}`}>
        <div className='project-image-container'>
            <img className="project-image"
            src={projectImage}
            alt="Picture of heading area of project website"
            />
        </div>
       
      
      <div className="content-wrapper">
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        <div className="technologies-container">
          {technologies.map((technology) => (
            <span className="technology-tag" key={projectTitle}>
              {technology}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={projectSiteLink} target="blank">
            <span>{`View ${siteType}`}</span>{" "}
            <img src="/images/icons/openLink.svg" />
          </a>

          {projectCodeLink && (
            <a href={projectCodeLink} target="blank">
              <span>View Code</span>
              <img src="/images/icons/gitHubAlternate.svg" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
