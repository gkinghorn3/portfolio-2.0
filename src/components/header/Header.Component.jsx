import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="text-content">
        <h1>Grant Kinghorn</h1>
        <h2>Fullstack Web Developer</h2>
        <p>
          I am a passionate UK-based front-end developer with over four years of
          experience working with a variety of libraries, frameworks & platforms such as
          React, Redux, NextJS, NodeJs/ Express, SASS, BigCommerce, Shopify, Webflow and
          WordPress. I build dynamic & intuitive user experiences that drive
          sales increase exposure and deliver brand messages effectively.
        </p>
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
