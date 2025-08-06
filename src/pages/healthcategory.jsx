import React, { useState } from 'react';
import '../assets/styles/healthcategory.css';
import Body from '../assets/images/body.jpg';
import Diabetes from '../assets/images/diabetes.jpg';
import Woman from '../assets/images/woman.jpg';
import Thyroid from '../assets/images/thyroid.jpg';
import Vitamin from '../assets/images/vitamin.jpg';
import Bloodtest from '../assets/images/blood.jpg';
import Heart from '../assets/images/heart.jpg';
import Kidney from '../assets/images/kidney.jpg';
import Liver from '../assets/images/liver.jpg';
import Hair from '../assets/images/hair.jpg';
import Fever from '../assets/images/fever.jpg';
import Senior from '../assets/images/senior.jpg';
import Hormone from '../assets/images/hormonescreening.jpg';
import Dengue from '../assets/images/dengue.jpg';
import Covid from '../assets/images/covid.jpg';
import Bone from '../assets/images/bone.jpg';
import Allergy from '../assets/images/allergy.jpg'; 
import Immunity from '../assets/images/immunity.jpg';
import Fertility from '../assets/images/fertility.jpg';
import Cancer from '../assets/images/cancer.jpg';
import Hepatitis from '../assets/images/hepatitis.jpg';
import Lungs from '../assets/images/lungs.jpg';
import Weight from '../assets/images/weight.jpg';
 

const healthChecks = [
  { name: "Full Body Checkup", icon: <img src={Body} alt="Full Body Checkup" width="35px"></img>},
  { name: "Diabetes", icon: <img src={Diabetes} alt="Full Body Checkup" width="35px"></img> },
  { name: "Women's Health", icon: <img src={Woman} alt="Full Body Checkup" width="35px"></img> },
  { name: "Thyroid", icon: <img src={Thyroid} alt="Full Body Checkup" width="35px"></img> },
  { name: "Vitamin", icon: <img src={Vitamin} alt="Full Body Checkup" width="35px"></img> },
  { name: "Blood Studies", icon: <img src={Bloodtest} alt="Full Body Checkup" width="35px"></img> },
  { name: "Heart", icon: <img src={Heart} alt="Full Body Checkup" width="35px"></img> },
  { name: "Kidney", icon: <img src={Kidney} alt="Full Body Checkup" width="35px"></img>},
  { name: "Liver", icon: <img src={Liver} alt="Full Body Checkup" width="35px"></img> },
  { name: "Hairfall", icon: <img src={Hair} alt="Full Body Checkup" width="35px"></img> },
  { name: "Fever", icon: <img src={Fever} alt="Full Body Checkup" width="35px"></img> },
  { name: "Senior Citizen", icon: <img src={Senior} alt="Full Body Checkup" width="35px"></img> },
  { name: "Hormone Screening", icon: <img src={Hormone} alt="Full Body Checkup" width="35px"></img> },
  { name: "Dengue", icon: <img src={Dengue} alt="Full Body Checkup" width="35px"></img> },
  { name: "Covid 19", icon: <img src={Covid} alt="Full Body Checkup" width="35px"></img> },
  { name: "Bone and Joint", icon: <img src={Bone} alt="Full Body Checkup" width="35px"></img> },
  { name: "Allergy", icon: <img src={Allergy} alt="Full Body Checkup" width="35px"></img> },
  { name: "Sexual Wellness", icon: <img src={Hormone} alt="Full Body Checkup" width="35px"></img> },
  { name: "Immunity", icon: <img src={Immunity} alt="Full Body Checkup" width="35px"></img> },
  { name: "Fever and Infection", icon: <img src={Fever} alt="Full Body Checkup" width="35px"></img> },
  { name: "Reproductive & Fertility", icon: <img src={Fertility} alt="Full Body Checkup" width="35px"></img> },
  { name: "Cancer Screening", icon: <img src={Cancer} alt="Full Body Checkup" width="35px"></img> },
  { name: "Hepatitis Screening", icon: <img src={Hepatitis} alt="Full Body Checkup" width="35px"></img> },
  { name: "Lungs", icon: <img src={Lungs} alt="Full Body Checkup" width="35px"></img> },
  { name: "Weight Management", icon: <img src={Weight} alt="Full Body Checkup" width="35px"></img> },
  { name: "Iron Studies", icon: <img src={Bloodtest} alt="Full Body Checkup" width="35px"></img> },
  { name: "PCOD Screening", icon: "🧬" },
];

const HealthCategories = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? healthChecks : healthChecks.slice(0, 14);

  return (
    <div className="category-container">
      <div className="category-header">
        <h2>Health Checks ({healthChecks.length})</h2>
        <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View All"}
        </button>
      </div>

      <div className="category-grid">
        {visibleItems.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="icon">{item.icon}</div>
            <div className="label">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default HealthCategories;
