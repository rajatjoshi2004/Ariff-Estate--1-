"use client";

import React from "react";
import Header from "./header/header";
import ForRentProperties from "./Cards/forrentproperties";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Property data with real images
const propertyData = [
  {
    id: "1",
    title: "Modern Apartment in Bole",
    location: "Bole, Addis Ababa",
    price: 35000,
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    image: "/Images/3.png",
    propertyType: "Apartment",
    availabilityDate: "March 1, 2024",
  },
  {
    id: "2",
    title: "Luxury Villa with Pool",
    location: "CMC, Addis Ababa",
    price: 85000,
    bedrooms: 5,
    bathrooms: 4,
    area: 400,
    image: "/Images/4.png",
    propertyType: "Villa",
    availabilityDate: "April 15, 2024",
  },
  {
    id: "3",
    title: "Penthouse with City View",
    location: "Kazanchis, Addis Ababa",
    price: 65000,
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    image: "/Images/11.png",
    propertyType: "Penthouse",
    availabilityDate: "Immediate",
  },
  {
    id: "4",
    title: "Family House with Garden",
    location: "CMC, Addis Ababa",
    price: 45000,
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    image: "/Images/12.png",
    propertyType: "House",
    availabilityDate: "March 15, 2024",
  },
  {
    id: "5",
    title: "Exclusive Apartment Complex",
    location: "Bole Medhanialem, Addis Ababa",
    price: 55000,
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: "/Images/13.png",
    propertyType: "Apartment",
    availabilityDate: "April 1, 2024",
  },
  {
    id: "6",
    title: "Modern Office Space",
    location: "Meskel Square, Addis Ababa",
    price: 75000,
    bedrooms: 0,
    bathrooms: 2,
    area: 200,
    image: "/Images/14.png",
    propertyType: "Commercial",
    availabilityDate: "Immediate",
  },
  {
    id: "7",
    title: "Modern Office Space",
    location: "Meskel Square, Addis Ababa",
    price: 75000,
    bedrooms: 0,
    bathrooms: 2,
    area: 200,
    image: "/Images/15.png",
    propertyType: "Commercial",
    availabilityDate: "Immediate",
  },
];

const ForRent = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] w-11/12 mx-auto pt-14">
        <Header />
        <div className="py-16 bg-gradient-to-b from-transparent via-[#1DA599]/5 to-transparent">
          <ForRentProperties properties={propertyData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForRent;
