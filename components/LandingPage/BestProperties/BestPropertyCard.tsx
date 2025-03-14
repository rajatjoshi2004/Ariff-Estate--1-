"use client";

import Image from "next/image";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineTag } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { useLanguage } from "../../../context/LanguageContext";

const translations = {
  en: {
    badges: {
      premium: "Premium",
      newLaunch: "New Launch",
    },
    currency: "ETB",
    viewDetails: "View Details",
  },
  am: {
    badges: {
      premium: "ፕሪሚየም",
      newLaunch: "አዲስ",
    },
    currency: "ብር",
    viewDetails: "ዝርዝሮችን ይመልከቱ",
  },
};

const BestPropertyCard = ({
  img,
  title,
  location,
  price,
  newProperty,
  rent,
}: {
  img: string;
  title: string;
  location: string;
  price: string;
  newProperty: boolean;
  rent: boolean;
}) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex-grow h-[24rem] bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 origin-center relative overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-center object-cover rounded-lg"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badge Container - Positioned at top */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {rent && (
            <span className="bg-gradient-to-r from-[#1DA599]/80 to-[#18877e]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sansationBold text-sm shadow-lg border border-white/10">
              {t.badges.premium}
            </span>
          )}
          {newProperty && (
            <span className="bg-gradient-to-r from-[#FB3B3B]/80 to-[#d62e2e]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sansationBold text-sm shadow-lg flex items-center gap-1.5 border border-white/10">
              <MdVerified className="text-base" />
              {t.badges.newLaunch}
            </span>
          )}
        </div>
      </div>

      {/* Content overlay with glassy effect */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-30 border border-[#1DA599] rounded-lg font-sansationBold backdrop-blur-[2px]">
        <p className="flex justify-between items-baseline mb-2">
          <span className="text-xl text-white">{title}</span>
          <span className="text-sm flex items-baseline gap-1 text-white">
            {location} <HiOutlineLocationMarker className="text-[1.2rem]" />
          </span>
        </p>

        <p className="flex justify-between items-baseline">
          <span className="text-sm flex gap-1 items-center text-white">
            {price} {t.currency} <AiOutlineTag className="text-[1.2rem]" />
          </span>
          <span className="flex gap-2 items-center text-white group">
            {t.viewDetails}{" "}
            <FaArrowRightLong className="text-[1.2rem] group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default BestPropertyCard;
