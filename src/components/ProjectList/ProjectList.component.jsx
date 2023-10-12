import ProjectCard from '../ProjectCard/ProjectCard.component';

import './ProjectList.styles.scss';

const projects =[
    {
      projectTitle: 'Little White Pig',
      projectDescription: 'A clean & responsive website for an Edinburgh based New Town bar & kitchen. This project marked a shift away from my use of Wordpress, as Webflow offers more control over the CSS without the need for third-party plugins, while generally streamlines the development process as a whole.  ',
      technologies: ['Webflow', 'HTML', 'CSS', 'Javascript'],
      projectSiteLink: 'https://www.littlewhitepig.co.uk/',
      projectCodeLink: '',
      projectImage: '/images/lwpfeature.jpg',
      siteType: 'site',
    }
  ];

const ProjectList = () => {


    return (
        <section class='project-list-container'>
            <h2 className='project-section-heading'>PROJECTS</h2>
            <ProjectCard project={projects[0]} layoutOrientation='normal' />
        </section>
    )
}

export default ProjectList;