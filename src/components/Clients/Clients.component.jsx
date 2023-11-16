import React, { useEffect, useRef, Component } from 'react';
import Marquee from "react-fast-marquee";

import './clients.style.scss'; 



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

export default function Clients() {

  const bgClr = [1, 4, 13];

  return (
    <div className="clients-container">
      <Marquee speed={50}  >
        <img src='/images/clients-logos/centro.png'/>
        <img src='/images/clients-logos/elios.png'/>
        <img src='/images/clients-logos/FCN.png'/>
        <img src='/images/clients-logos/lwp.png'/>
        <img src='/images/clients-logos/mv.png'/>
        <img src='/images/clients-logos/ndurance.png'/>
        <img src='/images/clients-logos/toolden.png'/>
      </Marquee>
    </div>
  );
}