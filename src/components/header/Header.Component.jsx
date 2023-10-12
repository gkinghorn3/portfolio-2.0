import BaseBtn from "../Base-button/BaseBtn.component";

import "./Header.styles.scss";

const Header = () => {
  return (
    <section className="header-container">
      <div className="text-content">
        <h2>Full Stack Web Developer</h2>
        <h1>GRANT KINGHORN</h1>
        <p>
          Hi! I’m an Edinburgh based web developer that specialises in designing and developing
          exceptional digital experiences. My most frequently used tech stack includes: JavaScript, React, Node/Express, MongoDB and Redux. Alongside
          my preffered tools, I often work with WordPress, Webflow, Big Commerce, and Shopify.
          Whether it's a full-blown custom e-commerce platform, or a simple but elegant brochure website, I can help you craft a fully responsive and visually stunning website
          that compels users to take action.
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
    </section>
  );
};

export default Header;
