import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaFilter } from 'react-icons/fa';
import { Main_logo, Nav } from './home';
import ContactOptions from './contact';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from '../assets/images/banner4.jpg';
import Banner2 from '../assets/images/banner5.jpg';
import Banner3 from '../assets/images/banner6.jpg';
import { Specialties } from './home';
import '../assets/styles/bookAppointment.css';
import Gyno from '../assets/images/gyneaco.png';
import Neu from '../assets/images/neurology.png';
import Ortho from '../assets/images/orthopedic.png';
import Dent from '../assets/images/dentist.png';
import Derma from '../assets/images/derma.png';
import Gastro from '../assets/images/gastro.png';
import Pidea from '../assets/images/pedia.png';
import Genaral from '../assets/images/consult.png';
import Cardio from '../assets/images/cardiology.png';
import Ent from '../assets/images/head.png';
import Phyca from '../assets/images/mood.png';
import Uro from '../assets/images/urology.png';
import Nephro from '../assets/images/kidney.png';
import { AppointmentBook } from '../service/api.js';

Modal.setAppElement('#root');

const specialties = [
  "General Physician", "Dermatology", "Obstetrics & Gynaecology", "Orthopaedics",
  "Neurology", "Gastroenterology", "Paediatrics", "Dentist", "ENT",
  "Urology", "Cardiologist", "Psychiatrist", "Nephrology"
];

const doctorsData = [
  {
    id: 1,
    name: "Dr. Rina Saha",
    specialization: "Cardiologist",
    location: "Kolkata",
    experience: 12,
    gender: "Female",
    available: "Morning",
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxrFvLhzlHWu79VamHLYmy0yzXPu-GcEB6g&s"
  },
  {
    id: 2,
    name: "Dr. Anil Sharma",
    specialization: "Dermatology",
    location: "Delhi",
    experience: 5,
    gender: "Male",
    available: "Evening",
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqK61qmsFwlXX5VbQH5tWa_xq4EHU5ENda_ZXVuc1SWb-WptWeQNTd6gWph07wroLSGQ&usqp=CAU"
  },
  {
    id: 3,
    name: "Dr. Priya Desai",
    specialization: "Obstetrics & Gynaecology",
    location: "Mumbai",
    experience: 15,
    gender: "Female",
    available: "Afternoon",
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtLM5I8UdP82KNEis3AQiVfIbgjM7YKYpo0mOJlWBaSAt2CuCr-79bQvaLl3_Etd7VH8&usqp=CAU"
  },
  {
    id: 4,
    name: "Dr. Raj Malhotra",
    specialization: "Orthopaedics",
    location: "Chennai",
    experience: 18,
    gender: "Male",
    available: "Morning",
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaepUzo84UNdMi74lVpzMAcrRC4n1CuHVFGFWUDpBe0NVrB4FevXpO7Kt17bHbSErn6s&usqp=CAU"
  },
  {
    id: 5,
    name: "Dr. Sneha Verma",
    specialization: "Paediatrics",
    location: "Kolkata",
    experience: 8,
    gender: "Female",
    available: "Evening",
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74iczzn5TE9fvvc69Qn9QtXQXUdjUm7qWWLUt_NBrNdBIkVMlUDSr0dROGcO03mtMwdQ&usqp=CAU"
  },
  {
    id: 6,
    name: "Dr. Abhishek Banerjee",
    specialization: "Neurology",
    location: "Hyderabad",
    experience: 20,
    gender: "Male",
    available: "Morning",
    rating: 5.0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeS6KGjla1PhMXrCqF-OmMLi_rr5_4ZBR9CdwC8ZgG8LqzwBEbhE4w-ueuzLpJULGTp7U&usqp=CAU"
  },
  {
    id: 7,
    name: "Dr. Kavita Mehta",
    specialization: "ENT",
    location: "Bangalore",
    experience: 6,
    gender: "Female",
    available: "Afternoon",
    rating: 4.3,
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 8,
    name: "Dr. Nikhil Patil",
    specialization: "General Physician",
    location: "Delhi",
    experience: 11,
    gender: "Male",
    available: "Evening",
    rating: 4.2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDcrLiqVJeJa3ZA0y4fed702KvRI_xQ6BxAyfuxmijxng3yWxfDqQKPLROsJEk4xiPE4&usqp=CAU"
  },
  {
    id: 9,
    name: "Dr. Aarti Kaur",
    specialization: "Psychiatrist",
    location: "Mumbai",
    experience: 14,
    gender: "Female",
    available: "Morning",
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVOztoiAT5vUr_8uk5o0ah_qi6hAi-XJODA&s"
  },
  {
    id: 10,
    name: "Dr. Manish Thakur",
    specialization: "Urology",
    location: "Chennai",
    experience: 9,
    gender: "Male",
    available: "Afternoon",
    rating: 4.5,
    image: "https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg"
  }
];

const itemsPerPage = 4;

export default function BookAppointment() {
  const [filter, setFilter] = useState({ specialization: "", gender: "", location: "", exp10: false });
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", date: "", time: "", reason: "" });

  const maxRating = Math.max(...doctorsData.map(doc => doc.rating || 0));

  useEffect(() => {
    if (window.innerWidth < 768) setSidebarVisible(false);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilter(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredDoctors = doctorsData.filter(doc =>
    (filter.specialization === "" || doc.specialization === filter.specialization) &&
    (filter.gender === "" || doc.gender === filter.gender) &&
    (filter.location === "" || doc.location === filter.location) &&
    (!filter.exp10 || doc.experience >= 10) &&
    (searchTerm === "" ||
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const paginatedDoctors = filteredDoctors.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <>
        {[...Array(full)].map((_, i) => <span key={"f"+i}>★</span>)}
        {half && <span>☆</span>}
        {[...Array(empty)].map((_, i) => <span key={"e"+i}>☆</span>)}
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${selectedDoctor.name}`);
    setModalOpen(false);
    setFormData({ name: "", date: "", time: "", reason: "" });
  };

  const getPageList = () => {
    const pages = [];
    if (totalPages <= 7) return [...Array(totalPages)].map((_, i) => i + 1);
    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", totalPages];
    if (currentPage >= totalPages - 3) return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const [appoinment, setAppointment] = useState({
    drid: selectedDoctor?.id || "",
    drname: selectedDoctor?.name || "",
    drspecialization: selectedDoctor?.specialization || "",
    drlocation: selectedDoctor?.location || "",
    drgender: selectedDoctor?.gender || "",
    dravailable: selectedDoctor?.available || "",
    pname: "",
    adate: "",
    atime: "",
    reason: ""
  });

  useEffect(() =>{
    if (selectedDoctor?.id && selectedDoctor?.name && selectedDoctor?.specialization  && selectedDoctor?.location && selectedDoctor?.gender && selectedDoctor?.available) {
      setAppointment(prev => ({ ...prev, drid: selectedDoctor.id, drname: selectedDoctor.name, drspecialization: selectedDoctor.specialization, drlocation: selectedDoctor.location, drgender: selectedDoctor.gender, dravailable: selectedDoctor.available }));
    }
  }, [selectedDoctor]);

  const onValuechage = (e) =>{
  setAppointment(prev => ({...prev, [e.target.name]: e.target.value }));
  console.log(appoinment);
  }

  const submitData = async (e) => {
    e.preventDefault();
    try{
      const response = await AppointmentBook(appoinment);
      if (response && response.status === 201) {
        alert(response.data);
      } else if (response && response.status) {
        alert("Something went wrong, please try again later.");
      } else {
        alert("Server error: appointment could not be booked. Please check your backend API route.");
      }
    }catch(error){
      console.error("Error submitting appointment data:", error);
      alert("Error booking appointment: " + (error?.message || "Unknown error"));
    }
  }

  return (
    <div className="book-container">
      <Main_logo />
      <Nav />
      <CarouselComponent />
      <Specialties />

      <div className="filter-icon" onClick={() => setSidebarVisible(!sidebarVisible)}>
        <FaFilter />
      </div>

      <div className="content-wrapper">
        <div className={`sidebar ${sidebarVisible ? "show" : "hide"}`}>
          <h2>Filter</h2>

          <label>Department:</label>
          <select name="specialization" value={filter.specialization} onChange={handleFilterChange}>
            <option value="">All</option>
            {specialties.map(dep => <option key={dep} value={dep}>{dep}</option>)}
          </select>

          <label>Gender:</label>
          <select name="gender" value={filter.gender} onChange={handleFilterChange}>
            <option value="">All</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <label>Location:</label>
          <select name="location" value={filter.location} onChange={handleFilterChange}>
            <option value="">All</option>
            {[...new Set(doctorsData.map(doc => doc.location))].map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          <div className="checkbox-row">
            <input type="checkbox" name="exp10" id="exp10" checked={filter.exp10} onChange={handleFilterChange} />
            <label htmlFor="exp10">Experience 10 yrs+</label>
          </div>
        </div>

        <div className="doctor-list">
          <input
            type="text"
            placeholder="Search doctor or department..."
            className="search-box"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          {paginatedDoctors.length ? paginatedDoctors.map(doc => (
            <div key={doc.id} className="doctor-card">
              <div className="doctor-info">
                <h3>
                  {doc.name}
                  {doc.rating >=4.8 && <span className="popular-tag">Most Popular</span>}
                </h3>
                <p>Specialization: {doc.specialization}</p>
                <p>Location: {doc.location}</p>
                <p>Experience: {doc.experience} years</p>
                <p>Gender: {doc.gender}</p>
                <p>Available: {doc.available}</p>
                <p>Rating: <span className="stars">{renderStars(doc.rating)}</span></p>
                <button onClick={() => { setSelectedDoctor(doc); setModalOpen(true); }}>Book Appointment</button>
              </div>
              <img src={doc.image} alt={doc.name} className="doctor-img" />
            </div>
          )) : <p>No doctors found.</p>}

          <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>&#x2039;</button>
            {getPageList().map((page, i) =>
              page === "..." ? <span key={i} className="dots">...</span> : (
                <button key={i} className={page === currentPage ? "active" : ""} onClick={() => setCurrentPage(page)}>{page}</button>
              )
            )}
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>&#x203A;</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Book Appointment"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Book with {selectedDoctor?.name}</h2>
  <form onSubmit={submitData}>
          <input type='hidden' name='drid' value={`${selectedDoctor?.id}`}></input>
          {/* <input required type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
          <input required type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
          <input required type="time" value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} />
          <textarea required placeholder="Reason for visit" value={formData.reason} onChange={e => setFormData({ ...formData, reason: e.target.value })}></textarea> */}
          <input type='hidden' name='drname' value={`${selectedDoctor?.name}`}></input>
          <input type='hidden' name='drspecialization' value={`${selectedDoctor?.specialization}`}></input>
          <input type='hidden' name='drlocation' value={`${selectedDoctor?.location}`}></input>
          <input type='hidden' name='gender' value={`${selectedDoctor?.gender}`}></input>
          <input type='hidden' name='available' value={`${selectedDoctor?.available}`}></input>
          <input type="text" name='pname' onChange={onValuechage} placeholder="Your Name" />
          <input type="date" name='adate' onChange={onValuechage} />
          <input type="time" name='atime' onChange={onValuechage} />
          <textarea placeholder="Reason for visit" name='reason' onChange={onValuechage}></textarea>
          <button type="submit">Confirm Booking</button>
        </form>
      </Modal>

      <ContactOptions />
    </div>
  );
}

const CarouselComponent = () => (
  <div className="carouselll-wrapper">
    <Carousel autoPlay infiniteLoop showArrows showThumbs={false} showStatus={false}>
      <div><img src={Banner} alt="Slide 1" className="carouselll-img" /></div>
      <div><img src={Banner2} alt="Slide 2" className="carouselll-img" /></div>
      <div><img src={Banner3} alt="Slide 3" className="carouselll-img" /></div>
    </Carousel>
  </div>
);




