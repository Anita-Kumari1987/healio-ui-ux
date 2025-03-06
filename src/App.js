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
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DoctorLoginPage from "./Components/Doctor-LogIn-Page";

const App = () => {
  return (
    <Router>
      <>
        <SignUpPage />
        <DoctorLoginPage />
      </>
    </Router>
  );
};

export default App;
