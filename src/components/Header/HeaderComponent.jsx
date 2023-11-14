import "./Header.styles.scss";

const Header = () => {
  return (
    <section className="header-container">
      <div className="header-content">
        <div className="text-content">
          <h2>Web Developer & Digital Marketer</h2>
          <h1>GRANT KINGHORN</h1>
          <p>
            Hi! I'm a front-end developer based in Edinburgh that specialises
            creating user experiences that leave a lasting impression. 
            <br/>
            <br/>
            My go-to
            tech stack includes: JavaScript, React, Node/Express, and Redux.
            Alongside my preferred tools, I often work with WordPress, Webflow,
            Big Commerce, and Shopify. 
            <br/>
            <br/>
            I also offer a
            variety of digital marketing services including: on-page SEO, local
            SEO audits/ GMB management and PPC campaign optimisation/ management
            across Meta, Google & Bing.
          </p>
        </div>
        <div className="headshot-container">
          <img
            src="/images/profile-pic1.webp"
            alt="Grant Kinghorn"
            className="header-image"
          />
        </div>
      </div>
{/* 
      <img
        src="/images/icons/down_icon.svg"
        className="header-scroll-icon bounce"
      /> */}
    </section>
  );
};

export default Header;
