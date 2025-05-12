import React from "react";
import "../../styles/alerts.css";

/**
 * Alerts Component - Displays important notifications to users
 * This component shows various alert types with different styling
 * and priorities for school/course announcements
 */
const Alerts = () => {
  return (
    <div className="alert-box">
      <h1>
        <i className="fa fa-bell"></i> Alerts!
      </h1>

      {/* High priority alert - Summer Camp */}
      <div className="alert alert-one">
        Summer Camp Admission Open.
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf46b6TBUoWiW1YT34x3NDGM3xSc68jFEvBO7vxAlrSqJhVHA/viewform">
          {" "}Hurry Up
        </a>
      </div>

      {/* Course enrollment alert */}
      <div className="alert alert-two">
        Online / Offline Full Stack Developer Batch started on Feb 15.
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeteLnCClzaKmDum5LSioh9BEFcrawxgHV_4I1ZQlmWzPq_gQ/viewform">
          Join Us
        </a>
      </div>

      {/* Upcoming workshop notification */}
      <div className="alert alert-three">
        Upcoming Workshop on React Native – Led by an Expert! Date: April 12, 2025.
      </div>

      {/* Interview schedule alert */}
      <div className="alert alert-four">
        Mockup Interview for FS_24-25_A, FS_24-25_B on HTML, CSS, Bootstrap, DBMS (Postgres), 
        Javascript, C, Java, Swift, Python, Node JS, React JS scheduled on 30th & 31st March 2025.
      </div>
    </div>
  );
};

export default Alerts;