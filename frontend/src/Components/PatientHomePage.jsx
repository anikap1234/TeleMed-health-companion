import React from "react";
import "./Style/patienthomepage.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
function PatientHomePage() {
  const patientData = JSON.parse(sessionStorage.getItem("patient"));
  const navigate = useNavigate();

  const logout =()=>{
    sessionStorage.removeItem("patient");
    window.location.assign("/")
  }
  return (
    <div>
      <div>
        <header className="bg-blue-900 text-white">
          <div className="container mx-auto flex justify-between items-center py-2">
            <div className="text-sm">
              📧 contact@example.com
              <span className="ml-4 mr-2">📞 +91 8956231254</span>
            </div>
            <div className="text-sm">
              <a href="#" className="hover:underline">
                Make an Appointment
              </a>
            </div>
          </div>
        </header>

        <nav className="bg-blue-800 text-white">
          <div className="container mx-auto flex justify-between items-center py-4">
            <div className="text-2xl font-bold">Medilab</div>
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
           
              <li>
                <a href="#" className="hover:underline">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dropdown
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
            <a
              onClick={()=>navigate("/patientprofile")}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
                Profile
              {" "}
            </a>
            <div>
            <p>{patientData?.pname}</p>
            <Button variant="danger" onClick={logout}>Logout</Button>
         
            </div>
       
          </div>
        </nav>

        <main className="bg-gray-100">
          <div className="container mx-auto py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold">WELCOME TO MEDILAB</h1>
              <p className="text-lg text-gray-600">
                “Your Wellness, Our Masterpiece”
              </p>
            </div>
            <div className="flex justify-center mb-12">
              <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg width-50">
                <h2 className="text-2xl font-bold mb-4">Why Choose Medilab?</h2>
                <p className="mb-4">
                  "Guiding You to Wellness: Where Care Meets Commitment!"8.
                  "Health is a Journey, Let Us Be Your Guide
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-8">
              <div className=" p-8 rounded-lg shadow-lg width-25">
                <div className="text-center mb-4">
                  <span className="text-4xl text-blue-600">🏥</span>
                </div>
                <h3
                  onClick={() => navigate("/documentmanagaent")}
                  style={{ cursor: "pointer" }}
                  className="text-xl font-bold mb-2 text-center"
                >
                  MY REPORTS
                </h3>
                <p className="text-gray-600 text-center">
                  Access and review your past medical reports.
                </p>
              </div>
              <div className=" p-8 rounded-lg shadow-lg width-25">
                <div className="text-center mb-4">
                  <span className="text-4xl text-blue-600">🤒</span>
                </div>
                <h3
                  onClick={() => navigate("/tracksymptoms")}
                  style={{ cursor: "pointer" }}
                  className="text-xl font-bold mb-2 text-center"
                >
                  SYMPTOM CHECKER
                </h3>
                <p className="text-gray-600 text-center">
                  Identify potential health conditions by analyzing the symptoms
                  you’re experiencing, providing suggestions for further action
                  or care.
                </p>
              </div>
              <div className=" p-8 rounded-lg shadow-lg width-25">
                <div className="text-center mb-4">
                  <span className="text-4xl text-blue-600">💊📄</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  MY PRESCRIPTIONS
                </h3>
                <p className="text-gray-600 text-center">
                  Stay on track with your health: manage, remember, and refill
                  your prescriptions effortlessly.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PatientHomePage;
