import { bool } from "prop-types";
import { Link } from "react-scroll";

import "./BurgerMenu.styles.scss";

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <div className={`burger-menu ${open === true ? "open" : ""}`}>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/grant-kinghorn-4b817a192/"
          target="_blank"
        >
          <img src="/images/icons/linkedIn.svg" />
        </a>
        <a href="https://github.com/gkinghorn3" target="_blank">
          <img src="/images/icons/gitHub.svg" />
        </a>
      </div>
      <Link
        className="menu-item"
        to="projects"
        smooth={true}
        duration={500}
        onClick={() => setOpen(false)}
      >
        Projects
      </Link>
      <Link
        className="menu-item"
        to="contact-form"
        smooth={true}
        duration={500}
        onClick={() => setOpen(false )}
      >
        Contact
      </Link>
     
    </div>
  );
};

BurgerMenu.propTypes = {
  open: bool.isRequired,
};
export default BurgerMenu;
