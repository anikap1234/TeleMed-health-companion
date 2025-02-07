import React, { useState } from "react";
import "./Style/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
function LoginPage() {
  const [userType, setUserType] = useState("patient");

  const handleUserType = (type) => {
    setUserType(type);
  };

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const PatientLogin = async () => {
    try {
      const config = {
        url: "patientlogin",
        method: "post",
        baseURL: "http://localhost:9000/api/patient/",
        headers: { "content-type": "application/json" },
        data: {
          email: email,
          password: password,
        },
      };
      const req = await axios(config);
      if (req.status === 200) {
        alert(req.data.success);
        window.location.assign("/patienthomepage");
        sessionStorage.setItem("patient", JSON.stringify(req.data.patient));
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  const DoctorLogin = async () => {
    try {
      const config = {
        url: "doctorlogin",
        method: "post",
        baseURL: "http://localhost:9000/api/doctor/",
        headers: { "content-type": "application/json" },
        data: {
          email: email,
          password: password,
        },
      };
      
      const req = await axios(config);
      if (req.status === 200) {
        alert(req.data.success);
        window.location.assign("/doctorprofile");
        sessionStorage.setItem("doctor", JSON.stringify(req.data.doctor));
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div
      className="login-page-body"
      style={{ backgroundImage: `url("/login_background.jpeg")` }}
    >
      <div className="login-page">
        <div className="login-container">
          <div className="login-header">
            <h1 className="login-logo">TeleMed Portal</h1>
            <p className="login-tagline">Your healthcare, anytime, anywhere</p>
          </div>
          <div className="login-toggle">
            <button
              className={userType === "patient" ? "active" : ""}
              onClick={() => handleUserType("patient")}
            >
              Patient
            </button>
            <button
              className={userType === "doctor" ? "active" : ""}
              onClick={() => handleUserType("doctor")}
            >
              Doctor
            </button>
          </div>
          <div className="login-form-wrapper">
            {userType === "patient" ? (
              <>
                <div className="login-form patient">
                  <h2>Patient Login</h2>
                  <form>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Email/Username"
                      required
                    />
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      required
                    />
                    <Button
                      className="login-btn"
                      // onClick={() => navigate("./patienthomepage")}
                      onClick={() => PatientLogin()}
                    >
                      Login
                    </Button>
                    <a href="#" className="forgot-password">
                      Forgot Password?
                    </a>
                  </form>
                </div>
                <div>
                  <footer className="login-footer">
                    <a href="/register">Don't have an account? Register here</a>
                  </footer>
                </div>
              </>
            ) : (
              <>
                <div className="login-form doctor">
                  <h2>Doctor Login</h2>
                  <form>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Email/Username"
                      required
                      value={email}
                    />
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      value={password}
                      required
                    />
                    <Button
                      className="login-btn"
                      // onClick={() => navigate("./doctorprofile")}
                      // onClick={DoctorLogin}
                      onClick={() => DoctorLogin()}
                    >
                      Login
                    </Button>
                    <a href="#" className="forgot-password">
                      Forgot Password?
                    </a>
                  </form>
                </div>
                <div>
                  <footer className="login-footer">
                    <a href="/doctorregister">
                      Don't have an account? Register here
                    </a>
                  </footer>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
