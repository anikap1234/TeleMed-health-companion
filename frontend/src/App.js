import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Register from "./Components/Register";
import PatientHomePage from "./Components/PatientHomePage";
import DocumentManagement from "./Components/DocumentManagement";
import DoctorProfile from "./Components/DoctorProfile";
import PatientDocumentManagement from "./Components/PatientDocumentManagement";
import DocProfile from "./Components/DocProfile";
import TrackSymptoms from "./Components/TrackSymptoms";
import PatientProfile from "./Components/PatientProfile";
import DoctorRegister from "./Components/DoctorRegister";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LoginPage />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/patienthomepage"
            element={
              <>
                <PatientHomePage />
              </>
            }
          />
          <Route
            path="/documentmanagaent"
            element={
              <>
                <DocumentManagement />
              </>
            }
          />
          <Route
            path="/doctorprofile"
            element={
              <>
                <DoctorProfile />
              </>
            }
          />
          <Route
            path="/patient-document-management"
            element={
              <>
                <PatientDocumentManagement />
              </>
            }
          />
          <Route
            path="/doc-profile"
            element={
              <>
                <DocProfile />
              </>
            }
          />
          <Route
            path="/tracksymptoms"
            element={
              <>
                <TrackSymptoms />
              </>
            }
          />
          <Route
            path="/patientprofile"
            element={
              <>
                <PatientProfile />
              </>
            }
          />
          <Route
            path="/doctorregister"
            element={
              <>
                <DoctorRegister />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
