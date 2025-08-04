import React from "react";
import "../assets/styles/contact.css"; // Import the CSS
import phone from "../assets/images/phone.png"
import text from "../assets/images/text.png"
import email from "../assets/images/email.png"
import send from "../assets/images/send.png";

function ContactOptions() {
  return (
    <>
      <div className="team-box">Contact Us</div>
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

export default ContactOptions;
