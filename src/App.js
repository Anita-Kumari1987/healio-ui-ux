// import "./App.css";
// import React from "react";
// import SignUpPage from "./Components/Sign-Up-Page";

// function App() {
//   return <SignUpPage />;
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Healio from './pages/Healio'; 
import Profile from './pages/Profile'; 
import SignUpPage from "./Components/Sign-Up-Page";

import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <Router> 
      <div>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Healio />} />
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
