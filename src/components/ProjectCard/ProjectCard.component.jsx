

import "./ProjectCard.styles.scss";



const ProjectCard = ({
    project: {
        projectTitle,
        projectDescription,
        technologies,
        projectSiteLink,
        projectCodeLink,
        projectImage,
        siteType
    },
}) => {
    const layoutOrientation = technologies.length % 2 === 0 ? "even" : "odd";

    return (
        <article className={`project-container ${layoutOrientation}`}>
            <div className="project-image-wrapper">
                <img src={projectImage} alt="Picture of heading area for little white pig's website" />    
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
                        <span>{`View ${siteType}`}</span> <img src="/images/icons/openLink.svg" />
                    </a>
                    <a href={projectCodeLink} target='blank'>
                        <span>View Code</span> <img src="/images/icons/gitHubAlternate.svg" />
                    </a>
                </div> 
            </div>
        </article>
    );
};

export default ProjectCard;


