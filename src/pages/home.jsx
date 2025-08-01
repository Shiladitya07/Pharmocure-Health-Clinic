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
import { Link } from 'react-router-dom';



function Main_logo() {
 

  return (
    <>
         <header>
          <div className="logo">
            <h1>
              <Link
                to="/"
                className="home-link"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                ONLINE HEALTH CLINIC
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
            <button className="login-btn">Login / Sign Up</button>
            </div>
          </header>


        <br></br>
        <hr></hr> 
    
    </>
  )
}
function Nav() {
  const navItems = [
    { label: "Buy Medicine", icon: "💊" },
    { label: "Book Appointment", icon: "📅" },
    { label: "Consultation", icon: "🩺" },
    { label: "Health Records", icon: "📁" },
  ];

  return (
    <>
      <nav className="nav-section">
        {navItems.map((item, index) => (
          <div className="nav-card" key={index}>
            <div className="nav-icon">{item.icon}</div>
            <div className="nav-label">{item.label}</div>
          </div>
        ))}
      </nav>
      <hr />
    </>
  );
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
<hr></hr>
const Specialties = () => {
  return (
    <>
      <hr className="specialty-divider" />
      <div className="specialties-section">
        <h2>BROWSE BY SPECIALITIES</h2>
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
      <hr className="specialty-divider" />
    </>
  );
};

function Why() {
  return (
    <>
      <div className="whychoose">
        <center>
          <h1>WHY CHOOSE US</h1>
          </center>
          <br></br>
          <div>
            <a>
                <ul>
                  <li>
                    24x7 Availability
                  </li>
                </ul>
              </a>
          </div>
          <div>
            <a>
                <ul>
                  <li>
                    Verified Doctors
                  </li>
                </ul>
              </a>
          </div>
          <div>
            <a>
                <ul>
                  <li>
                    Instant Prescription
                  </li>
                </ul>
              </a>
          </div>
          <div>
            <a>
                <ul>
                  <li>
                    Secure Consultation
                  </li>
                </ul>
              </a>
          </div>
      </div>
      <hr></hr>
    </>
  )
}
function Services(){
  return (
    <>
      <div className="service">
        <center>
          <h1>OUR SERVICES</h1>
          </center>
          <br></br>
          <div>
            <a>
                <ul>
                  <li>
                    Online Consultation
                  </li>
                </ul>
              </a>
          </div>
          <div>
            <a>
                <ul>
                  <li>
                    Lab Test
                  </li>
                </ul>
              </a>
          </div>
          <div>
            <a>
                <ul>
                  <li>
                    Medicine Delivery
                  </li>
                </ul>
              </a>
          </div>
          <div>
            <a>
                <ul>
                  <li>
                    Mental Health and Wellnesss
                  </li>
                </ul>
              </a>
          </div>
      </div>
      <hr></hr>
    </>
    
  )
}
function About(){
  return (
    <>
      <div className="service">
        <center>
          <h1>ABOUT US</h1>
          </center>
          <br></br>
          <p>
           <center>
             
                Welcome to Online Health Clinic – <br></br>
                your trusted destination for accessible, affordable, and expert healthcare at your fingertips.<br></br>
                At Online Health Clinic, our mission is to simplify healthcare by connecting patients with<br></br>
                experienced doctors, specialists, and medical services—all from the comfort of your home. <br></br>
                Whether you need a quick consultation, an expert opinion, or access to health records and medicines, <br></br>
                we’re here for you 24/7.Driven by technology and compassion, we aim to bring quality care to every corner<br></br>
                of the country—bridging the gap between patients and professionals with ease, trust, and transparency.<br></br>
                <b><i>Your health, our priority</i></b>
            
           </center>
            <br></br>
          </p>
          <div>
            <a>
                    Contact us
              </a>
          </div>
      </div>
      <hr></hr>
    </>
    
  )
}


export {Main_logo,Nav,CarouselComponent,Specialties,Why,Services,About}

