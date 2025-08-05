import React from 'react';
import Delivery from '../assets/images/edelivery.png';
import Health from '../assets/images/health.png';
import Consult from '../assets/images/consult.png';
import Test from '../assets/images/lab_test.png';
import Background from '../assets/images/bg.jpg';
import { Link } from 'react-router-dom';
import '../assets/styles/service.css'

const Service = () => {
  return (
    <>
      <div className='service-section'>
        <h2 id='service-heading'>Our Services</h2>
        <div className='service-container' style={{
          backgroundImage: `url(${Background})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          height: "100%",
          width: "100%"
        }}>
         <div className='service-card'>
            <img src={Consult} alt="consultation" width='50px' />
            <h2>Instant Doctor Appointments</h2>
            <p>Skip the long queues and crowded clinics. Our online booking lets you connect with a doctor quickly and get the care you need without delays.</p>
            <Link to ="/bookappointment"><button>Book Now!</button></Link>
          </div>
          <div className='service-card'>
            <img src={Delivery} alt="delivery" width='50px' />
            <h2>Digital Pharmacy & Delivery</h2>
            <p>Buy medicines online at low prices from trusted pharmacies. Get your pharma products delivered quickly and safely to your home, without any hassle.</p>
            <Link to = "/buymedicine"><button>Know More..</button></Link>
          </div>
          <div className='service-card'>
            <img src={Health} alt="Mental Health & Wellness" width='50px' />
            <h2>Mental Health & Wellness</h2>
            <p>Access confidential support for mental health and emotional well-being through our expert counselors and therapists—because your peace of mind matters.</p>
            <button
            onClick={() => {
              if (window.botpressReady && window.botpressWebChat) {
                  window.botpressWebChat.sendEvent({ type: 'show' });
              } else {
                alert("Chatbot is still loading. Please wait a few seconds.");
              }
              }}> Start Chat! </button>
          
          </div>
          <div className='service-card'>
            <img src={Test} alt="Lab Test" width='50px' />
            <h2>Book Lab Tests</h2>
            <p>Book lab tests online with home sample collection and timely digital reports—accurate, convenient, and trusted diagnostics at your doorstep.</p>
            <a><button>Book Test!</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;