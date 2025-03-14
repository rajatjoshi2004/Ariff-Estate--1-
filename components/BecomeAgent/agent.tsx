"use client";

import React from "react";
import Header from "./Header/header";
import Benefits from "./Benefits/benefits";
import Requirements from "./Requirements/requirements";
import JoinForm from "./JoinForm/joinform";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const BecomeAgent = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Header />
        <Benefits />
        <Requirements />
        <JoinForm />
      </main>
      <Footer />
    </div>
  );
};

export default BecomeAgent;
