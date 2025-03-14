"use client";

import React from "react";
import Header from "./Header/header";
import AgentCards from "./agentcards/agentcards";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const agentData = [
  {
    id: "1",
    image: "/Images/agent/agent1.jpg",
    name: "Samuel Tesfaye",
    location: "Bole, Addis Ababa",
    experience: 5,
    rating: 4.8,
    totalReviews: 124,
    phone: "+251911234567",
    email: "samuel@ariff.com",
    verified: true,
  },
  {
    id: "2",
    image: "/Images/agent/agent2.jpg",
    name: "Meron Alemu",
    location: "CMC, Addis Ababa",
    experience: 3,
    rating: 4.5,
    totalReviews: 89,
    phone: "+251922345678",
    email: "meron@ariff.com",
    verified: true,
  },
  {
    id: "3",
    image: "/Images/agent/agent3.jpg",
    name: "Dawit Bekele",
    location: "Sarbet, Addis Ababa",
    experience: 7,
    rating: 4.9,
    totalReviews: 156,
    phone: "+251933456789",
    email: "dawit@ariff.com",
    verified: true,
  },
  {
    id: "4",
    image: "/Images/agent/agent4.jpg",
    name: "Helen Tadesse",
    location: "Kazanchis, Addis Ababa",
    experience: 4,
    rating: 4.6,
    totalReviews: 92,
    phone: "+251944567890",
    email: "helen@ariff.com",
    verified: true,
  },
  {
    id: "5",
    image: "/Images/agent/agent5.jpg",
    name: "Yonas Girma",
    location: "Megenagna, Addis Ababa",
    experience: 8,
    rating: 4.7,
    totalReviews: 178,
    phone: "+251955678901",
    email: "yonas@ariff.com",
    verified: true,
  },
  {
    id: "6",
    image: "/Images/agent/agent6.jpg",
    name: "Bethlehem Hailu",
    location: "Hayahulet, Addis Ababa",
    experience: 2,
    rating: 4.3,
    totalReviews: 45,
    phone: "+251966789012",
    email: "bethlehem@ariff.com",
    verified: false,
  },
  {
    id: "7",
    image: "/Images/agent/agent7.jpg",
    name: "Abebe Kebede",
    location: "Piassa, Addis Ababa",
    experience: 10,
    rating: 5.0,
    totalReviews: 234,
    phone: "+251977890123",
    email: "abebe@ariff.com",
    verified: true,
  },
  {
    id: "8",
    image: "/Images/agent/agent8.jpg",
    name: "Sara Mohammed",
    location: "Mexico, Addis Ababa",
    experience: 6,
    rating: 4.8,
    totalReviews: 143,
    phone: "+251988901234",
    email: "sara@ariff.com",
    verified: true,
  },
];

const Agent = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] w-11/12 mx-auto pt-14">
        <Header />
        <div className="py-16 bg-gradient-to-b from-transparent via-[#1DA599]/5 to-transparent">
          <AgentCards agents={agentData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Agent;
