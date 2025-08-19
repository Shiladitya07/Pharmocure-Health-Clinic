import React, { useState, useEffect } from "react"; 
import { Link, useLocation, useNavigate } from "react-router-dom"; 
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
import Cardio from "../assets/images/cardiology.png";
import Ent from "../assets/images/head.png";
import Phyca from "../assets/images/mood.png";
import Uro from "../assets/images/urology.png";
import Nephro from "../assets/images/kidney.png";
import Logo from "../assets/images/logo.jpeg";

/* ------------------ HEADER / MAIN LOGO ------------------ */
const Main_logo = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ check if user is logged in (from localStorage)
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // ✅ clear user
    setUser(null);
    navigate("/"); // back to home
  };

  return (
    <>
      <header>
        <div className="logo">
          <h1>
            <Link
              to="/"
              className="home-link logo-flex"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              <img src={Logo} alt="PharmoCure Logo" className="logo-img" />
              <span className="logo-text">PharmoCure Health Clinic</span>
            </Link>
          </h1>
        </div>

        {/*  Search Bar */}
        <div className="search">
          <input
            type="text"
            placeholder="Search Doctors, Specialities, Conditions etc."
            className="search-bar"
          />
        </div>

        {/*  Navbar Right Side */}
        <div className="nav-links">
          {!user ? (
            // if NOT logged in → show login & register
            <>
              <Link to="/login" className="buttonn">
                Login/Signup
              </Link>
            </>
          ) : (
            // if logged in → show account + logout
            <>
              <Link to="/account" className="greetinglogin">
                Hi, {user.name} !
              </Link>
              <button onClick={handleLogout} className="buttonn">
                Logout
              </button>
            </>
          )}
        </div>
      </header>
      <br />
      <hr />
    </>
  );
};

/* ------------------ NAVIGATION SECTION ------------------ */
function Nav() {
  const location = useLocation();
  const navItems = [
    { label: "Buy Medicine", icon: "💊", link: "/buymedicine" },
    { label: "Book Appointment", icon: "📅", link: "/bookappointment" },
    { label: "Contact Us", icon: "🩺", link: "/contactus" },
    { label: "Health Records", icon: "📁", link: "/healthrecords" },
  ];

  return (
    <>
      <nav className="nav-section">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <Link to={item.link} key={index} className="nav-card-link">
              <div className={`nav-card ${isActive ? "active" : ""}`}>
                <div className="nav-icon">{item.icon}</div>
                <div className="nav-label">{item.label}</div>
              </div>
            </Link>
          );
        })}
      </nav>
      <hr />
    </>
  );
}

/* ------------------ CAROUSEL ------------------ */
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

/* ------------------ SPECIALTIES ------------------ */
const specialties = [
  { name: "General Physician", icon: Genaral, link: "/specialists/general" },
  { name: "Dermatology", icon: Derma, link: "/specialists/dermatology" },
  { name: "Obstetrics & Gynaecology", icon: Gyno, link: "/specialists/gynae" },
  { name: "Orthopaedics", icon: Ortho, link: "/specialists/ortho" },
  { name: "Neurology", icon: Neu, link: "/specialists/neurology" },
  { name: "Gastroenterology", icon: Gastro, link: "/specialists/gastro" },
  { name: "Paediatrics", icon: Pidea, link: "/specialists/paediatrics" },
  { name: "Dentist", icon: Dent, link: "/specialists/dentist" },
  { name: "ENT", icon: Ent, link: "/specialists/ent" },
  { name: "Urologist", icon: Uro, link: "/specialists/urologist" },
  { name: "Cardiologist", icon: Cardio, link: "/specialists/cardiologist" },
  { name: "Psychiatrist", icon: Phyca, link: "/specialists/psychiatry" },
  { name: "Nephrology", icon: Nephro, link: "/specialists/nephrology" },
];

const Specialties = () => {
  return (
    <div className="specialties-section">
      <h2>Browse by Specialties</h2>
      <div className="specialties-grid">
        {specialties.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="specialty-card animated-card"
          >
            <div className="icon-wrapper">
              <img src={item.icon} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

/* ------------------ WHY CHOOSE US ------------------ */
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
              <li>
                <button className="whychoose-button">24x7 Availability</button>
                <div className="hover-panel">
                  We provide top-notch services with expert staff and great
                  support!
                </div>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>
                <button className="whychoose-button">Verified Doctors</button>
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
              <li>
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
              <li>
                <button className="whychoose-button">Secure Consultation</button>
                <div className="hover-panel">
                  Your health information deserves the highest level of privacy.
                  Speak with trusted professionals, knowing your details remain
                  confidential and safe!
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

/* ------------------ SERVICES ------------------ */
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

/* ------------------ ABOUT US ------------------ */
function About() {
  return (
    <>
      <br />
      <div className="about-wrapper">
        <div className="about-box">ABOUT US</div>
        <div className="about-content">
          Welcome to Online Health Clinic – <br />
          your trusted destination for accessible, affordable, and expert
          healthcare at your fingertips. <br />
          At Online Health Clinic, our mission is to simplify healthcare by
          connecting patients with <br />
          experienced doctors, specialists, and medical services—all from the
          comfort of your home. <br />
          Whether you need a quick consultation, an expert opinion, or access to
          health records and medicines, <br />
          we’re here for you 24/7. Driven by technology and compassion, we aim
          to bring quality care to every corner <br />
          of the country—bridging the gap between patients and professionals
          with ease, trust, and transparency. <br />
          <b>
            <i>Your health, our priority</i>
          </b>
        </div>
      </div>
      <hr />
    </>
  );
}

/* ------------------ BUY MEDICINE PAGE ------------------ */
const BuyMedicinePage = () => (
  <>
    <Main_logo />
    <Nav />
    <CarouselComponent />
    <Specialties />
  </>
);

export {
  Main_logo,
  Nav,
  CarouselComponent,
  Specialties,
  Why,
  About,
  Services,
  BuyMedicinePage,
};


