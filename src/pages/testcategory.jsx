import React, { useState } from "react";
import "../assets/styles/testcategory.css";
import Kidney from '../assets/images/kidney.jpg';
import Thyroid from '../assets/images/thyroid.jpg';
import Bloodtest from '../assets/images/blood.jpg';
import Vitamin from '../assets/images/vitamin.jpg';

// Mock test data
const testData = [
  {
    name: "CBC Test (Complete Blood Count)",
    included: "30 Tests Included",
    price: 395,
    originalPrice: 988,
    discount: "60%",
    icon: <img src={Bloodtest} alt="Full Body Checkup" width="35px"></img>
  },
  {
    name: "HbA1c Test (Hemoglobin A1c)",
    included: "3 Tests Included",
    price: 619,
    originalPrice: 1547,
    discount: "60%",
    icon: "🧪",
  },
  {
    name: "FBS (Fasting Blood Sugar) Test",
    included: "1 Test Included",
    price: 80,
    originalPrice: 200,
    discount: "60%",
    icon: "🧪",
  },
  {
    name: "Lipid Profile Test",
    included: "8 Tests Included",
    price: 639,
    originalPrice: 1597,
    discount: "60%",
    icon: "❤",
  },
  {
    name: "Kidney Function Test",
    included: "10 Tests Included",
    price: 799,
    originalPrice: 1399,
    discount: "42%",
    icon: <img src={Kidney} alt="Full Body Checkup" width="35px"></img>
  },
  {
    name: "Thyroid Panel",
    included: "4 Tests Included",
    price: 299,
    originalPrice: 799,
    discount: "62%",
    icon: <img src={Thyroid} alt="Full Body Checkup" width="35px"></img>
  },
  {
    name: "Vitamin D Test",
    included: "1 Test Included",
    price: 599,
    originalPrice: 999,
    discount: "40%",
    icon: <img src={Vitamin} alt="Full Body Checkup" width="35px"></img>
  },
  {
    name: "Liver Function Test",
    included: "5 Tests Included",
    price: 499,
    originalPrice: 899,
    discount: "45%",
    icon: "🍖",
  },
  {
    name: "Lipid Profile Test",
    included: "8 Tests Included",
    price: 639,
    originalPrice: 1597,
    discount: "60%",
    icon: "❤",
  },
  {
    name: "LFT (Liver Function) Test",
    included: "11 Tests Included",
    recommendation: "Recommended for LFT",
    price: 639,
    originalPrice: 1597,
    discount: "60%",
    icon: "🍖",
  },
  {
    name: "PPBS Test (Post-Prandial Blood Sugar)",
    included: "1 Test Included",
    price: 80,
    originalPrice: 200,
    discount: "60%",
    icon: "🧪",
  },
  {
    name: "Glucose Fasting and PP Test",
    included: "2 Tests Included",
    price: 199,
    originalPrice: 499,
    discount: "60%",
    icon: "📦",
  },
  {
    name: "Urine Routine Test",
    included: "17 Tests Included",
    price: 310,
    originalPrice: 775,
    discount: "60%",
    icon: "💧",
  },
  {
    name: "KFT with Electrolytes (Kidney Function)",
    included: "14 Tests Included",
    recommendation: "Recommended for RFT/KFT",
    price: 900,
    originalPrice: 2250,
    discount: "60%",
    icon: "🩸",
  },
  {
    name: "Creatinine Test",
    included: "2 Tests Included",
    price: 260,
    originalPrice: 650,
    discount: "60%",
    icon: "🧪",
  },
  {
    name: "TSH Test (Thyroid Stimulating Hormone)",
    included: "1 Test Included",
    price: 320,
    originalPrice: 800,
    discount: "60%",
    icon: "🦋",
  },
  {
    name: "Thyroid Profile (T3 T4 TSH) Test",
    included: "3 Tests Included",
    recommendation: "Recommended for Thyroid",
    price: 620,
    originalPrice: 1550,
    discount: "60%",
    icon: <img src={Thyroid} alt="Full Body Checkup" width="35px"></img>,
  },
];
const TestCategory = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTests = showAll ? testData : testData.slice(0, 5);

  return (
    <div className="top-tests-container">
      <div className="top-tests-header">
        <h2>Top Booked Tests ({testData.length})</h2>
        <button className="view-all-link" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View All"}
        </button>
      </div>

      <div className="tests-card-list wrap">
        {visibleTests.map((test, index) => (
          <div className="test-card" key={index}>
            <div className="test-icon">{test.icon}</div>
            <div className="test-info">
              <h4 className="test-name">{test.name}</h4>
              <p className="test-sub">{test.included}</p>
              <div className="test-price">
                <span className="price">₹{test.price}</span>
                <span className="original">₹{test.originalPrice}</span>
                <span className="discount">{test.discount} off</span>
              </div>
              <button className="add-btn">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TestCategory;