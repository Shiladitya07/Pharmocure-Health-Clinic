import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/styles/home.css";
import "../assets/styles/specialties.css";
import { useLocation } from "react-router-dom";
import "../assets/styles/contactus.css";
import "../assets/styles/contact.css"; // Import the CSS
import { useEffect } from "react";


// Images
import phone from "../assets/images/phone.png";
import text from "../assets/images/text.png";
import email from "../assets/images/email.png";
import send from "../assets/images/send.png";
import Heart from "../assets/images/heart.gif";
import GetInTouch from "../assets/images/Get-in-Touch.jpg";
import ContactUs1 from "../assets/images/Contact-Us1.jpg";

const ContactUs = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Main_logo />
      <Nav />
      <CarouselComponent />
      <ContactUsInfo />
      <About />
      <ContactOptions />
      {/* Add more content here if needed */}
    </>
  );
};
import emailjs from 'emailjs-com'; // Add this import at the top

function ContactUsInfo() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'PharmoCure Health Clinic',      // Replace with your EmailJS service ID
      'template_owxqaen',     // Replace with your EmailJS template ID
      e.target,
      'pAimpR4LUP5er5Hq3'          // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        window.alert("We have got your details, we will be with you shortly.");
        e.target.reset();
      },
      (error) => {
        window.alert("Sorry, there was an error sending your message.");
      }
    );
  };

  return (
    <>
      <div className="contactus-container">
        <center><h2>Contact Us</h2></center>
        <div className="contactus-details">
          <div className="contactus-info">
            <h3>Our Address</h3>
            <p>88/1, Ripon St, Opposite Union Bank of India, Taltala, Kolkata, West Bengal 700016, India</p>
            <h3>Phone</h3>
            <p>+91 8170852415</p>
            <h3>Email</h3>
            <p>pharmocurehealthclinic@gmail.com</p>
          </div>
          <div className="contactus-form">
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required className="contactus-input" />
              <input type="email" name="email" placeholder="Your Email" required className="contactus-input" />
              <textarea name="message" placeholder="Your Message" required className="contactus-textarea"></textarea>
              <button type="submit" className="contactus-submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

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
    { label: "Contact us", icon: "🩺", link: "/contactus" }, // <-- updated
    { label: "Health Records", icon: "📁", link: "#" },
  ];

  return (
    <>
      <nav className="nav-section">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.link;
          return item.link && item.link !== "#" ? (
            <Link to={item.link} key={index} className="nav-card-link">
              <div className={`nav-card ${isActive ? "active" : ""}`}>
                <div className="nav-icon">{item.icon}</div>
                <div className="nav-label">{item.label}</div>
              </div>
            </Link>
          ) : (
            <div className="nav-card" key={index}>
              <div className="nav-icon">{item.icon}</div>
              <div className="nav-label">{item.label}</div>
            </div>
          );
        })}
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
          <img src={ContactUs1} alt="Slide 1" className="carouselcontact-img" />
        </div>
        <div>
          <img src={GetInTouch} alt="Slide 2" className="carouselcontact-img" />
        </div>
        <div>
          <img src={Heart} alt="Slide 3" className="carouselcontact-img" />
        </div>
      </Carousel>
    </div>
  );
};
function About() {
   
  
  return (
    <>
      <br></br>
      <div className="about-wrapper">
        <div className="about-box">
        
            ABOUT US
          
        </div>
        <div className="about-content">
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
          
          
              
            </div>
          </div>
          <hr />
          
        
      
      <hr />
    </>
  );
}
function ContactOptions() {
  return (
    <>
      <Link to="/contactus"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="team-box" style={{ cursor: "pointer" }}>Contact Us</div>
      </Link>
      <div className="contact-icons">
        {/* You can add icons here later */}
      </div>
      <div className="contact-container">
        <div className="contact-grid">

          {/* Text Us */}
          <div className="contact-card">
            <img src={text} alt="Text Icon" className="contact-icon" />
            <div>
              <strong>Text us at +91 817052415</strong><br />
              <span>Message and data rates may apply</span><br />
            </div>
          </div>

          {/* Chat */}
          <div className="contact-card">
            <img src={send} alt="Chat Icon" className="contact-icon" />
            <div>
              <strong>Chat with a specialist</strong><br />
              <span>Available 7am–11pm CT, 7 days a week</span><br />
            </div>
          </div>

          {/* Call */}
          <div className="contact-card">
            <img src={phone} alt="Call Icon" className="contact-icon" />
            <div>
              <strong>Call us at +91 817052415</strong><br />
              <span>Available 7am–11pm CT, 7 days a week</span><br />
            </div>
          </div>

          {/* Email */}
          <div className="contact-card">
            <img src={email} alt="Email Icon" className="contact-icon" />
            <div>
              <strong>Send us an email on xyz@gmail.com </strong><br />
              <span>We’d love to hear from you!</span><br />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default ContactUs;
