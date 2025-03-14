"use client";

import React from "react";
import Header from "./Header/header";
import AgentCards from "./agentcards/agentcards";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    viewMore: "View All Top Agents",
  },
  am: {
    viewMore: "ሁሉንም ከፍተኛ ወኪሎች ይመልከቱ",
  },
};

const topAgentsData = [
  {
    id: "1",
    image: "/Images/agent/agent1.jpg",
    name: "Samuel Tesfaye",
    location: "Bole, Addis Ababa",
    experience: 8,
    rating: 4.9,
    totalReviews: 324,
    phone: "+251911234567",
    email: "samuel@ariff.com",
    verified: true,
    totalSales: 145,
    specialization: "Luxury Properties",
    languages: ["Amharic", "English"],
  },
  {
    id: "2",
    image: "/Images/agent/agent2.jpg",
    name: "Meron Alemu",
    location: "CMC, Addis Ababa",
    experience: 7,
    rating: 4.8,
    totalReviews: 289,
    phone: "+251922345678",
    email: "meron@ariff.com",
    verified: true,
    totalSales: 132,
    specialization: "Commercial Properties",
    languages: ["Amharic", "English", "French"],
  },
  {
    id: "3",
    image: "/Images/agent/agent3.jpg",
    name: "Dawit Bekele",
    location: "Sarbet, Addis Ababa",
    experience: 10,
    rating: 5.0,
    totalReviews: 456,
    phone: "+251933456789",
    email: "dawit@ariff.com",
    verified: true,
    totalSales: 198,
    specialization: "Residential Properties",
    languages: ["Amharic", "English", "Arabic"],
  },
  {
    id: "4",
    image: "/Images/agent/agent4.jpg",
    name: "Helen Tadesse",
    location: "Kazanchis, Addis Ababa",
    experience: 6,
    rating: 4.7,
    totalReviews: 192,
    phone: "+251944567890",
    email: "helen@ariff.com",
    verified: true,
    totalSales: 112,
    specialization: "New Developments",
    languages: ["Amharic", "English"],
  },
  {
    id: "5",
    image: "/Images/agent/agent5.jpg",
    name: "Yonas Girma",
    location: "Megenagna, Addis Ababa",
    experience: 9,
    rating: 4.9,
    totalReviews: 378,
    phone: "+251955678901",
    email: "yonas@ariff.com",
    verified: true,
    totalSales: 167,
    specialization: "Luxury Properties",
    languages: ["Amharic", "English", "Italian"],
  },
  {
    id: "6",
    image: "/Images/agent/agent4.jpg",
    name: "Bethlehem Hailu",
    location: "Hayahulet, Addis Ababa",
    experience: 5,
    rating: 4.6,
    totalReviews: 145,
    phone: "+251966789012",
    email: "bethlehem@ariff.com",
    verified: true,
    totalSales: 89,
    specialization: "Residential Properties",
    languages: ["Amharic", "English"],
  },
];

const TopAgents = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] w-11/12 mx-auto pt-14">
        <Header />
        <div className="py-16 bg-gradient-to-b from-transparent via-[#1DA599]/5 to-transparent">
          <AgentCards agents={topAgentsData} />
          <div className="w-full flex justify-center mt-16">
            <Link
              href="/agents"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-[#1DA599] text-[#1DA599] hover:bg-[#1DA599] hover:text-white transition-all duration-300 group"
            >
              <span>{t.viewMore}</span>
              <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopAgents;
