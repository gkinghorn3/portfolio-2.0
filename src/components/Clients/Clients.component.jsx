import React, { useEffect, useRef } from 'react';
import './clients.style.scss'; 

const Clients = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scroller = scrollerRef.current;
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className="scroller" data-speed="medium" ref={scrollerRef}>
      <ul className="tag-list scroller__inner">
        <li><img src='/images/clients-logos/centro.png'/></li>
        <li><img src='/images/clients-logos/elios.png'/></li>
        <li><img src='/images/clients-logos/FCN.png'/></li>
        <li><img src='/images/clients-logos/lwp.png'/></li>
        <li><img src='/images/clients-logos/mv.png'/></li>
        <li><img src='/images/clients-logos/ndurance.png'/></li>
        <li><img src='/images/clients-logos/toolden.png'/></li>

      </ul>
    </div>
  );
};

export default Clients;