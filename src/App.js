// import "./App.css";
// import React from "react";
// import SignUpPage from "./Components/Sign-Up-Page";

// function App() {
//   return <SignUpPage />;
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Healio from "./pages/Healio";
import Profile from "./pages/Profile";
import SignUpPage from "./Components/Sign-Up-Page";
import LoginPage from "./Components/LoginPage";
import HeroSection from "./Components/HeroSection";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DoctorLoginPage from "./Components/Doctor-LogIn-Page";
import DoctorInfo from "./Components/Doctor-Info";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Healio />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
        <Footer />
        <SignUpPage />
        <DoctorLoginPage />
      </>
    </Router>
  );
};

export default App;
