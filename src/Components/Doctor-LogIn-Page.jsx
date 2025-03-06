import React from "react";
import Navbar from "./Navbar";
import HeroSectionDP from "./HeroSection-DP";
import DoctorInfo from "./Doctor-Info";
import MsgCalender from "./Msg-Calender";
import ActionDP from "./Action-DP";
import Footer from "./Footer";

const DoctorLoginPage = () => {
  return (
    <div className="doctorPageContainer">
      <Navbar />
      <HeroSectionDP />
      <DoctorInfo />
      <MsgCalender />
      <ActionDP />
      <Footer />
    </div>
  );
};
export default DoctorLoginPage;
