import React, { useState } from "react";
import "./Style/registerpage.css";
import { Button } from "react-bootstrap";
import axios from "axios";
function DoctorRegister() {
  const [name, setName] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const doctorRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const config = {
        url: "doctorregister",
        method: "post",
        baseURL: "http://localhost:9000/api/doctor/",
        headers: { "content-type": "application/json" },
        data: {
          dname: name,
          mobileno: PhoneNo,
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
          <h1>Doctor's SIGN UP</h1>
          <form>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Phone No:</label>
            <input
              type="text"
              value={PhoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
              maxLength={10}
            />

            <label htmlFor="email">EMAIL:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">PASSWORD:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="confirm-password">CONFIRM PASSWORD:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <br />
            <Button onClick={doctorRegister}>Submit</Button>
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
export default DoctorRegister;
