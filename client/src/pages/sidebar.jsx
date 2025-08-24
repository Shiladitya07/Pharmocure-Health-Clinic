import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/sidebar.css";
import Logo from "../assets/images/logo.jpeg";

const Sidebar = () => {
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarOpenBtn = document.querySelector("#sidebar-open");
    const sidebarCloseBtn = document.querySelector("#sidebar-close");
    const sidebarLockBtn = document.querySelector("#lock-icon");

    if (!sidebar || !sidebarLockBtn) return; // Prevents null crash

    const toggleLock = () => {
      sidebar.classList.toggle("locked");
      if (!sidebar.classList.contains("locked")) {
        sidebar.classList.add("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
      } else {
        sidebar.classList.remove("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
      }
    };

    const hideSidebar = () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
      }
    };

    const showSidebar = () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
      }
    };

    const toggleSidebar = () => {
      sidebar.classList.toggle("close");
    };

    // Responsive behavior
    if (window.innerWidth < 800) {
      sidebar.classList.add("close");
      sidebar.classList.remove("locked", "hoverable");
    }

    // Add event listeners safely
    sidebarLockBtn.addEventListener("click", toggleLock);
    sidebar.addEventListener("mouseleave", hideSidebar);
    sidebar.addEventListener("mouseenter", showSidebar);
    if (sidebarOpenBtn) sidebarOpenBtn.addEventListener("click", toggleSidebar);
    if (sidebarCloseBtn) sidebarCloseBtn.addEventListener("click", toggleSidebar);

    return () => {
      // Clean up listeners
      sidebarLockBtn.removeEventListener("click", toggleLock);
      sidebar.removeEventListener("mouseleave", hideSidebar);
      sidebar.removeEventListener("mouseenter", showSidebar);
      if (sidebarOpenBtn) sidebarOpenBtn.removeEventListener("click", toggleSidebar);
      if (sidebarCloseBtn) sidebarCloseBtn.removeEventListener("click", toggleSidebar);
    };
  }, []);

  return (
    <nav className="sidebar locked">
      <div className="logo_items flex">
        <span className="nav_image">
          <img src={Logo} alt="logo_img" />
        </span>
        <span className="logo_name">PharmoCure Admin</span>
        <i className="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
        <i className="bx bx-x" id="sidebar-close"></i>
      </div>

      <div className="menu_container">
        <div className="menu_items">
          {/* Dashboard Section */}
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Dashboard</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <NavLink
                to="/admin"
                className={({ isActive }) => `link flex ${isActive ? "active" : ""}`}
              >
                <i className="bx bx-home-alt"></i>
                <span>Overview</span>
              </NavLink>
            </li>
          </ul>

          {/* Medicines Section */}
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Medicines</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <NavLink
                to="/admin/docover"
                className={({ isActive }) => `link flex ${isActive ? "active" : ""}`}
              >
                <i className="bx bxs-magic-wand"></i>
                <span>Overview</span>
              </NavLink>
            </li>
          </ul>

          {/* Patients Section */}
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Patients</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <NavLink
                to="/admin/appgraph"
                className={({ isActive }) => `link flex ${isActive ? "active" : ""}`}
              >
                <i className="bx bx-flag"></i>
                <span>Appointment</span>
              </NavLink>
            </li>
            <li className="item">
              <NavLink
                to="/admin/addappoint"
                className={({ isActive }) => `link flex ${isActive ? "active" : ""}`}
              >
                <i className="bx bx-flag"></i>
                <span>Add Appointment</span>
              </NavLink>
            </li>
          </ul>

          {/* Products Management */}
          <p className="menu_title">Products Management</p>
          <li className="item">
            <NavLink
              to="/admin/addproduct"
              className={({ isActive }) => `link flex ${isActive ? "active" : ""}`}
            >
              <i className="bx bx-plus"></i>
              <span>Add Medicine</span>
            </NavLink>
          </li>
        </div>

        <div className="sidebar_profile flex">
          <span className="nav_image">
            <img src={Logo} alt="profile_img" />
          </span>
          <div className="data_text">
            <span className="name">Join</span>
            <br />
            <span className="email">pharmocurehealthclinic@gmail.com</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
