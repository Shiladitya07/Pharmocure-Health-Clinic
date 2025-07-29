import React from "react"
import "../assets/styles/home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Avail from "../assets/images/24x7_avail.jpeg"
import Care from "../assets/images/Care.jpeg"
import Top from "../assets/images/topdoctors.jpeg"


function Main_logo() {
 

  return (
    <>
       <header>
          <div className="logo">
            <br></br>
            <h1>Online Health Clinic</h1>
          </div>
          <div className="search">
            <input
              placeholder="TYPE Here"
              className="brutalist-input smooth-type"
              type="text"
            />
          <label className="brutalist-label"></label>

          </div>
        <div className="loginbutt">
            <button><a>Login</a></button>
        </div>
       </header>
       <br></br>
       <hr></hr> 
    
    </>
  )
}
function Nav () {
    return (
        <>
           <nav>
                <div>
                    <a>Buy Medicine </a>
                    <a>Book an appointment </a>
                    <a>Consultation </a>
                    <a>Health Records </a>
                </div>
            </nav>
            <hr></hr>
        </>
    )
}

const CarouselComponent = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        <div>
          <img src={Top} alt="Slide 1" />
          <p className="legend">Consult Top Doctors</p>
        </div>
        <div>
          <img src={Avail} alt="Slide 2" />
          <p className="legend">24x7 Online Services</p>
        </div>
        <div>
          <img src={Care} alt="Slide 3" />
          <p className="legend">Extensive Care</p>
        </div>
      </Carousel>
    </div>
  );
};

export {Main_logo,Nav,CarouselComponent}