"use client";

import React from "react";
import Header from "./header/header";
import NewDevelopmentProperties from "./NewDevelopmentProperties";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { IoLeafOutline } from "react-icons/io5";
import {
  MdOutlineSmartphone,
  MdOutlinePool,
  MdOutlineSecurity,
} from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { TbGardenCart } from "react-icons/tb";

// Property data with real images
const propertyData = [
  {
    id: "1",
    img: "/Images/3.png",
    title: "Skyline Residences",
    location: "Bole, Addis Ababa",
    price: "5,000,000",
    progress: 50,
    completionDate: "2017 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <MdOutlinePool className="text-[#1DA599] text-lg" />,
        label: "Swimming Pool",
      },
      { icon: <GiGymBag className="text-[#1DA599] text-lg" />, label: "Gym" },
    ],
  },
  {
    id: "2",
    img: "/Images/15.png",
    title: "Summit Heights",
    location: "CMC, Addis Ababa",
    price: "6,500,000",
    progress: 85,
    completionDate: "2017 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <TbGardenCart className="text-[#1DA599] text-lg" />,
        label: "Garden",
      },
      {
        icon: <MdOutlineSecurity className="text-[#1DA599] text-lg" />,
        label: "24/7 Security",
      },
    ],
  },
  {
    id: "3",
    img: "/Images/16.png",
    title: "Green Valley Apartments",
    location: "Sarbet, Addis Ababa",
    price: "4,800,000",
    progress: 60,
    completionDate: "2018 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
    ],
  },
  {
    id: "4",
    img: "/Images/WhyChoose.png",
    title: "Metro Park Residences",
    location: "Kazanchis, Addis Ababa",
    price: "7,200,000",
    progress: 35,
    completionDate: "2018 E.C.",
    features: [
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <MdOutlinePool className="text-[#1DA599] text-lg" />,
        label: "Swimming Pool",
      },
      { icon: <GiGymBag className="text-[#1DA599] text-lg" />, label: "Gym" },
    ],
  },
  {
    id: "5",
    img: "/Images/3.png",
    title: "Harmony Heights",
    location: "Bole, Addis Ababa",
    price: "8,500,000",
    progress: 40,
    completionDate: "2018 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <TbGardenCart className="text-[#1DA599] text-lg" />,
        label: "Garden",
      },
    ],
  },
  {
    id: "6",
    img: "/Images/15.png",
    title: "Sunset View Apartments",
    location: "CMC, Addis Ababa",
    price: "5,800,000",
    progress: 75,
    completionDate: "2017 E.C.",
    features: [
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <MdOutlineSecurity className="text-[#1DA599] text-lg" />,
        label: "24/7 Security",
      },
      { icon: <GiGymBag className="text-[#1DA599] text-lg" />, label: "Gym" },
    ],
  },
  {
    id: "7",
    img: "/Images/16.png",
    title: "Royal Gardens",
    location: "Sarbet, Addis Ababa",
    price: "9,200,000",
    progress: 30,
    completionDate: "2018 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <TbGardenCart className="text-[#1DA599] text-lg" />,
        label: "Garden",
      },
      {
        icon: <MdOutlinePool className="text-[#1DA599] text-lg" />,
        label: "Swimming Pool",
      },
    ],
  },
  {
    id: "8",
    img: "/Images/WhyChoose.png",
    title: "Urban Oasis",
    location: "Kazanchis, Addis Ababa",
    price: "6,900,000",
    progress: 55,
    completionDate: "2017 E.C.",
    features: [
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <MdOutlineSecurity className="text-[#1DA599] text-lg" />,
        label: "24/7 Security",
      },
      { icon: <GiGymBag className="text-[#1DA599] text-lg" />, label: "Gym" },
    ],
  },
  {
    id: "9",
    img: "/Images/3.png",
    title: "The Residences at Central Park",
    location: "Bole, Addis Ababa",
    price: "10,500,000",
    progress: 25,
    completionDate: "2018 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <MdOutlinePool className="text-[#1DA599] text-lg" />,
        label: "Swimming Pool",
      },
      {
        icon: <TbGardenCart className="text-[#1DA599] text-lg" />,
        label: "Garden",
      },
    ],
  },
];

const NewDevelopment = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] w-11/12 mx-auto pt-14">
        <Header />
        <div className="py-16 bg-gradient-to-b from-transparent via-[#1DA599]/5 to-transparent">
          <NewDevelopmentProperties properties={propertyData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewDevelopment;
