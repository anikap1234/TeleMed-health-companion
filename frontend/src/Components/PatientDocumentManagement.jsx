import React, { useEffect, useRef, useState } from "react";
import "./Style/PatientDocumentManagement.css"; // Import the CSS file
import { Table } from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import { FiUpload } from "react-icons/fi";

function PatientDocumentManagement() {
  // Upload Lab Report
  const [LabReport, setLabReport] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async (uploadedFile) => {
    if (!uploadedFile) return;

    if (uploadedFile.type === "application/pdf") {
      setLabReport(uploadedFile);
      await uploadLabReport(uploadedFile); // Automatically upload the file
    } else {
      alert("Please upload a PDF file");
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset input if invalid file
      }
    }
  };

  const uploadLabReport = async (file) => {
    try {
      const formData = new FormData();
      formData.append("labreport", file);

      const config = {
        url: "uploadlabreport",
        method: "post",
        baseURL: "http://localhost:9000/api/patient/",
        headers: { "content-type": "multipart/form-data" },
        data: formData,
      };

      console.log("config", config);

      const req = await axios(config);
      if (req.status === 200) {
        alert(req.data.success);
        setLabReport(null); // Reset file state
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Clear the file input
        }
        getlabreport();
      }
    } catch (error) {
      alert(error.response?.data?.error || "Upload failed");
    }
  };

  const [AllLabReport, setAllLabReport] = useState([]);
  const getlabreport = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/api/patient/getlabreport"
      );
      if (res.status === 200) {
        setAllLabReport(res.data.labreport);
      }
    } catch (error) {
      // alert(error.response?.data?.error );
      setAllLabReport([]);
    }
  };
  useEffect(() => {
    getlabreport();
  }, []);
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="container">
      <h1>PATIENT DOCUMENT MANAGEMENT</h1>
      <div className="file-upload">
        <h2 htmlFor="file-upload" className="upload-label">
          Upload documents
        </h2>
        <div style={{justifyContent:"center", display: "flex", alignItems: "center", gap: "10px" }}>
          {/* File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => handleFileChange(e.target.files[0])}
            accept="application/pdf" // Restrict file type in the input
            style={{ display: "none" }} // Hide default input
            id="file-upload"
          />
          {/* Label as Upload Icon */}
          <div 
          onClick={handleIconClick} // Trigger the file input click
          className="file-upload-icon" 
          style={{ cursor: "pointer",textAlign:"center" }}>
            <FiUpload size={24} />
          </div>
        </div>
      </div>
      {/* <button onClick={UploadLabReport}>Upload</button> */}
      {/* <div className="document-view-access">
        <h2>Document view access 123</h2>
        <div className="form-group">
          <label>Patient name</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Patient phone number</label>
          <input
            type="text"
            value={patientPhoneNumber}
            onChange={(e) => setPatientPhoneNumber(e.target.value)}
            className="form-input"
          />
        </div>
      </div> */}
      <div>
        <Table striped bordered hover responsive className="document-table">
          <thead className="document-head">
            <tr>
              <th>Sl.No</th>
              <th>Upload Date</th>
              <th>File Name</th>
              <th>View</th>
            </tr>
          </thead>
          {/* {ReportName === "Lab Report" && ( */}
          <tbody>
            {AllLabReport?.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{moment(item?.createdAt).format("DD-MM-YYYY || MM:HH")}</td>
                <td>{item?.labreport || "Unnamed Document"}</td>
                <td>
                  <a
                    href={`http://localhost:9000/Labreport/${item.labreport}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          {/* )} */}
          {/* {ReportName === "Lab Images" && (
            <tbody>
              {AllLabImages?.map((item, i) => (
                <tr>
                  <td>{i+1}</td>
                  <td>
                    {moment(item?.createdAt).format("DD-MM-YYYY || MM:HH")}
                  </td>
                  <td>{item?.labimages || "Unnamed Document"}</td>
                  <td>
                    <a
                      href={`http://localhost:9000/LabImages/${item.labimages}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )} */}
        </Table>
      </div>
    </div>
  );
}

export default PatientDocumentManagement;
