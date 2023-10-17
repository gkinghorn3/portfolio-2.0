import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import { useState } from "react";

import "./Sidebar.scss";

export default (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  //  keep state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  function handleStateChange(state) {
    setMenuOpen(state.isOpen);
  }

  //   close the menu
  function closeMenu() {
    setMenuOpen(false);
  }
  // This can be used to toggle the menu, e.g. when using a custom icon
  //   // Tip: You probably want to hide either/both default icons if using a custom icon
  //   // See https://github.com/negomi/react-burger-menu#custom-icons
  //   function toggleMenu() {
  //     setMenuOpen(prevState => !prevState.menuOpen);
  //   }
  //

  return (
    <Menu
      right
      isOpen={menuOpen}
      onStateChange={(state) => handleStateChange(state)}
      
    >
      <div className="social-links">
        <a href="https://www.linkedin.com/in/grant-kinghorn-4b817a192/" target="_blank">
          <img src="/images/icons/linkedIn.svg" />
        </a>
        <a href="https://github.com/gkinghorn3" target="_blank">
          <img src="/images/icons/gitHub.svg" />
        </a>
      </div>
      <Link
        className="menu-item"
        to="test"
        smooth={true}
        duration={500}
        onClick={() => closeMenu()}
      >
        Link1
      </Link>
      <Link
        className="menu-item"
        to="test"
        smooth={true}
        duration={500}
        onClick={() => closeMenu()}
      >
        Link2
      </Link>
      <Link
        className="menu-item"
        to="test"
        smooth={true}
        duration={500}
        onClick={() => closeMenu()}
      >
        Link3
      </Link>
    </Menu>
  );
};
