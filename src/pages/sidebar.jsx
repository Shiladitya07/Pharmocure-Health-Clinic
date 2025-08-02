import React, { useEffect } from "react";
import "../assets/styles/sidebar.css"; 
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.jpg";

const Sidebar = () => {
  useEffect(() => {
    // Sidebar logic from script.js
    const sidebar = document.querySelector(".sidebar");
    const sidebarOpenBtn = document.querySelector("#sidebar-open");
    const sidebarCloseBtn = document.querySelector("#sidebar-close");
    const sidebarLockBtn = document.querySelector("#lock-icon");

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

    if (window.innerWidth < 800) {
      sidebar.classList.add("close");
      sidebar.classList.remove("locked");
      sidebar.classList.remove("hoverable");
    }

    sidebarLockBtn.addEventListener("click", toggleLock);
    sidebar.addEventListener("mouseleave", hideSidebar);
    sidebar.addEventListener("mouseenter", showSidebar);
    sidebarOpenBtn.addEventListener("click", toggleSidebar);
    sidebarCloseBtn.addEventListener("click", toggleSidebar);

    // Cleanup
    return () => {
      sidebarLockBtn.removeEventListener("click", toggleLock);
      sidebar.removeEventListener("mouseleave", hideSidebar);
      sidebar.removeEventListener("mouseenter", showSidebar);
      sidebarOpenBtn.removeEventListener("click", toggleSidebar);
      sidebarCloseBtn.removeEventListener("click", toggleSidebar);
    };
  }, []);

  return (
    <nav className="sidebar locked">
      <div className="logo_items flex">
        <span className="nav_image">
          <img src={logo} alt="logo_img" />
        </span>
        <span className="logo_name">CodingNepal</span>
        <i className="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
        <i className="bx bx-x" id="sidebar-close"></i>
      </div>

      <div className="menu_container">
        <div className="menu_items">
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Dashboard</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-home-alt"></i>
                <span>Overview</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-grid-alt"></i>
                <span>All Projects</span>
              </a>
            </li>
          </ul>

          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Editor</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bxs-magic-wand"></i>
                <span>Magic Build</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-folder"></i>
                <span>New Projects</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-cloud-upload"></i>
                <span>Upload New</span>
              </a>
            </li>
          </ul>

          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Setting</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-flag"></i>
                <span>Notice Board</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-award"></i>
                <span>Award</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-cog"></i>
                <span>Setting</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar_profile flex">
          <span className="nav_image">
            <img src={profile} alt="profile_img" />
          </span>
          <div className="data_text">
            <span className="name">David Oliva</span>
            <span className="email">david@gmail.com</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;