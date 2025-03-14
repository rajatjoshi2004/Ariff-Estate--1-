"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import ExclusiveHeader from "./Header/header";
import ExclusiveCards from "./Cards/cards";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const translations = {
  en: {
    title: "Exclusive Properties",
    subtitle: "Discover Our Premium Collection",
  },
  am: {
    title: "ልዩ ንብረቶች",
    subtitle: "የእኛን ፕሪሚየም ስብስብ ያግኙ",
  },
};

const Exclusive = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] w-11/12 mx-auto pt-14">
        <ExclusiveHeader />
        <div className="py-16 bg-gradient-to-b from-transparent via-[#1DA599]/5 to-transparent">
          <ExclusiveCards />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exclusive;
