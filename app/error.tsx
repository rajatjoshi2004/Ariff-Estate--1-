"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { HiHome, HiRefresh } from "react-icons/hi";
import { BiErrorCircle } from "react-icons/bi";
import { RiSignalWifiErrorFill } from "react-icons/ri";
import { TbPlugConnectedX } from "react-icons/tb";

const translations = {
  en: {
    title: "Something Went Wrong",
    description:
      "We apologize for the inconvenience. Please try again or return to the homepage.",
    retry: "Try Again",
    home: "Back to Home",
  },
  am: {
    title: "አንድ ችግር ተፈጥሯል",
    description: "ለደረሰው ችግር ይቅርታ እንጠይቃለን። እባክዎ እንደገና ይሞክሩ ወይም ወደ መነሻ ገጽ ይመለሱ።",
    retry: "እንደገና ሞክር",
    home: "ወደ መነሻ ገጽ ተመለስ",
  },
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-b from-white via-[#FB3B3B]/5 to-white">
      <div className="max-w-2xl w-full text-center space-y-12">
        {/* Animated Error Design */}
        <div className="relative flex flex-col items-center justify-center h-64 md:h-80">
          {/* Background Circle */}
          <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#FB3B3B]/5 animate-pulse" />

          {/* Error Icons */}
          <div className="relative z-10 flex items-center gap-6">
            <div className="relative">
              <BiErrorCircle className="text-7xl md:text-8xl text-[#FB3B3B] animate-bounce" />
              <RiSignalWifiErrorFill className="absolute -top-2 -right-2 text-2xl md:text-3xl text-[#FB3B3B] animate-pulse" />
            </div>
            <div className="relative">
              <TbPlugConnectedX className="text-6xl md:text-7xl text-[#FB3B3B] animate-bounce delay-100" />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#FB3B3B]/30 animate-ping" />
            <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-[#FB3B3B]/30 animate-ping delay-100" />
            <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-[#FB3B3B]/30 animate-ping delay-200" />
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-[#FB3B3B]/30 animate-ping delay-300" />
          </div>

          {/* Connection Lines */}
          <div className="absolute w-full h-full">
            <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-[#FB3B3B]/20 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-[#FB3B3B]/20 rotate-45 animate-pulse delay-100" />
            <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-[#FB3B3B]/20 -rotate-45 animate-pulse delay-200" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-sansationBold text-gray-800">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600 font-sansationRegular">
            {t.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={reset}
            className="bg-gradient-to-r from-[#FB3B3B] to-[#d62e2e] hover:scale-[0.98] font-sansationRegular rounded-xl py-6 px-8 text-base transition-all duration-300 shadow-lg shadow-[#FB3B3B]/20 flex items-center gap-2"
          >
            <HiRefresh className="text-xl" />
            {t.retry}
          </Button>
          <Link href="/">
            <Button className="bg-gradient-to-r from-[#1DA599] to-[#18877e] hover:scale-[0.98] font-sansationRegular rounded-xl py-6 px-8 text-base transition-all duration-300 shadow-lg shadow-[#1DA599]/20 flex items-center gap-2">
              <HiHome className="text-xl" />
              {t.home}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
