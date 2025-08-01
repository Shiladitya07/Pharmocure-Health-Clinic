import React from 'react';
import Delivery from '../assets/images/delivery.png';
import Health from '../assets/images/health.png';
import Consult from '../assets/images/consult.png';
import Test from '../assets/images/lab_test.png';
import Background from '../assets/images/bg.jpg';
import '../assets/styles/service.css'

const Service = () =>{
    return (
        <>
<div className='service'>
    <h2 id='heading'>Our Services</h2>
<div className='container' style ={{
  backgroundImage: `url(${Background})`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"}}>
    <div className='con'>
    <img src={Consult} alt="consultation" width='50px'></img>
        <h2>Online Consultation</h2>
        <p>Consult licensed doctors online for expert medical advice, prescriptions, and care—securely and conveniently from your home.</p> 
        <a><button>Book Now!</button></a>
    </div>
    <div className='con'>
    <img src={Delivery} alt="delivery" width='50px'></img>
        <h2>Medicine Delivery</h2>
        <p>Order prescribed medicines online and get them delivered to your doorstep safely and on time—fast, reliable, and hassle-free.</p>
        <a><button>Know More..</button></a>
    </div>
    <div className='con'>
    <img src={Health} alt="Mental Health & Wellness" width='50px'></img>
        <h2>Mental Health & Wellness</h2>
        <p>Access confidential support for mental health and emotional well-being through our expert counselors and therapists—because your peace of mind matters.</p>
        <a><button>Start Chat!</button></a>
    </div>
    <div className='con'>
    <img src={Test} alt="Lab Test" width='50px'></img>
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

