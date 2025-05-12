// src/pages/Home/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {
  // Initialize the typed.js animation
  useEffect(() => {
    const options = {
      strings: ['Coding Bootcamps', 'Web Development', 'Mobile App Development', 'Data Science'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed('.typing', options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home section active" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello font-family-secondary">
              IT Skills Development Program by
              <span className="name"> Enjoy Programming</span>
            </h3>
            <h3 className="my-profession">
              <span className="typing"></span>
            </h3>
            <p className="font-family-secondary">
              Embrace innovation, enhance your skills, and excel in your
              career. Join us to unlock your potential in the ever-evolving
              digital landscape.
            </p>
            <div className="contact-us">
              <Link to="/contact" className="contact-link">
                <i className="fa fa-phone"></i> Contact Us
                &emsp;&emsp;&emsp;&emsp;
              </Link>
              <Link to="/crash-course" className="contact-link">
                <i className="fa fa-book"></i> Crash Courses
              </Link>
              <br />
            </div>
          </div>
          <div className="alert-box">
            <h1><i className="fa-solid fa-bell"></i> Alerts!</h1>
            <div className="alert alert-one" role="alert">
              Summer Camp Admission Open.<a href="https://forms.gle/53HGzErde2kCXBL29">
                Hurry Up</a>
            </div>
            <div className="alert alert-two" role="alert">
              Online / Offline Full Stack Developer Batch started on Feb 15.
              <a href="https://forms.gle/fyBTAamqDUfKVwnu7">Join Us</a>
            </div>
            <div className="alert alert-three" role="alert">
              Upcoming Workshop on React Native – Led by an Expert! Date: April 12, 2025.
            </div>
            <div className="alert alert-four" role="alert">
              Mockup Interview for FS_24-25_A, FS_24-25_B on HTML, CSS, Bootstrap, DBMS (Postgress), Javascript, C,
              Java, Swift, Python, Node JS, React JS scheduled on 30th & 31st March 2025.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;