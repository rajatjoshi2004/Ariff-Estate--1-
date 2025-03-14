"use client";

import React from "react";
import { Button } from "../../ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsCalendarCheck } from "react-icons/bs";
import Image from "next/image";
import pngImage1 from "../../../public/Images/4.png";
import pngImage2 from "../../../public/Images/3.png";
import { IoIosArrowForward } from "react-icons/io";
import { useLanguage } from "../../../context/LanguageContext";

const translations = {
  en: {
    title: {
      highlight: "What",
      rest: "Makes Us Different?",
    },
    description:
      "We provide an easy-to-use platform to connect buyers, sellers, and renters with the best properties in Ethiopia.",
    buttons: {
      browse: "Browse Properties",
      schedule: "Schedule Consultation",
    },
    properties: {
      penthouse: {
        title: "Premium Penthouses",
        location: "Exclusive Living in Bole",
      },
      villa: {
        title: "Executive Villas",
        location: "Prime Location in CMC",
      },
    },
  },
  am: {
    title: {
      highlight: "ምን",
      rest: "ልዩ ያደርገናል?",
    },
    description:
      "ገዢዎችን፣ ሻጮችን እና ተከራዮችን ከኢትዮጵያ ምርጥ ንብረቶች ጋር የሚያገናኝ ቀላል መድረክ እናቀርባለን።",
    buttons: {
      browse: "ንብረቶችን ይመልከቱ",
      schedule: "ምክክር ቀጠሮ ይያዙ",
    },
    properties: {
      penthouse: {
        title: "ፕሪሚየም ፔንትሃውስ",
        location: "በቦሌ ልዩ መኖሪያ",
      },
      villa: {
        title: "ኤግዚክዩቲቭ ቪላዎች",
        location: "በሲኤምሲ ዋና አካባቢ",
      },
    },
  },
};

const Different = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-8 md:gap-12">
        {/*------------- left side text section ------------ */}
        <div className="w-full md:w-5/12 lg:w-4/12 space-y-4 md:space-y-6">
          <h3 className="text-[1.8rem] sm:text-[2rem] font-sansationBold">
            <span className="text-[#1DA599]">{t.title.highlight}</span>{" "}
            {t.title.rest}
          </h3>
          <p className="font-sansationRegular text-[#454545] text-sm sm:text-base">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 !font-sansationRegular">
            <Button className="w-full sm:w-fit bg-[#1DA599] hover:bg-[#18877e] font-Inter font-light rounded-lg px-4 sm:px-6 py-5 sm:py-6 text-[0.9rem]">
              {t.buttons.browse}
              <FaArrowRightLong className="ml-2" />
            </Button>

            <Button className="w-full sm:w-fit bg-black hover:bg-black/90 font-Inter font-light rounded-lg px-4 sm:px-6 py-5 sm:py-6 text-[0.9rem]">
              {t.buttons.schedule}
              <BsCalendarCheck className="ml-2 text-lg" />
            </Button>
          </div>
        </div>

        {/*------------- right side image section ------------ */}
        <div className="w-full md:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* left side */}
          <div className="w-full space-y-3">
            <div className="space-y-1">
              <h3 className="font-sansationBold text-[1.1rem] sm:text-[1.2rem]">
                {t.properties.penthouse.title}
              </h3>
              <p className="text-[#1DA599] flex gap-1 group hover:cursor-pointer text-sm">
                {t.properties.penthouse.location}
                <span className="mt-1 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  <IoIosArrowForward />
                </span>
              </p>
            </div>

            <div className="relative aspect-[4/5] w-full">
              <Image
                src={pngImage1}
                alt={t.properties.penthouse.title}
                fill
                className="object-cover object-center rounded-lg hover:shadow-xl transition-all duration-300"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="w-full space-y-3">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={pngImage2}
                alt={t.properties.villa.title}
                fill
                className="object-cover object-center rounded-lg hover:shadow-xl transition-all duration-300"
              />
            </div>

            <div className="space-y-1">
              <h3 className="font-sansationBold text-[1.1rem] sm:text-[1.2rem]">
                {t.properties.villa.title}
              </h3>
              <p className="text-[#1DA599] flex gap-1 group hover:cursor-pointer items-center text-sm">
                {t.properties.villa.location}
                <span className="mt-1 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  <IoIosArrowForward />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
