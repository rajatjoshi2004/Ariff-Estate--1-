/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { useLanguage } from "../../../context/LanguageContext";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Phone } from "lucide-react";

interface PropertyCardProps {
  id: number;
  img: any;
  type: string;
  location: string;
  beds: string;
  bath: string;
  size: string;
  address: string;
  newProperty: boolean;
  rent: boolean;
  buildYear?: string;
  price?: number;
}

const translations = {
  en: {
    contactAgent: "Contact Agent",
    beds: "Beds",
    baths: "Baths",
    newLaunch: "New Launch",
    premium: "Premium",
    builtIn: "Built in",
    currency: "ETB",
    viewDetails: "View Details",
    scheduleTour: "Schedule Tour",
  },
  am: {
    contactAgent: "ወኪል ያግኙ",
    beds: "መኝታ ቤቶች",
    baths: "ባኞ",
    newLaunch: "አዲስ ጀማሪ",
    premium: "ፕሪሚየም",
    builtIn: "የተሰራበት ዓመት",
    currency: "ብር",
    viewDetails: "ዝርዝሮችን ይመልከቱ",
    scheduleTour: "ጉብኝት ያስይዙ",
  },
};

const PropertyCard = ({
  id = 1,
  img,
  type,
  location,
  beds,
  bath,
  size,
  newProperty,
  rent,
  buildYear = "2017",
  price = 15000000,
}: PropertyCardProps) => {
  const [liked, setLiked] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-[600px] flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-[240px] overflow-hidden">
        <Image
          src={img}
          alt={type}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Badges Container */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {rent && (
            <span className="bg-gradient-to-r from-[#1DA599]/80 to-[#18877e]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sansationBold text-sm shadow-lg border border-white/10">
              {t.premium}
            </span>
          )}
          {newProperty && (
            <span className="bg-gradient-to-r from-[#FB3B3B]/80 to-[#d62e2e]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sansationBold text-sm shadow-lg flex items-center gap-1.5 border border-white/10">
              <MdVerified className="text-base" />
              {t.newLaunch}
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={() => setLiked(!liked)}
          className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg shadow-lg transition-all duration-500 backdrop-blur-md z-10
            ${
              liked
                ? "bg-gradient-to-r from-[#FB3B3B]/90 to-[#d62e2e]/90"
                : "bg-white/60 hover:bg-white/80"
            }`}
        >
          {liked ? (
            <FaHeart className="text-xl text-white animate-bounce" />
          ) : (
            <FaRegHeart className="text-xl text-[#FB3B3B] group-hover:scale-110 transition-transform duration-300" />
          )}
        </button>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Price */}
        <div className="mb-3">
          <span className="text-xl font-semibold text-gray-900">
            <span className="text-[#1DA599]">{t.currency}</span>{" "}
            {formatPrice(price)}
          </span>
        </div>

        {/* Location and Build Year Row */}
        <div className="flex items-center justify-between mb-3">
          {/* Location */}
          <div className="flex items-center gap-1.5">
            <HiOutlineLocationMarker className="w-4 h-4 text-[#1DA599] flex-shrink-0" />
            <span className="text-sm text-gray-600 line-clamp-1">
              {location}
            </span>
          </div>

          {/* Build Year */}
          <div className="flex items-center gap-1.5">
            <BsCalendarEvent className="w-4 h-4 text-[#1DA599] flex-shrink-0" />
            <span className="text-sm text-gray-600">
              {t.builtIn} {buildYear}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium mb-4 line-clamp-1 text-[#1DA599]">
          {type}
        </h3>

        {/* Specs */}
        <div className="border-t border-gray-100 pt-4 mb-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors">
              <IoBedOutline className="w-5 h-5 text-[#1DA599] mb-1.5" />
              <div className="text-center">
                <span className="block font-medium text-gray-700">{beds}</span>
                <span className="text-sm text-gray-500">{t.beds}</span>
              </div>
            </div>
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors">
              <PiBathtub className="w-5 h-5 text-[#1DA599] mb-1.5" />
              <div className="text-center">
                <span className="block font-medium text-gray-700">{bath}</span>
                <span className="text-sm text-gray-500">{t.baths}</span>
              </div>
            </div>
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors">
              <BiArea className="w-5 h-5 text-[#1DA599] mb-1.5" />
              <div className="text-center">
                <span className="block font-medium text-gray-700">{size}</span>
                <span className="text-sm text-gray-500">m²</span>
              </div>
            </div>
          </div>
        </div>

        {/* Button Set */}
        <div className="mt-auto">
          <div className="flex gap-2 mb-4">
            <Link
              href={`/properties/${id}/schedule`}
              className="flex-1 bg-[#1DA599]/10 hover:bg-[#1DA599]/20 text-[#1DA599] py-2 rounded-lg text-sm font-medium transition-colors text-center flex items-center justify-center gap-1.5"
            >
              <CalendarDays className="w-4 h-4" />
              <span className="whitespace-nowrap">{t.scheduleTour}</span>
            </Link>
            <Link
              href={`/properties/${id}/contact`}
              className="flex-1 bg-[#1DA599]/10 hover:bg-[#1DA599]/20 text-[#1DA599] py-2 rounded-lg text-sm font-medium transition-colors text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span className="whitespace-nowrap">{t.contactAgent}</span>
            </Link>
          </div>

          {/* View Details Button */}
          <Link
            href={`/properties/${id}`}
            className="flex items-center justify-between pt-4 border-t border-gray-100"
          >
            <span className="text-sm font-medium text-[#1DA599]">
              {t.viewDetails}
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#1DA599] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export const ViewAllButton = ({ language }: { language: string }) => {
  const t = translations[language as keyof typeof translations];
  return (
    <Link
      href="/properties/for-sale"
      className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#1DA599] to-[#18877e] text-white py-4 rounded-xl font-medium text-lg hover:shadow-lg transition-all duration-300 group"
    >
      <span>View All Properties For Sale</span>
      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </Link>
  );
};

export default PropertyCard;
