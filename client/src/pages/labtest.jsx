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

function Main_logo() {
  return (
    <>
      <header>
        <div className="logo">
          <h1>
           <Link to="/" className="home-link logo-flex" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <img src={Logo} alt="PharmoCure Logo" className="logo-img" />
  <span className="logo-text">PharmoCure Health Clinic</span>
</Link>

          </h1>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search Doctors, Specialities, Conditions etc."
            className="search-bar"
          />
        </div>
        <div className="loginbutt"> 
          <Link to="/login">
            <button className='buttonn'>Login / Sign Up</button>
          </Link>
        </div>
      </header>
      <br />
      <hr />
    </>
  );
}

function Nav() {
  const location = useLocation();

  const navItems = [
    { label: "Buy Medicine", icon: "💊", link: "/buymedicine" },
    { label: "Book Appointment", icon: "📅", link: "/bookappointment" },
    { label: "Consultation", icon: "🩺", link: "/consultation" },
    { label: "Health Records", icon: "📁", link: "/healthrecords" },
  ];

  return (
    <>
      <nav className="nav-section">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <Link to={item.link} key={index} className={`nav-card ${isActive ? "active" : ""}`}>
              <div className="nav-icon">{item.icon}</div>
              <div className="nav-label">{item.label}</div>
            </Link>
          );
        })}
      </nav>
      <hr />
    </>
  );
}
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