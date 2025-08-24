import React from "react";
import "../assets/styles/bookingstep.css";

const BookingSteps = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "Book Appointment",
      description: "Select a Test/Package and book an appointment on Apollo 24|7",
      icon: "📱", 
    },
    {
      step: "STEP 2",
      title: "Home Sample Collection",
      description: "A certified Apollo agent visits you for sample collection at your selected time slot",
      icon: "🏠🧪",
    },
    {
      step: "STEP 3",
      title: "Fast & Accurate Results",
      description: "Get reports in 12–24 hrs. View and download from the app anytime",
      icon: "📄✅",
    },
  ];

  return (
    <div className="booking-container">
      <div className="booking-title">
        <h3>How to book<br />a Lab test<br />in 3 simple steps</h3>
      </div>
      <div className="booking-steps">
        {steps.map((step, idx) => (
          <div className="step-box" key={idx}>
            <div className="step-label">{step.step}</div>
            <div className="step-icon">{step.icon}</div>
            <div className="step-content">
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;