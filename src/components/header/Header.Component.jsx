import BaseBtn from "../Base-button/BaseBtn.component";

import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="text-content">
        <h2>Full Stack Web Developer</h2>
        <h1>GRANT KINGHORN</h1>
        <p>
          Hi! I’m a web developer with expertise in designing and developing
          exceptional digital experiences. My most used tech stack includes: JavaScript, React, Node/Express, MongoDB and Redux. Alongside
          my preffered tools, I often work with WordPress, Webflow, Big Commerce, and Shopify.
           My passion lies in creating user-friendly and visually
          appealing digital experiences that cater to a wide range of clients.
           If you have any questions or would like to discuss
          your project further, please don’t hesitate to contact me.
        </p>
        <BaseBtn className="header-cta" btnText="Contact" />
      </div>
      <div className="headshot-container">
        <img
          src="/images/profile-pic.png"
          alt="Grant Kinghorn"
          className="header-image"
        />
      </div>
    </div>
  );
};

export default Header;
