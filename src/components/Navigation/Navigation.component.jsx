import { Link } from "react-scroll";


import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src="/images/GKD..png" />
      </div>
      <div className="nav-links-container">
        <Link to="projects" smooth={true} duration={1000} className="nav-link">
          Projects
        </Link>
        <Link to="contact-form" smooth={true} duration={1000} className="nav-link">
          Contact
        </Link>
        <a href="https://www.linkedin.com/in/grant-kinghorn-4b817a192/" target="_blank">
          <img src="/images/icons/linkedIn.svg" />
        </a>
        <a href="https://github.com/gkinghorn3" target="_blank">
          <img src="/images/icons/gitHub.svg" />
        </a>
      </div>

    </div>
  );
};

export default Navigation;
