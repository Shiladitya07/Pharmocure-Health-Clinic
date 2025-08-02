import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/styles/home.css";
import "../assets/styles/specialties.css";

// Images
import Book from "../assets/images/Book Appointment.jpg";
import Consulta from "../assets/images/Best Consultation.jpg";
import Instantp from "../assets/images/Instant Prescription.jpg";
import Gyno from "../assets/images/gyneaco.png";
import Neu from "../assets/images/neurology.png";
import Ortho from "../assets/images/orthopedic.png";
import Dent from "../assets/images/dentist.png";
import Derma from "../assets/images/derma.png";
import Gastro from "../assets/images/gastro.png";
import Pidea from "../assets/images/pedia.png";
import Genaral from "../assets/images/consult.png";
import ca from "../assets/images/ca.jpeg";
import ph from "../assets/images/ph.png";
import f from "../assets/images/f.png";
import insta from "../assets/images/insta.png";

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
          <Link to="/login">
            <button>Login / Sign Up</button>
          </Link>
        </div>
      </header>
      <br />
      <hr />
    </>
  );
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
        <div className="whychoose-h1">
          <h1 style={{ textAlign: "center" }}>WHY CHOOSE US</h1>
        </div>
        <br />
        <div className="row">
          <div className="column">
            <ul>
              <li style={{ listStyle: "disc" }}>
                <button className="whychoose-button">
                  24x7 Availability
                </button>
                <div className="hover-panel">
                  We provide top-notch services with expert staff and great support!
                </div>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li style={{ listStyle: "disc" }}>
                <button className="whychoose-button">
                  Verified Doctors
                </button>
                <div className="hover-panel">
                  Get in contact with doctors from our verified sources!
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <ul>
              <li style={{ listStyle: "disc" }}>
                <button className="whychoose-button">
                  Instant Prescription
                </button>
                <div className="hover-panel">
                  Get your prescriptions in an instant!
                </div>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li style={{ listStyle: "disc" }}>
                <button className="whychoose-button">
                  Secure Consultation
                </button>
                <div className="hover-panel">
                  Your health information deserves the highest level of privacy. Speak with trusted professionals, knowing your details remain confidential and safe!
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

function Services() {
  return (
    <>
      <div className="service">
        <h1 style={{ textAlign: "center" }}>OUR SERVICES</h1>
        <br />
        <div>
          <ul>
            <li>Online Consultation</li>
            <li>Lab Test</li>
            <li>Medicine Delivery</li>
            <li>Mental Health and Wellness</li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}

function About() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleText = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="about">
        <div className="button-container">
          <button className="button-73" onClick={toggleText}>
            ABOUT US
          </button>
        </div>
        <div className={`about-content ${isOpen ? 'open' : ''}`}>
          Welcome to Online Health Clinic – <br />
          your trusted destination for accessible, affordable, and expert healthcare at your fingertips.<br />
          At Online Health Clinic, our mission is to simplify healthcare by connecting patients with<br />
          experienced doctors, specialists, and medical services—all from the comfort of your home. <br />
          Whether you need a quick consultation, an expert opinion, or access to health records and medicines, <br />
          we’re here for you 24/7. Driven by technology and compassion, we aim to bring quality care to every corner<br />
          of the country—bridging the gap between patients and professionals with ease, trust, and transparency.<br />
          <b><i>Your health, our priority</i></b>
          <br />
          <br />
          <hr />
          <div className="team-box">MEET OUR TEAM</div>
          <div className="image-row">
            <div className="image-wrapper">
              <img src={ca} alt="Image 1" className="side-image" />
              <span className="image-caption">Shila</span>
            </div>
            <div className="image-wrapper">
              <img src={ca} alt="Image 2" className="side-image" />
              <span className="image-caption">Jojo</span>
            </div>
            <div className="image-wrapper">
              <img src={ca} alt="Image 3" className="side-image" />
              <span className="image-caption">Rawnak</span>
            </div>
            <div className="image-wrapper">
              <img src={ca} alt="Image 4" className="side-image" />
              <span className="image-caption">Sudipta</span>
            </div>
            <div className="image-wrapper">
              <img src={ca} alt="Image 5" className="side-image" />
              <span className="image-caption">Mona</span>
            </div>
            <div className="image-wrapper">
              <img src={ca} alt="Image 6" className="side-image" />
              <span className="image-caption">Anup</span>
            </div>
          </div>
          <hr />
          <div className="team-box">Contact Us</div>
          <div className="contact-icons">
            <img src={ph} alt="contact" className="contact-image" />
            <img src={f} alt="sad" className="contact-image" />
            <img src={insta} alt="contact" className="contact-image" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export { Main_logo, Nav, CarouselComponent, Specialties, Why, About, Services };