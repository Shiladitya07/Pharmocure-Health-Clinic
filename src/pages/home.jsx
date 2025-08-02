import React, { useState } from 'react';
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
          <a key={index} href={item.link} className="specialty-card animated-card">
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
  const items = [
    {
      title: "24x7 Availability",
      description: "We provide top-notch services with expert staff and great support!",
    },
    {
      title: "Verified Doctors",
      description: "Get in contact with doctors from our verified sources!",
    },
    {
      title: "Instant Prescription",
      description: "Get your prescriptions in an instant!",
    },
    {
      title: "Secure Consultation",
      description:
        "Your health information deserves the highest level of privacy. Our consultations are conducted over secure, encrypted platforms in compliance with medical data protection standards. Speak with trusted professionals, knowing your details remain confidential and safe!",
    },
  ];

  return (
    <>
      <div className="whychoose">
        <h1 style={{ textAlign: "center" }}>WHY CHOOSE US</h1>
        <br />
        <div className="row">
          {items.map((item, idx) => (
            <div className="column" key={idx}>
              <button className="whychoose-button">{item.title}</button>
              <div className="hover-panel">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}

function Services() {
  const services = [
    "Online Consultation",
    "Lab Test",
    "Medicine Delivery",
    "Mental Health and Wellness",
  ];

  return (
    <>
      <div className="service">
        <h1 style={{ textAlign: "center" }}>OUR SERVICES</h1>
        <br />
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <hr />
    </>
  );
}

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleText = () => setIsOpen(!isOpen);

  const teamMembers = ["Shila", "Jojo", "Rawnak", "Sudipta", "Mona", "Anup"];

  return (
    <>
      <div className="about">
        <div className="button-container">
          <button className="button-73" onClick={toggleText}>
            ABOUT US
          </button>
        </div>

        {isOpen && (
          <div className="about-content open">
            <p>
              Welcome to Online Health Clinic – <br />
              your trusted destination for accessible, affordable, and expert healthcare at your fingertips.
              <br />
              Whether you need a quick consultation, an expert opinion, or access to health records and medicines,
              we’re here for you 24/7. <br />
              <b><i>Your health, our priority</i></b>
            </p>

            <hr />
            <div className="team-box">MEET OUR TEAM</div>

            <div className="image-row">
              {teamMembers.map((name, i) => (
                <div key={i} className="image-wrapper">
                  <img src={ca} alt={`Team ${name}`} className="side-image" />
                  <span className="image-caption">{name}</span>
                </div>
              ))}
            </div>

            <hr />
            <div className="team-box">Contact Us</div>

            <div className="contact-icons">
              <img src={ph} alt="Phone" className="contact-image" />
              <img src={f} alt="Facebook" className="contact-image" />
              <img src={insta} alt="Instagram" className="contact-image" />
            </div>
          </div>
        )}
      </div>
      <hr />
    </>
  );
}

export {
  Main_logo,
  Nav,
  CarouselComponent,
  Specialties,
  Why,
  About,
  Services,
};
