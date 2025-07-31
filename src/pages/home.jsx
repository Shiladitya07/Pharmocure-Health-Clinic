import React from "react"
import "../assets/styles/home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Avail from "../assets/images/24x7_avail.jpeg"
import Care from "../assets/images/Care.jpeg"
import Top from "../assets/images/topdoctors.jpeg"
import "../assets/styles/specialties.css"
import Gyno from "../assets/images/gyneaco.png"
import Neu from "../assets/images/neurology.png"
import Ortho from "../assets/images/orthopedic.png"
import Dent from "../assets/images/dentist.png"
import Derma from "../assets/images/derma.png"
import Gastro from "../assets/images/gastro.png"
import Pidea from "../assets/images/pedia.png"
import Genaral from "../assets/images/consult.png"


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
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        <div>
          <img src={Top} alt="Slide 1" className="carousel-img" />
          <p className="legend">Consult Top Doctors</p>
        </div>
        <div>
          <img src={Avail} alt="Slide 2" className="carousel-img" />
          <p className="legend">24x7 Online Services</p>
        </div>
        <div>
          <img src={Care} alt="Slide 3" className="carousel-img" />
          <p className="legend">Extensive Care</p>
        </div>
      </Carousel>
    </div>
  );
};


// specialitis//

const specialties = [
   { name: "General Physician", icon: Genaral },
   { name: "Dermatology", icon: Derma },
  { name: "Obstetrics & Gynaecology", icon: Gyno },
  { name: "Orthopaedics", icon: Ortho },
  // { name: "ENT", icon: generalIcon },
  { name: "Neurology", icon: Neu },
  // { name: "Cardiology", icon: generalIcon },
  // { name: "Urology", icon: generalIcon },
   { name: "Gastroenterology", icon: Gastro },
  // { name: "Psychiatry", icon: generalIcon },
     { name: "Paediatrics", icon: Pidea },
  // { name: "Pulmonology", icon: generalIcon },
  // { name: "Endocrinology", icon: generalIcon },
  // { name: "Nephrology", icon: generalIcon },
  // { name: "Neurosurgery", icon: generalIcon },
  // { name: "Rheumatology", icon: generalIcon },
  // { name: "Ophthalmology", icon: generalIcon },
  // { name: "Surgical Gastroenterology", icon: generalIcon },
  // { name: "Infectious Disease", icon: generalIcon },
  // { name: "Laparoscopic Surgery", icon: generalIcon },
  // { name: "Psychology", icon: generalIcon },
  // { name: "Medical Oncology", icon: generalIcon },
  // { name: "Diabetology", icon: generalIcon },
  { name: "Dentist", icon: Dent }
];

const Specialties = () => {
  return (
    <div className="specialties-section">
      <h2>Browse by Specialties</h2>
      <div className="specialties-grid">
        {specialties.map((item, index) => (
          <div className="specialty-card" key={index}>
            <div className="icon-wrapper">
              <img src={item.icon} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export {Main_logo,Nav,CarouselComponent,Specialties}

