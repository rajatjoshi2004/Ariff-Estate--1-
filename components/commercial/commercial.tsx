"use client";

import React from "react";
import Header from "./header/header";
import CommercialProperties from "./Cards/commercialproperties";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Sample commercial property data with actual images from For Sale section
const commercialProperties = [
  {
    id: "c1",
    title: "Modern Office Space in Bole",
    location: "Bole, Addis Ababa",
    price: 150000,
    area: 500,
    image: "/Images/3.png",
    propertyType: "office",
    availabilityDate: "Immediate",
    capacity: 50,
    purpose: "Office Space",
  },
  {
    id: "c2",
    title: "Prime Retail Space in Piassa",
    location: "Piassa, Addis Ababa",
    price: 200000,
    area: 300,
    image: "/Images/4.png",
    propertyType: "retail",
    availabilityDate: "1 Month",
    capacity: 30,
    purpose: "Retail",
  },
  {
    id: "c3",
    title: "Industrial Warehouse in Kaliti",
    location: "Kaliti, Addis Ababa",
    price: 300000,
    area: 1200,
    image: "/Images/11.png",
    propertyType: "warehouse",
    availabilityDate: "2 Months",
    capacity: 100,
    purpose: "Storage & Distribution",
  },
  {
    id: "c4",
    title: "Restaurant Space with Full Kitchen",
    location: "Kazanchis, Addis Ababa",
    price: 180000,
    area: 250,
    image: "/Images/12.png",
    propertyType: "restaurant",
    availabilityDate: "Immediate",
    capacity: 80,
    purpose: "Food & Beverage",
  },
  {
    id: "c5",
    title: "Luxury Showroom in Mexico",
    location: "Mexico, Addis Ababa",
    price: 250000,
    area: 400,
    image: "/Images/13.png",
    propertyType: "showroom",
    availabilityDate: "1 Month",
    capacity: 40,
    purpose: "Retail Display",
  },
  {
    id: "c6",
    title: "Industrial Complex in CMC",
    location: "CMC, Addis Ababa",
    price: 400000,
    area: 2000,
    image: "/Images/14.png",
    propertyType: "industrial",
    availabilityDate: "3 Months",
    capacity: 150,
    purpose: "Manufacturing",
  },
  {
    id: "c7",
    title: "Tech Hub Office Space",
    location: "Bole Medhanialem, Addis Ababa",
    price: 280000,
    area: 600,
    image: "/Images/3.png",
    propertyType: "office",
    availabilityDate: "1 Month",
    capacity: 70,
    purpose: "Tech Office",
  },
  {
    id: "c8",
    title: "Shopping Mall Space",
    location: "Sarbet, Addis Ababa",
    price: 350000,
    area: 800,
    image: "/Images/4.png",
    propertyType: "retail",
    availabilityDate: "2 Months",
    capacity: 120,
    purpose: "Retail",
  },
];

const Commercial = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] w-11/12 mx-auto pt-14">
        <Header />
        <div className="py-16 bg-gradient-to-b from-transparent via-[#1DA599]/5 to-transparent">
          <CommercialProperties properties={commercialProperties} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Commercial;
