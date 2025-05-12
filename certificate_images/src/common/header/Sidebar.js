
import React, { useEffect } from "react";
import "../../styles/home.css";
import "../../styles/styleSwitcher.css";
import "../../styles/appTheme.css";
import CertificatePage from "../../pages/certificate/CertificatePage";

const Sidebar = () => {
    return (
      <aside className="aside font-family-secondary">
        <div className="logo">
          <img
            src="/assets/logo/resized-logo.jpeg"
            alt="Logo"
            height="140px"
            width="auto"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div class="nav-toggler">
        <span></span>
      </div>
        <ul className="nav font-family-secondary">
          <li>
            <a href="#home" className="active">
              <i className="fa fa-home"></i>Home
            </a>
          </li>
          <li>
            <a href="#courses">
              <i className="fa fa-book"></i>Courses
            </a>
          </li>
          <li>
            <a href="#pictures">
              <i className="fa-solid fa-image"></i>Pictures
            </a>
          </li>
          <li>
            <a href="#certificate">
              <i className="fa-solid fa-certificate" onClick={CertificatePage}></i>Certificates
            </a>
          </li>
          <li>
            <a href="#jobs">
              <i className="fa-solid fa-briefcase"></i>Apply for job
            </a>
          </li>
          <li>
            <a href="#quiz">
              <i className="fa fa-question-circle"></i>Quiz
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fa fa-comments"></i>Contact
            </a>
          </li>
        </ul>
        <a href="../index.html" className="btn" style={{ marginTop: "40px" }}>
          Back to Home
        </a>
      </aside>
    );
  };
  
export default Sidebar;