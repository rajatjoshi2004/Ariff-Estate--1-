import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import MarketplaceHeader from "@/components/marketplace/header/header";
import MarketplaceGrid from "@/components/marketplace/grid/marketplacegrid";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace | Ariff Estate",
  description:
    "Discover and connect with trusted real estate service providers, contractors, and professionals in Ethiopia.",
};

const MarketplacePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <MarketplaceHeader />
      <MarketplaceGrid />
      <Footer />
    </main>
  );
};

export default MarketplacePage;
