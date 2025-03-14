/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, ArrowUpRight, CalendarDays, Phone } from "lucide-react";
import { MdVerified } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Feature {
  icon: React.ReactNode;
  label: string;
}

interface PropertyCardProps {
  id: string;
  img: string;
  title: string;
  location: string;
  price: string;
  progress: number;
  completionDate: string;
  features: Feature[];
}

const translations = {
  en: {
    viewDetails: "View Details",
    scheduleTour: "Schedule Tour",
    contactAgent: "Contact Agent",
    premium: "Premium",
    newDevelopment: "New Development",
    completion: "Ready by",
    more: "more",
  },
  am: {
    viewDetails: "ዝርዝሮችን ይመልከቱ",
    scheduleTour: "ጉብኝት ያስይዙ",
    contactAgent: "ወኪልን ያግኙ",
    premium: "ፕሪሚየም",
    newDevelopment: "አዲስ ግንባታ",
    completion: "ዝግጁ በ",
    more: "ተጨማሪ",
  },
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  img,
  title,
  location,
  price,
  progress,
  completionDate,
  features,
}) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [liked, setLiked] = useState(false);

  // Show first 2 features and if more than 3, show "+X more"
  const hasMoreThanThree = features.length > 3;
  const displayFeatures = features.slice(0, hasMoreThanThree ? 2 : 3);
  const remainingCount = features.length - 2;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-[600px] flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-[240px] overflow-hidden">
        <Image
          src={img}
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
            {t.newDevelopment}
          </span>
          <span className="bg-gradient-to-r from-[#1DA599]/80 to-[#18877e]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sansationBold text-sm shadow-lg border border-white/10">
            {progress}% Complete
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
            <span className="text-[#1DA599]">ETB</span> {price}
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

        {/* Completion Date */}
        <div className="flex items-center gap-2 text-[#FF9A01] bg-[#FF9A01]/5 backdrop-blur-sm px-3 py-1.5 rounded-lg w-fit mb-4">
          <span className="text-sm font-sansationBold">
            {t.completion} {completionDate}
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {displayFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors"
            >
              {feature.icon}
              <span className="text-sm text-gray-600">{feature.label}</span>
            </div>
          ))}
          {hasMoreThanThree && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors">
              <span className="text-sm text-gray-600">
                +{remainingCount} {t.more}
              </span>
            </div>
          )}
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

export default PropertyCard;
