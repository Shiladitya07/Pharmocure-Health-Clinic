import React, { useState } from "react";
import { useLocation,Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Banner from "../assets/images/banner1.jpg";
import Banner2 from "../assets/images/banner2.jpg";
import Banner3 from "../assets/images/banner3.jpg";
import HealthCategories from "./healthcategory";
import TestCategory from "./testcategory";
import BookingSteps from "./bookingstep";
import Logo from "../assets/images/logo.jpeg";
import { Main_logo, Nav } from './home'; 

const CarouselComponent = () => {
  return (
    <div className="carousellll-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        <div>
          <img src={Banner} alt="Slide 1" className="carousell-img" />
         
        </div>
        <div>
          <img src={Banner2} alt="Slide 2" className="carousell-img" />
       
        </div>
        <div>
          <img src={Banner3} alt="Slide 3" className="carousell-img" />

        </div>
      </Carousel>
    </div>
  );
};

const LabTest = () => {
    return(
        <>
            <Main_logo />
            <Nav />
            <CarouselComponent />
            <HealthCategories />
            <BookingSteps />
            <TestCategory />
        </>
        
    );
    
};


export default LabTest;
export { Main_logo, Nav, CarouselComponent };