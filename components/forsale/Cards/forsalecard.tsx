"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Building2,
  MapPin,
  Bed,
  Bath,
  ArrowUpRight,
  CalendarDays,
  Phone,
} from "lucide-react";
import { MdVerified } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface ForSaleCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
}

const translations = {
  en: {
    sqm: "sqm",
    beds: "Beds",
    baths: "Baths",
    viewDetails: "View Details",
    scheduleTour: "Schedule Tour",
    contactAgent: "Contact Agent",
    premium: "Premium",
    newListing: "New Listing",
  },
  am: {
    sqm: "ስኴር ሜትር",
    beds: "መኝታ ቤቶች",
    baths: "ባኞ ቤቶች",
    viewDetails: "ዝርዝሮችን ይመልከቱ",
    scheduleTour: "ጉብኝት ያስይዙ",
    contactAgent: "ወኪልን ያግኙ",
    premium: "ፕሪሚየም",
    newListing: "አዲስ ዝርዝር",
  },
};

const ForSaleCard: React.FC<ForSaleCardProps> = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
}) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-[600px] flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-[240px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Badges Container */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-gradient-to-r from-[#1DA599]/80 to-[#18877e]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sansationBold text-sm shadow-lg border border-white/10">
            {t.premium}
          </span>
          <span className="bg-gradient-to-r from-[#FB3B3B]/80 to-[#d62e2e]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sansationBold text-sm shadow-lg flex items-center gap-1.5 border border-white/10">
            <MdVerified className="text-base" />
            {t.newListing}
          </span>
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
            <span className="text-[#1DA599]">ETB</span>{" "}
            {new Intl.NumberFormat(language === "en" ? "en-US" : "am-ET", {
              maximumFractionDigits: 0,
            }).format(price)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium mb-2 line-clamp-1 text-[#1DA599]">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-4">
          <MapPin className="w-4 h-4 text-[#1DA599] flex-shrink-0" />
          <span className="text-sm text-gray-600 line-clamp-1">{location}</span>
        </div>

        {/* Specs */}
        <div className="border-t border-gray-100 pt-4 mb-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors">
              <Bed className="w-5 h-5 text-[#1DA599] mb-1.5" />
              <div className="text-center">
                <span className="block font-medium text-gray-700">
                  {bedrooms}
                </span>
                <span className="text-sm text-gray-500">{t.beds}</span>
              </div>
            </div>
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors">
              <Bath className="w-5 h-5 text-[#1DA599] mb-1.5" />
              <div className="text-center">
                <span className="block font-medium text-gray-700">
                  {bathrooms}
                </span>
                <span className="text-sm text-gray-500">{t.baths}</span>
              </div>
            </div>
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors">
              <Building2 className="w-5 h-5 text-[#1DA599] mb-1.5" />
              <div className="text-center">
                <span className="block font-medium text-gray-700">{area}</span>
                <span className="text-sm text-gray-500">{t.sqm}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Button Set */}
        <div className="mt-auto">
          <div className="flex gap-2 mb-4">
            <Link
              href={`/properties/for-sale/${id}/schedule`}
              className="flex-1 bg-[#1DA599]/10 hover:bg-[#1DA599]/20 text-[#1DA599] py-2 rounded-lg text-sm font-medium transition-colors text-center flex items-center justify-center gap-1.5"
            >
              <CalendarDays className="w-4 h-4" />
              {t.scheduleTour}
            </Link>
            <Link
              href={`/properties/for-sale/${id}/contact`}
              className="flex-1 bg-[#1DA599]/10 hover:bg-[#1DA599]/20 text-[#1DA599] py-2 rounded-lg text-sm font-medium transition-colors text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              {t.contactAgent}
            </Link>
          </div>

          {/* View Details Button */}
          <Link
            href={`/properties/for-sale/${id}`}
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

export default ForSaleCard;
