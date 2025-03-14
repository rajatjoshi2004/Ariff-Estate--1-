"use client";

import React from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { IoMdMail } from "react-icons/io";
import { useLanguage } from "../../../context/LanguageContext";

const translations = {
  en: {
    title: "Subscribe to Our",
    titleHighlight: "Newsletter",
    description:
      "Stay updated with our latest exclusive properties and real estate insights delivered directly to your inbox",
    placeholder: "Enter your email address",
    button: "Subscribe Now",
    consent:
      "By subscribing, you agree to our Privacy Policy and consent to receive updates from our team",
  },
  am: {
    title: "የእኛን ኒውስ ለተር",
    titleHighlight: "ይቀላቀሉ",
    description:
      "በቅርብ ጊዜ ስለሚቀርቡ የልዩ ንብረቶች እና የሪል እስቴት እይታዎች በቀጥታ በኢሜይል እንዲደርስዎ ይቀላቀሉን",
    placeholder: "የኢሜይል አድራሻዎን ያስገቡ",
    button: "አሁን ይቀላቀሉ",
    consent: "በመቀላቀል፣ የግላዊነት ፖሊሲያችንን ተቀብለው ከቡድናችን ዝማኔዎችን ለመቀበል ፈቃድዎን ይሰጣሉ",
  },
};

const Subscribe = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full py-20 px-4 bg-gradient-to-b from-white via-[#1DA599]/5 to-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        <div className="space-y-3">
          <h3 className="text-[2rem] sm:text-[2.2rem] font-sansationBold leading-tight">
            {t.title} <span className="text-[#1DA599]">{t.titleHighlight}</span>
          </h3>
          <p className="font-sansationRegular text-[#454545] text-sm sm:text-base max-w-xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-3 px-4 sm:px-0">
          <div className="w-full relative">
            <span className="absolute top-1/2 left-4 -translate-y-1/2 text-[1.2rem] text-[#1DA599]">
              <IoMdMail />
            </span>
            <Input
              type="email"
              placeholder={t.placeholder}
              className="w-full pl-12 py-6 font-sansationRegular text-base bg-white border-2 focus:border-[#1DA599] transition-colors duration-300 rounded-xl"
            />
          </div>
          <Button className="min-w-[160px] bg-gradient-to-r from-[#1DA599] to-[#18877e] hover:scale-[0.98] transition-all duration-300 font-sansationRegular rounded-xl py-6 px-8 text-base shadow-lg shadow-[#1DA599]/20">
            {t.button}
          </Button>
        </div>

        <p className="text-xs text-[#454545]/80 font-sansationRegular">
          {t.consent}
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
