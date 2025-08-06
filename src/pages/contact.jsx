import React from "react";
import "../assets/styles/contact.css"; // Import the CSS
import phone from "../assets/images/phone.png"
import text from "../assets/images/text.png"
import email from "../assets/images/email.png"
import tell from "../assets/images/tell.png"
import { Link } from "react-router-dom";

function ContactOptions() {
  return (
    <>
    <Link to="/contactus">
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
              <strong>Whatsapp us at +91 9883135922</strong><br />
              <span>Message and data rates may apply</span><br />
            </div>
          </div>

          {/* telligram */}
         <a
          href="https://www.linkedin.com/in/anup-das-a8a353263/"
          target="_blank"
          rel="noopener noreferrer"
           style={{ textDecoration: 'none', color: 'inherit' }}
>
  <div className="contact-card">
    <img src={tell} alt="LinkedIn Icon" className="contact-icon" style={{ width: '50px', height: '50px' }}/>
    <div>
      <strong>Follow us on linkedin</strong><br />
      <span>Click here to connect with us</span><br />
    </div>
  </div>
</a>

          {/* Call */}
          <div className="contact-card">
            <img src={phone} alt="Call Icon" className="contact-icon" />
            <div>
              <strong>Call us at +91 817052415</strong><br />
              <span>Available 7am–11pm , 24x7</span><br />
            </div>
          </div>

          {/* Email */}
          <div className="contact-card">
            <img src={email} alt="Email Icon" className="contact-icon" />
            <div>
              <strong>Send us an mail on  <br /></strong>  <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pharmocurehealthclinic@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}>
               pharmocurehealthclinic@gmail.com
                </a>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ContactOptions;


