import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Style/DocumentManagement.css";
import { Table } from "react-bootstrap";
import moment from "moment";
function DocumentManagement() {

  // Upload Lab Report
  const [LabReport, setLabReport] = useState("");
  const fileInputRef = useRef(null);
  const UploadLabReport = async () => {
    if (!LabReport) {
      return alert("Please Select report");
    }
    try {
      const config = {
        url: "uploadlabreport",
        method: "post",
        baseURL: "http://localhost:9000/api/patient/",
        headers: { "content-type": "multipart/form-data" }, // Correct header for file uploads
        data: {
          labreport: LabReport,
        },
      };
      const req = await axios(config);
      if (req.status === 200) {
        alert(req.data.success);
        setLabReport(null); // Reset state
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Clear the file input
        }
      }
    } catch (error) {
      alert(error.response?.data?.error || "Upload failed");
    }
  };

  const [ReportName, setReportName] = useState();
  const [AllLabReport, setAllLabReport] = useState([]);
  const getlabreport = async (name) => {
    setReportName(name);
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


// Upload Imaging
const [LabImages, setLabImages] = useState("");
const fileInputRef1 = useRef(null);
const UploadImaging = async () => {
  if (!LabImages) {
    return alert("Please Select Imaging");
  }
  try {
    const config = {
      url: "uploadlabimages",
      method: "post",
      baseURL: "http://localhost:9000/api/patient/",
      headers: { "content-type": "multipart/form-data" }, // Correct header for file uploads
      data: {
        labimages: LabImages,
      },
    };
    const req = await axios(config);
    if (req.status === 200) {
      alert(req.data.success);
      setLabImages(null); // Reset state
      if (fileInputRef1.current) {
        fileInputRef1.current.value = ""; // Clear the file input
      }
    }
  } catch (error) {
    alert(error.response?.data?.error || "Upload failed");
  }
};


const [AllLabImages, setAllLabImages] = useState([]);
const getlabimages = async (name) => {
  setReportName(name);
  try {
    const res = await axios.get(
      "http://localhost:9000/api/patient/getlabimages"
    );
    if (res.status === 200) {
      setAllLabImages(res.data.labimages);
    }
  } catch (error) {
    // alert(error.response?.data?.error );
    setAllLabImages([]);
  }
};

useEffect(() => {
  getlabreport();
  getlabimages()
}, []);
  return (
    <div style={{ backgroundImage: `url("/login_background.jpeg")` }}>
      <div className="document-management">
        <h1 className="title-01">DOCUMENT MANAGEMENT</h1>
        {/* <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button> */}

        {/* <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileSelection}
          id="fileInput"
        /> */}

        <div className="document-sections">
          <div className="document-card">
            <h2>Lab Reports</h2>
            <p>Blood Test Results</p>
            <input
              type="file"
              ref={fileInputRef} // Attach ref to input
              onChange={(e) => setLabReport(e.target.files[0])} // Update state with selected file
              className="upload-btn"
            />
            <button className="upload-btn" onClick={() => UploadLabReport()}>
              Upload Lab Report
            </button>
            <button
              className="view-btn"
              onClick={() => getlabreport("Lab Report")}
            >
              View Lab Report
            </button>
          </div>

          <div className="document-card">
            <h2>Imaging</h2>
            <p>CT Scan Report</p>
            <input
            type="file"
              className="upload-btn"
              ref={fileInputRef1} // Attach ref to input
              onChange={(e) => setLabImages(e.target.files[0])} // Update state with selected file
             
            />
           
            <button
              className="upload-btn"
              onClick={() => UploadImaging()}
            >
              Upload Imaging Document
            </button>
            <button className="view-btn" onClick={() =>   getlabimages("Lab Images")}>
              View
            </button>
          </div>
        </div>
        <br />



        <h2 style={{ textAlign: "center" }}>{ReportName}</h2>
        <Table striped bordered hover responsive className="document-table">
          <thead className="document-head">
            <tr>
              <th>Sl.No</th>
              <th>Upload Date</th>
              <th>File Name</th>
              <th>View</th>
            </tr>
          </thead>
          {ReportName === "Lab Report" && (
            <tbody>
              {AllLabReport?.map((item, i) => (
                <tr>
                  <td>{i+1}</td>
                  <td>
                    {moment(item?.createdAt).format("DD-MM-YYYY || MM:HH")}
                  </td>
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
          )}
          {ReportName === "Lab Images" && (
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
          )}
        </Table>

        {/* <div className="search-results">
          {searchResults.map((doc, index) => (
            <div key={index}>
              <p>
                <strong>{doc.section}</strong>:{" "}
                {doc.originalname || "Unnamed Document"}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default DocumentManagement;
