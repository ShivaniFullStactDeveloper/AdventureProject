import React from "react";
import "../styles/home.css";
import Sidebar from "../common/header/Sidebar.js";
import StyleSwitcher from "../common/StyleSwitcher/StyleSwitcher.js";
import Alerts from "../common/Alerts/Alerts.js";

// Main Home component
const Home = () => {
  return (
    <div className="main-container dark">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content">
        <section id="home">
          <div className="container">
            <div className="row">

              {/* Information Section */}
              <div className="home-info padd-15">
                <h3 className="hello font-family-secondary">
                  <span className="subtitle-change">IT Skills Development Program by</span>
                  <span className="name">  Enjoy Programming</span>
                </h3>


                {/* Short description paragraph */}
                <p className="font-family-secondary">
                  Embrace innovation, enhance your skills, and excel in your career. 
                  Join us to unlock your potential in the ever-evolving digital landscape.
                </p>

                {/* Action Buttons */}
                <div className="action-buttons">
                  <a href="#contact" className="contact-link">
                    <i className="fa fa-phone"></i> Contact Us
                  </a>
                  <a href="#courses" className="courses-link">
                    <i className="fa fa-book"></i> Crash Courses
                  </a>
                </div>
              </div>

              {/* Alerts Component */}
              <Alerts />
            </div>
          </div>
        </section>
      </div>
      
      {/* Style Switcher Component */}
      <StyleSwitcher />
    </div>
  );
};

export default Home;