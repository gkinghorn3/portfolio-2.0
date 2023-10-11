import BaseBtn from "../Base-button/BaseBtn.component";

import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="text-content">
        
        <h2>Full Stack Web Developer</h2>
        <h1>GRANT KINGHORN</h1>
        <p>
          I am a passionate UK-based front-end developer with over four years of
          experience working with a variety of libraries, frameworks & platforms such as
          React, Redux, NextJS, NodeJs/ Express, MongoDB, Firebase, SASS, BigCommerce, Shopify, Webflow and
          WordPress. I build dynamic & intuitive user experiences that drive
          sales increase exposure and deliver brand messages effectively.
        </p>
        <BaseBtn className='header-cta' btnText="Contact" />
        
      </div>
      <div className='headshot-container'>
        <img
          src="/images/profile-pic.png"
          alt="Grant Kinghorn"
          className='header-image'
        />
      </div>

    </div>  
  );
};

export default Header;
