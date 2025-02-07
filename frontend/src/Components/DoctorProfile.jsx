import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Style/doctorprofile.css";
import { Button } from "react-bootstrap";
function DoctorProfile() {
  const doctorData = JSON.parse(sessionStorage.getItem("doctor"));
  const logout = () => {
    sessionStorage.removeItem("doctor");
    window.location.assign("/");
  };
  return (
    <div>
      <div className="header-container">
        <div className="header-right">
          <p className="doctor-name"><b>Doctor Name : </b>{doctorData?.dname}</p><br/>
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
        </div>
        {/* Hero Section */}
        <header className="hero-section">
          <div className="hero-content">
            <h1>Welcome to MediLab</h1>
            <p>Your complete healthcare management solution</p>
          </div>
        </header>

        {/* Card Section */}
        <section className="card-section">
          <Link to="/patient-document-management" className="doc-card">
            <h2>Patient Document Management</h2>
            <p>Manage and access patient records effortlessly.</p>
          </Link>
          <Link to="/doc-profile" className="doc-card">
            <h2>Doctor's Profile</h2>
            <p>View and update professional profiles of doctors.</p>
          </Link>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <p>© {new Date().getFullYear()} MediLab. All Rights Reserved.</p>
            <p>Contact: info@medilab.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DoctorProfile;
