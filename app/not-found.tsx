"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { HiHome } from "react-icons/hi";
import { BiError } from "react-icons/bi";
import { BsQuestionLg } from "react-icons/bs";

const translations = {
  en: {
    title: "Page Not Found",
    description:
      "Oops! The page you're looking for doesn't exist or has been moved.",
    button: "Back to Home",
  },
  am: {
    title: "ገጹ አልተገኘም",
    description: "ይቅርታ! እየፈለጉት ያለው ገጽ የለም ወይም ተዛውሯል።",
    button: "ወደ መነሻ ገጽ ተመለስ",
  },
};

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-b from-white via-[#1DA599]/5 to-white">
      <div className="max-w-2xl w-full flex flex-col items-center space-y-12">
        {/* Animated 404 Design */}
        <div className="relative flex flex-col items-center justify-center h-64 md:h-80">
          {/* Background Circle */}
          <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#1DA599]/5 animate-pulse" />

          {/* 404 Text */}
          <div className="relative z-10 flex items-center gap-4">
            <span className="text-8xl md:text-9xl font-sansationBold bg-gradient-to-r from-[#1DA599] to-[#18877e] text-transparent bg-clip-text">
              4
            </span>
            <div className="relative">
              <BiError className="text-7xl md:text-8xl text-[#1DA599] animate-bounce" />
              <BsQuestionLg className="absolute -top-2 -right-2 text-2xl md:text-3xl text-[#1DA599] animate-pulse" />
            </div>
            <span className="text-8xl md:text-9xl font-sansationBold bg-gradient-to-r from-[#1DA599] to-[#18877e] text-transparent bg-clip-text">
              4
            </span>
          </div>

          {/* Decorative Elements */}
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#1DA599]/30 animate-ping" />
            <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-[#1DA599]/30 animate-ping delay-100" />
            <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-[#1DA599]/30 animate-ping delay-200" />
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-[#1DA599]/30 animate-ping delay-300" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-sansationBold text-gray-800">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600 font-sansationRegular max-w-xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center w-full">
          <Link href="/">
            <Button className="bg-gradient-to-r from-[#1DA599] to-[#18877e] hover:scale-[0.98] font-sansationRegular rounded-xl py-6 px-8 text-base transition-all duration-300 shadow-lg shadow-[#1DA599]/20 flex items-center gap-2">
              <HiHome className="text-xl" />
              {t.button}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
