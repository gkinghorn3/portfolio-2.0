import React, { useEffect, useRef, Component } from 'react';
import Slider from "react-slick";

import './clients.style.scss'; 

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// const Clients = () => {
//   const scrollerRef = useRef(null);

//   useEffect(() => {
//     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       addAnimation();
//     }

//     function addAnimation() {
//       const scroller = scrollerRef.current;
//       scroller.setAttribute("data-animated", true);

//       const scrollerInner = scroller.querySelector(".scroller__inner");
//       const scrollerContent = Array.from(scrollerInner.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         duplicatedItem.setAttribute("aria-hidden", true);
//         scrollerInner.appendChild(duplicatedItem);
//       });
//     }
//   }, []);

//   return (
//     <div className="scroller" data-speed="slow" ref={scrollerRef}>
//       <ul className="tag-list scroller__inner">
//         <li><img src='/images/clients-logos/centro.png'/></li>
//         <li><img src='/images/clients-logos/elios.png'/></li>
//         <li><img src='/images/clients-logos/FCN.png'/></li>
//         <li><img src='/images/clients-logos/lwp.png'/></li>
//         <li><img src='/images/clients-logos/mv.png'/></li>
//         <li><img src='/images/clients-logos/ndurance.png'/></li>
//         <li><img src='/images/clients-logos/toolden.png'/></li>

//       </ul>
//     </div>
//   );
// };

// export default Clients;

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear", 
      
    };
    return (
      <div>
        <Slider {...settings}>
          <div className='slick-slider-slide'>
            <img src='/images/clients-logos/centro.png'/>
          </div>
          <div className='slick-slider-slide'>
            <img src='/images/clients-logos/elios.png'/>
          </div>
          <div className='slick-slider-slide'>
            <img src='/images/clients-logos/FCN.png'/>
          </div>
          <div className='slick-slider-slide'>
            <img src='/images/clients-logos/lwp.png'/>
          </div>
          <div className='slick-slider-slide'>
            <img src='/images/clients-logos/mv.png'/>
          </div>
          <div className='slick-slider-slide'>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}