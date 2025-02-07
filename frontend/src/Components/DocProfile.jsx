import React, { useState, useEffect } from 'react';
import './Style/DocProfile.css'; // This is where we'll define the styles

function DocProfile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Simulate fetching data from a database
    const fetchData = () => {
      const data = {
        doctorName: 'Dr. John Doe',
        qualifications: 'MD, PhD',
        specifications: 'Cardiology',
        hospitalName: 'HealthCare Hospital',
        designation: 'Chief Medical Officer',
        experience: '15 years',
      };
      setProfileData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container" >
      <h1>DOCTOR'S PROFILE</h1>
      {profileData ? (
        <div className="profile-data">
          <p><strong>Doctor Name:</strong> {profileData.doctorName}</p>
          <p><strong>Qualifications:</strong> {profileData.qualifications}</p>
          <p><strong>Specifications:</strong> {profileData.specifications}</p>
          <p><strong>Hospital Name:</strong> {profileData.hospitalName}</p>
          <p><strong>Designation:</strong> {profileData.designation}</p>
          <p><strong>Experience:</strong> {profileData.experience}</p>
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
}

export default DocProfile;
