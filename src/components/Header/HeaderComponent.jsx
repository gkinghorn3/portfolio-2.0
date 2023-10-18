

import "./Header.styles.scss";

const Header = () => {
  return (
    <section className="header-container">
      <div className="header-content">
        <div className="text-content">
          <h2>Full Stack Web Developer</h2>
          <h1>GRANT KINGHORN</h1>
          <p>
            Hi! I’m an Edinburgh based web developer that specialises 
            developing exceptional digital experiences. My go-to tech stack includes: JavaScript, React,
            Node/Express, MongoDB and Redux. Alongside my preffered tools, I
            often work with WordPress, Webflow, Big Commerce, and Shopify.
            
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
      
        {/* <img src="/images/icons/down_icon.svg" className="header-scroll-icon bounce" /> */}
      
      
    </section>
  );
};

export default Header;
