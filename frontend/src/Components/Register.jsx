import React, { useState } from "react";
import "./Style/registerpage.css";
import { FaEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import axios from "axios";
import { Button } from "react-bootstrap";
function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);

  const PatientRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const config = {
        url: "register",
        method: "post",
        baseURL: "http://localhost:9000/api/patient/",
        headers: { "content-type": "application/json" },
        data: {
          pname: name,
          mobileno: phone,
          email: email,
          password: password,
        },
      };
      const req = await axios(config);
      if (req.status === 200) {
        alert(req.data.success);
        window.location.assign("/");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  return (
    <div
      className="registerpage"
      style={{ backgroundImage: `url("/a4.jpeg")` }}
    >
      <div style={styles.body}>
        <div className="register-container">
          <h1>SIGN UP</h1>
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="phone">Phone No:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={10}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <div className="password-container">
              <input
                type={showPasswords ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPasswords(!showPasswords)}
              >
                {showPasswords ? <FaEyeSlash /> : <FiEye />}
              </button>
            </div>

            <label htmlFor="confirm-password">Confirm Password:</label>
            <div className="password-container">
              <input
                type={showPasswords ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPasswords(!showPasswords)}
              >
                {showPasswords ? <FaEyeSlash /> : <FiEye />}
              </button>
            </div>
            <br />

            <Button onClick={PatientRegister}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
const styles = {
  body: {
    backgroundSize: "cover",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  },
};
export default Register;
