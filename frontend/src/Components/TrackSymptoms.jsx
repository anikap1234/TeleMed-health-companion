import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Style/SymptomsPage.css";
import "chart.js/auto";
import { Button, Table } from "react-bootstrap";
import moment from "moment";
function TrackSymptoms() {
  const [symptoms, setSymptoms] = useState([]);
  const [healthData, setHealthData] = useState([]);
  const [showSymptoms, setShowSymptoms] = useState(false);
  const [newHealthData, setNewHealthData] = useState({
    temperature: "",
    bp: "",
    heartRate: "",
    weight: "",
  });

  // Fetch Symptoms from the Database
  const fetchSymptoms = async () => {
    try {
      const symptomsResponse = await axios.get(
        "http://localhost:5001/api/symptoms"
      );
      setSymptoms(symptomsResponse.data);
    } catch (error) {
      console.error("Error fetching symptoms:", error);
    }
  };

  // Fetch Health Data from the Database
  const fetchHealthData = async () => {
    try {
      const healthDataResponse = await axios.get(
        "http://localhost:5001/api/health-data"
      );
      setHealthData(healthDataResponse.data);
    } catch (error) {
      console.error("Error fetching health data:", error);
    }
  };

  useEffect(() => {
    fetchHealthData();
  }, []);

  // Toggle the display of symptoms and fetch data if not already fetched
  const handleShowSymptoms = () => {
    if (!showSymptoms) {
      fetchSymptoms();
    }
    setShowSymptoms(!showSymptoms);
  };

  // Handle input changes for health data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHealthData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle symptom log submission
  const handleSymptomSubmit = async (e) => {
    e.preventDefault();
    const symptom = e.target.symptom.value;
    const duration = e.target.duration.value;

    const newSymptom = { symptom, duration };

    try {
      const response = await axios.post(
        "http://localhost:5001/api/symptoms/log-symptom",
        newSymptom
      );
      console.log("Symptom logged:", response.data);
      e.target.reset(); // Clear the form
      fetchSymptoms(); // Update the symptom list
    } catch (error) {
      console.error(
        "Error logging symptom:",
        error.response ? error.response.data : error
      );
    }
  };

  // Handle health data log submission
  const handleHealthSubmit = async (e) => {
    e.preventDefault();
    const { temperature, bp, heartRate, weight } = newHealthData;

    const newHealthDataLog = { temperature, bp, heartRate, weight };

    try {
      const response = await axios.post(
        "http://localhost:5001/api/health-data/log-health-data",
        newHealthDataLog
      );
      console.log("Health data logged:", response.data);
      setNewHealthData({ temperature: "", bp: "", heartRate: "", weight: "" });
      fetchHealthData(); // Update the health data chart
    } catch (error) {
      console.error(
        "Error logging health data:",
        error.response ? error.response.data : error
      );
    }
  };

  // Chart data for health data

  // const [Healthlevel, setHealthlevel] = useState([
  //   {
  //     createdAt: "2024-11-20T10:30:00Z",
  //     Temperature: 98.6,
  //     BloodPressure: 120,
  //     HeartRate: 75,
  //     Weight: 70,
  //   },
  //   {
  //     createdAt: "2024-11-21T11:00:00Z",
  //     Temperature: 99.0,
  //     BloodPressure: 125,
  //     HeartRate: 80,
  //     Weight: 71,
  //   },
  // ]);
const [Healthlevel, setHealthlevel] = useState([]);
  const chartData = {
    labels: Healthlevel.map((data) =>
      moment(data.createdAt).format("DD-MM-YYYY || HH:mm")
    ),
    datasets: [
      {
        label: "Temperature",
        data: Healthlevel.map((data) => data.Temperature),
        borderColor: "red",
        borderWidth: 2,
        tension: 0.4, // Makes the line smooth
        fill: false,
      },
      {
        label: "Blood Pressure",
        data: Healthlevel.map((data) => data.BloodPressure),
        borderColor: "blue",
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
      {
        label: "Heart Rate",
        data: Healthlevel.map((data) => data.HeartRate),
        borderColor: "green",
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
      {
        label: "Weight",
        data: Healthlevel.map((data) => data.Weight),
        borderColor: "orange",
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  };


  // const [Healthlevel, setHealthlevel] = useState([]);
  // const chartData = {
  //   labels: Healthlevel.map((data) =>
  //   {moment(data?.createdAt).format("DD-DD-YYYY || MM:HH")}
  //   ),
  //   datasets: [
  //     {
  //       label: "Temperature",
  //       data: Healthlevel.map((data) => data.Temperature),
  //       borderColor: "red",
  //       fill: false,
  //     },
  //     {
  //       label: "Blood Pressure",
  //       data: Healthlevel.map((data) => data.BloodPressure),
  //       borderColor: "blue",
  //       fill: false,
  //     },
  //     {
  //       label: "Heart Rate",
  //       data: Healthlevel.map((data) => data.HeartRate),
  //       borderColor: "green",
  //       fill: false,
  //     },
  //     {
  //       label: "Weight",
  //       data: Healthlevel.map((data) => data.Weight),
  //       borderColor: "orange",
  //       fill: false,
  //     },
  //   ],
  // };

  // Upload Tracker
  const [Symptom, setSymptom] = useState("");
  const [Duration, setDuration] = useState("");
  const AddSymptoms = async () => {
    if (!Symptom) {
      return alert("write symptom");
    }
    if (!Duration) {
      return alert("write Duration");
    }
    try {
      const config = {
        url: "registersymptom",
        method: "post",
        baseURL: "http://localhost:9000/api/patient/",
        headers: { "content-type": "application/json" },
        data: {
          symptom: Symptom,
          duration: Duration,
        },
      };
      const req = await axios(config);
      if (req.status === 200) {
        alert(req.data.success);
        setSymptom("");
        setDuration("");
        getsymptoms();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [Temperature, setTemperature] = useState("");
  const [BloodPressure, setBloodPressure] = useState("");
  const [HeartRate, setHeartRate] = useState("");
  const [Weight, setWeight] = useState("");
  const AddMonitorHealthLevels = async () => {
    if (!Temperature) {
      return alert("write Temperature");
    }
    if (!BloodPressure) {
      return alert("write BloodPressure");
    }
    if (!HeartRate) {
      return alert("write HeartRate");
    }
    if (!Weight) {
      return alert("write Weight");
    }
    try {
      const config = {
        url: "addhealthlevel",
        method: "post",
        baseURL: "http://localhost:9000/api/patient/",
        headers: { "content-type": "application/json" },
        data: {
          Temperature: Temperature,
          BloodPressure: BloodPressure,
          HeartRate: HeartRate,
          Weight: Weight,
        },
      };
      const req = await axios(config);
      if (req.status === 200) {
        alert(req.data.success);
        setTemperature("");
        setBloodPressure("");
        setHeartRate("");
        setWeight("");
        gethealthlevel();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [AllSymptoms, setAllSymptoms] = useState([]);
  const getsymptoms = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/api/patient/getsymptoms"
      );
      if (res.status === 200) {
        setAllSymptoms(res.data.symptoms);
      }
    } catch (error) {
      // alert(error.response?.data?.error );
      setAllSymptoms([]);
    }
  };

  const gethealthlevel = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/api/patient/gethealthlevel"
      );
      if (res.status === 200) {
        setHealthlevel(res.data.healthlevel);
      }
    } catch (error) {
      // alert(error.response?.data?.error );
      setHealthlevel([]);
    }
  };

  useEffect(() => {
    gethealthlevel();
    getsymptoms();
  }, []);

  console.log("AllSymptoms", AllSymptoms);

  return (
    <div className="healthtrace">
      <div className="app">
        <h1>Health Monitor and Symptom Checker</h1>
        <div className="forms-container">
          <div className="form-section">
            <h3>Track Symptoms</h3>
            <form>
              <label htmlFor="symptom">Symptom</label>
              <input
                type="text"
                placeholder="Enter symptom"
                required
                onChange={(e) => setSymptom(e.target.value)}
                value={Symptom}
              />
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                placeholder="Enter duration"
                onChange={(e) => setDuration(e.target.value)}
                value={Duration}
                required
              />
              <br />
              <Button onClick={AddSymptoms}>Log</Button>
            </form>
          </div>

          <div className="form-section">
            <h3>Monitor Health Levels</h3>
            <form>
              <label>Temperature</label>
              <input
                type="number"
                name="temperature"
                value={Temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="Enter temperature"
                required
              />
              <label>Blood Pressure</label>
              <input
                type="number"
                value={BloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
                placeholder="Enter blood pressure"
                required
              />
              <label>Heart Rate</label>
              <input
                type="number"
                value={HeartRate}
                onChange={(e) => setHeartRate(e.target.value)}
                placeholder="Enter heart rate"
                required
              />
              <label>Weight</label>
              <input
                type="number"
                value={Weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
                required
              />
              <Button onClick={AddMonitorHealthLevels}>Log</Button>
            </form>
          </div>
        </div>

        <div className="chart-container">
          <h3>Health Data Chart</h3>
          <Line data={chartData} />
        </div>

        <div className="log-container">
          <h3>Logged Symptoms</h3>
          <button onClick={handleShowSymptoms}>
            {showSymptoms ? "Hide Logged Symptoms" : "Show Logged Symptoms"}
          </button>

          {showSymptoms && (
            <Table striped bordered hover responsive className="document-table">
              <thead className="document-head">
                <tr>
                  <th>Sl.No</th>
                  <th>Symptom</th>
                  <th>Duration</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {AllSymptoms?.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item?.symptom}</td>
                    <td>{item?.duration}</td>
                    <td>
                      {moment(item?.createdAt).format("DD-MM-YYYY || MM:HH")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrackSymptoms;
