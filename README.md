# Telemedicine Portal

## Overview
The **Telemedicine Portal** is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables patients to track symptoms, gain health insights through charts, manage medical documents, and consult with doctors. Doctors can view patient records, offer consultations, and provide medical recommendations. 

## Features
### Patient Features:
- **Symptom Tracking** – Patients can log and monitor symptoms over time.
- **Health Insights & Charts** – Visual representation of health trends.
- **Document Management** – Upload and manage medical documents, prescriptions, and test reports.
- **Doctor Consultation** – Schedule virtual appointments with doctors.
- **Multi-language Support** – Includes Kannada and Hindi for better accessibility.
- **Secure Login** – Register and log in securely with JWT authentication.

### Doctor Features:
- **View Patient Records** – Access uploaded documents and medical history of patients.
- **Provide Consultation** – Offer video or chat-based medical guidance.
- **Prescription Upload** – Share digital prescriptions and recommendations.

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT-based authentication
- **Data Visualization:** Chart.js for health insights
- **Real-time Communication:** WebRTC for video consultation
- **Deployment:** Docker, AWS/GCP (Optional)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

### Steps to Run Locally
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/telemedicine-portal.git
   cd telemedicine-portal
   ```
2. **Install Dependencies**
   ```bash
   npm install
   cd client && npm install
   ```
3. **Set Up Environment Variables**
   Create a `.env` file in the root and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. **Run Backend Server**
   ```bash
   npm run dev
   ```
5. **Run Frontend**
   ```bash
   cd client
   npm start
   ```
6. **Access the App**
   Open `http://localhost:3000` in your browser.

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Patient
- `POST /api/patient/symptoms` - Log symptoms
- `GET /api/patient/documents` - Retrieve uploaded documents
- `GET /api/patient/health-insights` - Get health insights charts

### Doctor
- `GET /api/doctor/patients` - Get list of patients
- `GET /api/doctor/patient/:id/documents` - View specific patient documents
- `POST /api/doctor/consultation` - Provide consultation

## Future Enhancements
- AI-based health recommendations
- Integration with wearable devices for real-time tracking
- E-prescription generation

## Contributing
Feel free to fork and contribute to the project by submitting a pull request.

## License
This project is licensed under the MIT License.
