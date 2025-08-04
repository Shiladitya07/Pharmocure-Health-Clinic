import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/styles/home.css";
import "../assets/styles/specialties.css";
import "../assets/styles/buymedicine.css";
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
import Aqua from "../assets/images/charcoal.jpg";
import Coal from "../assets/images/char.webp"; 
import Lacto from "../assets/images/lacto.webp";
import Loreal from "../assets/images/loreal.webp";

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
            <button className="buttonn">Login / Sign Up</button>
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


const DealsSection = () => {
  const [activeTab, setActiveTab] = useState("Value Deals");

  const tabs = ["Value Deals", "50% Off",];

  const products = [
    {
      title: "Essentials Aqua Blue Hand Wash",
      img: Aqua,
      price: "₹99.2",
      discount: "38% off",
      label: "Bestseller",
      category: "Value Deals"
    },
    {
      title: "Chaarcoal Soap",
      img: Coal,
      price: "₹99.2",
      discount: "38% off",
      label: "Bestseller",
      category: "Value Deals"
    },
     {
      title: "Lacto Calamine SPF 50 PA+++ UVA/UVB Sunscreen Lotion, 50 gm",
      img: Lacto,
      price: "₹99.2",
      discount: "38% off",
      label: "Bestseller",
      category: "Value Deals"
    },
     {
      title: "Apollo Essentials Aqua Blue Hand Wash",
      img: Loreal,
      price: "₹99.2",
      discount: "38% off",
      label: "Bestseller",
      category: "Value Deals"
    },
     {
      title: "Apollo Essentials Aqua Blue Hand Wash",
      img: Coal,
      price: "₹99.2",
      discount: "38% off",
      label: "Bestseller",
      category: "Value Deals"
    },
     {
      title: "Apollo Essentials Aqua Blue Hand Wash",
      img: Coal,
      price: "₹99.2",
      discount: "38% off",
      label: "Bestseller",
      category: "Value Deals"
    },
     {
      title: "Apollo Essentials Aqua Blue Hand Wash",
      img: Coal,
      price: "₹99.2",
      discount: "38% off",
      label: "Bestseller",
      category: "Value Deals"
    },

    
    // Add rest of products...
  ];

  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <div className="deals-section">
      <h2>💊 Value Deals at Best Price</h2>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="deals-grid">
        {filteredProducts.map((item, index) => (
          <div key={index} className="deal-card">
            <div className="tag">{item.label}</div>
            <img src={item.img} alt={item.title} />
            <p className="deal-title">{item.title}</p>
            <p className="price">{item.price} <span>{item.discount}</span></p>
            <button className="add-button">ADD</button>
          </div>
        ))}
      </div>
    </div>
  );
};


const BuyMedicinePage = () => (
  <>
    <Main_logo />
    <Nav />
    <CarouselComponent />
    <Specialties />
    <DealsSection />
  </>
);
export default BuyMedicinePage;
export { Main_logo, Nav, CarouselComponent, Specialties,DealsSection};