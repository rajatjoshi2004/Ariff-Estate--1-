import React from "react";
import ResourcesHeader from "@/components/resources/header/header";
import ResourcesGrid from "@/components/resources/grid/resourcesgrid";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Ariff Estate",
  description:
    "Explore our comprehensive real estate resources, guides, and tools to help you make informed property decisions.",
};

const ResourcesPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <ResourcesHeader />
      <ResourcesGrid />
      <Footer />
    </main>
  );
};

export default ResourcesPage;
