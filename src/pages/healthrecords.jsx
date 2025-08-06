
import React from 'react';
import "../assets/styles/healthrecords.css";  
import { Main_logo, Nav } from './buymedicine';  // Only these two imported
import { Carousel } from 'react-responsive-carousel';  // Example, adjust as needed
import Banner from "../assets/images/banner1.0.jpg";  // Import your banner image
import Banner2 from '../assets/images/banner2.0.gif';
import Banner3 from '../assets/images/banner3.0.jpg';  // <-- import Banner3 here
import hr from "../assets/images/hr.jpg";  // Import your health records icon
import hr2 from "../assets/images/hr2.jpg";  // Import another health records icon if needed
import hr3 from "../assets/images/hr3.jpg";  // Import another health records icon if needed
import { Link } from 'react-router-dom';  // Import Link for navigation
import text from "../assets/images/text.png";    // Add this line
import send from "../assets/images/send.png";    // Add this line
import phone from "../assets/images/phone.png";  // Add this line
import email from "../assets/images/email.png";
const CarouselComponent = () => {
  return (
    <div className="carousell-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        <div><img src={Banner} alt="Slide 1" className="carousell-img" /></div>
        <div><img src={Banner2} alt="Slide 2" className="carousell-img" /></div>
        <div><img src={Banner3} alt="Slide 3" className="carousell-img" /></div>
      </Carousel>
    </div>
  );
};

const HealthRecordsPage = () => {
  return (
    <>
      <Main_logo />
      <Nav />
      <CarouselComponent />

      <div className="health-record-content">
      
        <center><h2>SIGN IN TO ACCCESS YOUR HEALTH RECORD </h2></center>
      </div>

       {/* NEW INFO SECTION */}
      <div className="health-info-section">
        <img src={hr} alt="Health Records Icon" className="health-info-icon"/>
        <div className="health-info-text">
          <h3>Receive & Organize Your Health Information</h3>
          <p>
            Apollo 24|7 Personal Health Records will sync all your Health Records in real time from the entire Apollo ecosystem i.e. Apollo Hospitals, Apollo Diagnostics, Apollo 24|7, Apollo Clinics etc.
            You can use it to view and share your records anytime.
          </p>
        </div>
      </div>

        <div className="health-info-section">
        <img src={hr2} alt="Health Records Icon" className="health-info-icon"/>
        <div className="health-info-text">
          <h3>Receive & Organize Your Health Information</h3>
          <p>
            Apollo 24|7 Personal Health Records will sync all your Health Records in real time from the entire Apollo ecosystem i.e. Apollo Hospitals, Apollo Diagnostics, Apollo 24|7, Apollo Clinics etc.
            You can use it to view and share your records anytime.
          </p>
        </div>
      </div>

        <div className="health-info-section">
        <img src={hr3} alt="Health Records Icon" className="health-info-icon"/>
        <div className="health-info-text">
          <h3>Receive & Organize Your Health Information</h3>
          <p>
            Apollo 24|7 Personal Health Records will sync all your Health Records in real time from the entire Apollo ecosystem i.e. Apollo Hospitals, Apollo Diagnostics, Apollo 24|7, Apollo Clinics etc.
            You can use it to view and share your records anytime.
          </p>
        </div>
      </div>

      <About />
      <ContactOptions />


    </>
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

export default HealthRecordsPage;
export { CarouselComponent };
