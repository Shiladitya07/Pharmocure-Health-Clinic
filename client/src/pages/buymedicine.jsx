import React, { useState } from "react";
import { useLocation,Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/styles/home.css";
import "../assets/styles/specialties.css";
import "../assets/styles/buymedicine.css";
import Modal from "react-modal";

 // ✅ Now safe to export

// Images
import Logo from "../assets/images/logo.jpeg";
import Gyno from "../assets/images/gyneaco.png";
import Neu from "../assets/images/neurology.png";
import Ortho from "../assets/images/orthopedic.png";
import Dent from "../assets/images/dentist.png";
import Derma from "../assets/images/derma.png";
import Gastro from "../assets/images/gastro.png";
import Pidea from "../assets/images/pedia.png";
import Genaral from "../assets/images/consult.png";
import Banner from "../assets/images/banner1.jpg";
import Banner2 from "../assets/images/banner2.jpg";
import Banner3 from "../assets/images/banner3.jpg";
import Aqua from "../assets/images/charcoal.jpg";
import Coal from "../assets/images/char.webp";
import Lacto from "../assets/images/lacto.webp";
import ca from "../assets/images/ca.jpeg";
import img1 from "../assets/images/img1.png";   
import img2 from "../assets/images/img2.png";   
import img3 from "../assets/images/img3.png";   
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.png";
import img13 from "../assets/images/img13.png";
import img14 from "../assets/images/img14.png";
import img15 from "../assets/images/img15.png";
import img16 from "../assets/images/img16.png";
import img17 from "../assets/images/img17.png";
import img18 from "../assets/images/img18.png";
import img19 from "../assets/images/img19.png";
import img20 from "../assets/images/img20.png";
import img21 from "../assets/images/img21.png";
import img22 from "../assets/images/img22.png";
import img23 from "../assets/images/img23.png";
import img24 from "../assets/images/img24.png";
import img25 from "../assets/images/img25.png";
import img26 from "../assets/images/img26.png";
import img27 from "../assets/images/img27.png";
import img28 from "../assets/images/img28.png";
import img29 from "../assets/images/img29.png";
import img30 from "../assets/images/img30.png";
import img31 from "../assets/images/img31.png"; // Dr. Morepen Gluco One BG-03 Blood Glucose Test Strips
import ContactOptions from "./contact";

function Main_logo() {
  return (
    <>
      <header>
        <div className="logo">
          <h1>
           <Link to="/" className="home-link logo-flex" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <img src={Logo} alt="PharmoCure Logo" className="logo-img" />
  <span className="logo-text">PharmoCure Health Clinic</span>
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
    { label: "Contact Us", icon: "🩺", link: "/contactus" },
    { label: "Health Records", icon: "📁", link: "/healthrecords" },
  ];

  return (
    <>
      <nav className="nav-section">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <Link to={item.link} key={index} className={`nav-card ${isActive ? "active" : ""}`}>
              <div className="nav-icon">{item.icon}</div>
              <div className="nav-label">{item.label}</div>
            </Link>
          );
        })}
      </nav>
      <hr />
    </>
  );
}

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

const Specialties = () => (
  <div className="specialties-section">
    <h2>Browse by Specialties</h2>
    <div className="specialties-grid">
      {specialties.map((item, index) => (
        <a key={index} href={item.link} className="specialty-card animated-card">
          <div className="icon-wrapper"><img src={item.icon} alt={item.name} /></div>
          <p>{item.name}</p>
        </a>
      ))}
    </div>
  </div>
);
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
        <div>
          <img src={Banner} alt="Slide 1" className="carousell-img" />
         
        </div>
        <div>
          <img src={Banner2} alt="Slide 2" className="carousell-img" />
       
        </div>
        <div>
          <img src={Banner3} alt="Slide 3" className="carousell-img" />

        </div>
      </Carousel>
    </div>
  );
};
const DealsSection = () => {
  const [activeTab, setActiveTab] = useState("All Deals");
  const tabs = ["All Deals","45%", "50%", "60%"];
  // MODAL STATE
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    recipientName: "",
    address: "",
    phone: "",
    email: "",
  });
  // Success message state
  const [orderSuccess, setOrderSuccess] = useState(false);
  // Product data
  const products = [
  {
    id: 1,
    title: "Essentials Aqua Blue Hand Wash",
    img: Aqua,
    price: "₹105",
    discount: "45% off",
    label: "Bestseller",
    category: ["All Deals","45%"]
  },
  {
    id: 2,
    title: "OneTouch Select Plus Glucometer",
    img: Coal,
    price: "₹495",
    discount: "50% off",
    label: "Limited Time Offer",
    category: ["All Deals", "50%"]
  },
  {
    id: 3,
    title: "Lacto Calamine SPF 50 Lotion",
    img: Lacto,
    price: "₹102",
    discount: "60% off",
    label: "Buy 2, +2% OFF",
    category: ["All Deals", "50%", "60%"]
  },
  {
    id: 4,
    title: "Dr. Ortho Oil",
    img: ca,
    price: "₹295",
    discount: "60% off",
    label: "Buy 1 Get 1",
    category: ["All Deals","60%"]
  },
  {
    id: 5,
    title: "Dolo 650 Tablet",
    img: img1,
    price: "₹225",
    discount: "45% off",
    label: "Bestseller#2",
    category: ["All Deals", "45%"]
  },
  {
    id: 6,
    title: "Calpol 500 Tablet",
    img: img2,
    price: "₹375",
    discount: "45% off",
    label: "Limited Offer",
    category: ["All Deals","45%"]
  },
  {
    id: 7,
    title: "Combiflam Tablet",
    img: img3,
    price: "₹150",
    discount: "60% off",
    label: "Trending",
    category: ["All Deals","60%"]
  },
  {
    id: 8,
    title: "Crocin Advance",
    img: img4,
    price: "₹325",
    discount: "25% off",
    label: "Limited Offer",
    category: ["All Deals"]
  },
  {
    id: 9,
    title: "Himalaya Liv.52 DS Syrup",
    img: img5,
    price: "₹349",
    discount: "60% off",
    label: "Limited Offer",
    category: ["All Deals","50%"]
  },
  {
    id: 10,
    title: "Sofy Anti Bacteria XL",
    img: img6,
    price: "₹450",
    discount: "25% off",
    label: "Top Rated",
    category: ["All Deals","60%"]
  },
  {
    id: 11,
    title: "Accu-Chek Active Glucometer",
    img: img7,
    price: "₹455",
    discount: "50% off",
    label: "New Arrival",
    category: ["All Deals","50%"]
  },
  {
    id: 12,
    title: "Revital H Capsules",
    img: img8,
    price: "₹349",
    discount: "45% off",
    label: "Top Rated",
    category: ["All Deals","50%"]
  },
  {
    id: 13,
    title: "Dettol Antiseptic Liquid",
    img: img9,
    price: "₹105",
    discount: "38% off",
    label: "Buy 1 Get 1",
    category: "All Deals"
  },
  {
    id: 14,
    title: "Savlon Handwash",
    img: img10,
    price: "₹105",
    discount: "60% off",
    label: "only 2 left",
    category: ["All Deals","60%"]
  },
  {
    id: 15,
    title: "Sugar Free Gold",
    img: img11,
    price: "₹450",
    discount: "25% off",
    label: "Limited Offer",
    category: ["All Deals","50%"]
  },
  {
    id: 16,
    title: "Volini Spray",
    img: img12,
    price: "₹225",
    discount: "30% off",
    label: "Top Rated",
    category: "All Deals"
  },
  {
    id: 17,
    title: "Moov Pain Relief Cream",
    img: img13,
    price: "₹275",
    discount: "50% off",
    label: "New Arrival",
    category: ["All Deals","50%"]
  },
  {
    id: 18,
    title: "Boroline Antiseptic",
    img: img14,
    price: "₹250",
    discount: "60% off",
    label: "Limited Offer",
    category: ["All Deals","60%"]
  },
  {
    id: 19,
    title: "Zandu Balm",
    img: img15,
    price: "₹475",
    discount: "60% off",
    label: "Bestseller",
    category: ["60%","All Deals"]
  },
  {
    id: 20,
    title: "OneTouch Select Glucometer",
    img: img16,
    price: "₹325",
    discount: "30% off",
    label: "Limited Offer",
    category: "All Deals"
  },
  {
    id: 21,
    title: "Lacto Calamine Lotion",
    img: img17,
    price: "₹295",
    discount: "15% off",
    label: "Top Rated",
    category: ["All Deals"]
  },
  {
    id: 22,
    title: "Vicks Vaporub",
    img: img18,
    price: "₹199",
    discount: "30% off",
    label: "Buy 1 Get 1",
    category: [ "All Deals"]
  },
  {
    id: 23,
    title: "Eno Sachet",
    img: img19,
    price: "₹349",
    discount: "60% off",
    label: "Limited Offer",
    category: ["All Deals","60%"]
  },
  {
    id: 24,
    title: "ORS-Electral Powder",
    img: img20,
    price: "₹349",
    discount: "50% off",
    label: "New Arrival",
    category: ["50%","All Deals"]
  },
  {
    id: 25,
    title: "Horlicks Health Drink",
    img: img21,
    price: "₹225",
    discount: "10% off",
    label: "Bestseller",
    category: [ "All Deals"]
  },
  {
    id: 26,
    title: "Ensure Diabetes Care",
    img: img22,
    price: "₹199",
    discount: "50% off",
    label: "Top Rated",
    category: ["All Deals","50%"]
  },
  {
    id: 27,
    title: "Pediasure Premium Chocolate",
    img: img23,
    price: "₹250",
    discount: "10% off",
    label: "Bestseller",
    category: "All Deals"
  },
  {
    id: 28,
    title: "Bournvita",
    img: img24,
    price: "₹200",
    discount: "45% off",
    label: "New Arrival",
    category: ["All Deals","45%"]
  },
  {
    id: 29,
    title: "Dabur Chyawanprash",
    img: img25,
    price: "₹475",
    discount: "60% off",
    label: "Trending",
    category: ["All Deals","60%"]
  },
  {
    id: 30,
    title: "Digene Antacid Tablet",
    img: img26,
    price: "₹199",
    discount: "50% off",
    label: "Bestseller",
    category: ["All Deals","50%"]
  },
  {
    id: 31,
    title: "MamyPoko Pants",
    img: img27,
    price: "₹105",
    discount: "45% off",
    label: "New Arrival",
    category: ["All Deals","45%"]
  },
  {
    id: 32,
    title: "Pampers Baby Wipes",
    img: img28,
    price: "₹399",
    discount: "45% off",
    label: "New Arrival",
    category: ["All Deals","45%"]
  },
  {
    id: 33,
    title: "Citrus Wet Wipes",
    img: img29,
    price: "₹495",
    discount: "45% off",
    label: "Top Rated",
    category: ["All Deals","45%"]
  },
  {
    id: 34,
    title: "Glucon-D Energy Drink",
    img: img30,
    price: "₹99",
    discount: "45% off",
    label: "Limited Offer",
    category: ["All Deals","45%"]
  },
  {
    id: 35,
    title: "Dr. Morepen Blood Glucose Test Strips",
    img: img31,
    price: "₹721",
    discount: "45% off",
    label: "Limited Offer",
    category: ["All Deals","45%"]
  }
];

 

  const filteredProducts = products.filter(p => p.category.includes(activeTab))

  // Handle input changes in modal form
  const onBuyValueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleBuySubmit = (e) => {
    e.preventDefault();
    // You can add logic here, e.g. API call to purchase medicine
    console.log("Purchase Details:", {
      product: selectedProduct,
      buyer: formData,
    });

    // Close modal and reset form
    setBuyModalOpen(false);
    setFormData({
      recipientName: "",
      address: "",
      phone: "",
      email: "",
    });
    setOrderSuccess(true);
    setTimeout(() => setOrderSuccess(false), 2500);
  };

  // Calculate discounted price
  const calculateAmountToPay = () => {
    if (!selectedProduct) return "";
    const priceNum = Number(selectedProduct.price.replace(/[^\d]/g, "")) || 0;
    const discountPercent =
      Number(selectedProduct.discount.replace(/[^\d]/g, "")) || 0;
    const discountedPrice = priceNum - (priceNum * discountPercent) / 100;
    return `₹${discountedPrice.toFixed(2)}`;
  }; 

  return (
    <>
      {orderSuccess && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#4BB543',
          color: 'white',
          padding: '16px 32px',
          borderRadius: '8px',
          zIndex: 2000,
          fontWeight: 'bold',
          fontSize: '1.2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}>
          Order successful!
        </div>
      )}
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
              <button
                className="add-button"
                onClick={() => {
                  setSelectedProduct(item);
                  setBuyModalOpen(true);
                }}>
                BUY
              </button>          
            </div>
          ))}
        </div>
      </div>
      <Modal
          isOpen={buyModalOpen}
          onRequestClose={() => setBuyModalOpen(false)}
          contentLabel="Buy Medicine"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>Buy Medicine: {selectedProduct?.title}</h2>

          {/* Hidden product details */}
          <input type="hidden" name="prodid" value={selectedProduct?.id || ""} />
          <input
            type="hidden"
            name="prodtitle"
            value={selectedProduct?.title || ""}
          />
          <input
            type="hidden"
            name="proddiscount"
            value={selectedProduct?.discount || ""}
          />

          {/* Visible price, discount, amount */}
          <p>
            Price: <strong>{selectedProduct?.price || "-"}</strong>
          </p>
          <p>
            Discount: <strong>{selectedProduct?.discount || "-"}</strong>
          </p>
          <p>
            Amount to Pay: <strong>{calculateAmountToPay()}</strong>
          </p>

          <form onSubmit={handleBuySubmit}>
            <input
              required
              type="text"
              name="recipientName"
              placeholder="Recipient Name"
              value={formData.recipientName}
              onChange={onBuyValueChange}
            />
            <textarea
              required
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={onBuyValueChange}
            />
            <input
              required
              type="tel"
              name="phone"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={onBuyValueChange}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={onBuyValueChange}
            />
            <button type="submit">Confirm Purchase</button>
          </form>
        </Modal>
    </>
  );
};


const BuyMedicinePage = () => (
  <>
    <Main_logo />
    <Nav />
    <CarouselComponent />
    <Specialties />
    <DealsSection />
    <ContactOptions />
  </>
);

export default BuyMedicinePage;
export { Main_logo, Nav, Specialties, DealsSection, CarouselComponent };

//
