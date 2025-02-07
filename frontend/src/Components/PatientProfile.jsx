import React, { useState } from "react";

function PatientProfile() {
  const patientData = JSON.parse(sessionStorage.getItem("patient"));

  return (
    <div
      className="patient-home"
      style={{ backgroundImage: `url("/login_background.jpeg")` }}
    >
      <div className="">
        <h1 className="title">PROFILE AND MEDICAL HISTORY</h1>

        <div
          className="patient-home"
          style={{
            // backgroundImage: `url("/login_background.jpeg")`,
            padding: "20px",
          }}
        >
          <div
            className="content-container"
            style={{ display: "flex", gap: "20px" }}
          >
            {/* Profile Section */}
            <div
              className="profile-section"
              style={{
                flex: "1",
                background: "#ffffff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>Patient Profile</h2>
              <p>
                <strong>Name:</strong> John Doe
              </p>
              <p>
                <strong>Age:</strong> 35
              </p>
              <p>
                <strong>Gender:</strong> Male
              </p>
              <p>
                <strong>Contact:</strong> +123456789
              </p>
              <p>
                <strong>Email:</strong> john.doe@example.com
              </p>
            </div>

            {/* Medical History Section */}
            <div
              className="medical-history-section"
              style={{
                flex: "1",
                background: "#ffffff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>Medical History</h2>
              <ul style={{ paddingLeft: "20px" }}>
                <li>High Blood Pressure - Diagnosed in 2018</li>
                <li>Allergy to penicillin</li>
                <li>Appendectomy - Performed in 2020</li>
                <li>Regular Checkups - Last visit: September 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
