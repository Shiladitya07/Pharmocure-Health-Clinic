import React from "react";
import "../assets/styles/sidebar.css"; // Use the same CSS for consistency
import profile from "../assets/images/profile.jpg";

const Navbar = () => (
  <nav className="navbar flex">
    <i className="bx bx-menu" id="sidebar-open"></i>
    <input type="text" placeholder="Search..." className="search_box" />
  </nav>
);

export default Navbar;