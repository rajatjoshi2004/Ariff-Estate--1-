import React from "react";
import Header from "./Header/Header";
import Properties from "./Propertiessale/propertysale";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Newdevelopment = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] w-11/12 mx-auto pt-14">
        <Header />
        <Properties />
      </div>
      <Footer />
    </>
  );
};

export default Newdevelopment;
