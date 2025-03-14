"use client";

import React from "react";
import MarketplaceHeader from "./header/header";
import MarketplaceGrid from "./grid/marketplacegrid";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1DA599]/10 to-transparent h-[500px] -z-10" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5 h-[500px] -z-10" />

        {/* Content */}
        <MarketplaceHeader />
        <MarketplaceGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
