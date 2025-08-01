import React from "react"
import "../assets/styles/home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Book from "../assets/images/Book Appointment.jpg"
import Consulta from "../assets/images/Best Consultation.jpg"
import Instantp from "../assets/images/Instant Prescription.jpg"
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
          <img src={Book} alt="Slide 1" className="carousel-img" />
          <p className="legend">Book Appointment Online</p>
        </div>
        <div>
          <img src={Consulta} alt="Slide 2" className="carousel-img" />
          <p className="legend">Best Consultation</p>
        </div>
        <div>
          <img src={Instantp} alt="Slide 3" className="carousel-img" />
          <p className="legend">Instant Prescription</p>
        </div>
      </Carousel>
    </div>
  );
};


// specialitis//


const specialties = [
  { name: "General Physician", icon: Genaral, link: "/specialists/general" },
  { name: "Dermatology", icon: Derma, link: "/specialists/dermatology" },
  { name: "Obstetrics & Gynaecology", icon: Gyno, link: "/specialists/gynae" },
  { name: "Orthopaedics", icon: Ortho, link: "/specialists/ortho" },
  { name: "Neurology", icon: Neu, link: "/specialists/neurology" },
  { name: "Gastroenterology", icon: Gastro, link: "/specialists/gastro" },
  { name: "Paediatrics", icon: Pidea, link: "/specialists/paediatrics" },
  { name: "Dentist", icon: Dent, link: "/specialists/dentist" },
];
<hr></hr>

const Specialties = () => {
  return (
    <div className="specialties-section">
      <h2>Browse by Specialties</h2>
      <div className="specialties-grid">
        {specialties.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="specialty-card animated-card"
          >
            <div className="icon-wrapper">
              <img src={item.icon} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </div>
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

