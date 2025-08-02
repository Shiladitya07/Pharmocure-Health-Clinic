import React from "react";
import "../assets/styles/sidebar.css"; // Use the same CSS for consistency
import profile from "../assets/images/profile.jpg";

const Navbar = () => (
  <nav className="navbar flex">
    <i className="bx bx-menu" id="sidebar-open"></i>
    <input type="text" placeholder="Search..." className="search_box" />
    <span className="nav_image">
      <img src={profile} alt="profile_img" />
    </span>
  </nav>
);

export default Navbar;