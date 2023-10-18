
import React, { useState, Fragment } from "react";
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

import './Carousel.styles.scss';

const MAX_VISIBILITY = 3;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 0 && active < count - 1) {
      setActive(active + 1);
    } else if (diff < 0 && active > 0) {
      setActive(active - 1);
    }

    setTouchStart(null);
  };

  return (
   
       
        <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

        
      {active > 0 && (
        <button
          className="nav left"
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeft />
        </button>
      )}
      {React.Children.map(children, (child, i) => (


        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity:
              Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display:
              Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="nav right"
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRight />
        </button>
      )}
    </div>
  
    
  );
};

export default Carousel;
