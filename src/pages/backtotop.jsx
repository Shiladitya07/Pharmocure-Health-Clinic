import React, { useState, useEffect } from 'react';
import dragbutton from "../assets/images/topbutton.png"; 
import '../assets/styles/backtotop.css'

function BackToTop() {
   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    });
  };
  return (
    isVisible && (
    <div className="back-to-top">
      <button className="back-to-top-button" onClick={scrollToTop}>
        <img src = {dragbutton} alt="Back to Top"></img>
      </button>
    </div>
    )
  );
}

export default BackToTop;