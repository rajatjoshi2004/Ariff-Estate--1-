"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { BiArea } from "react-icons/bi";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaPersonWalking } from "react-icons/fa6";
import { useLanguage } from "../../../context/LanguageContext";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured: boolean;
  agentName?: string;
  agentImage?: string;
  hasVirtualTour?: boolean;
  hasInPersonTour?: boolean;
}

interface ExclusiveCardProps {
  property: Property;
}

const translations = {
  en: {
    exclusive: "Exclusive",
    featured: "Featured",
    virtualTour: "Virtual Tour",
    virtualTourAvailable: "Virtual Tour Available",
    virtualTourUnavailable: "Virtual Tour Unavailable",
    inPersonTour: "In Person Tour",
    inPersonTourAvailable: "In Person Tour Available",
    inPersonTourUnavailable: "In Person Tour Unavailable",
    featuredAgent: "Featured Agent",
    contactSeller: "Contact Seller",
    bedrooms: "Beds",
    bathrooms: "Baths",
    sqm: "sq.m",
    viewDetails: "View Details",
    currency: "ETB",
    bed: "Bed",
    beds: "Beds",
    bath: "Bath",
    baths: "Baths",
  },
  am: {
    exclusive: "ልዩ",
    featured: "ተለይቷል",
    virtualTour: "ቨርቹዋል ጉብኝት",
    virtualTourAvailable: "ቨርቹዋል ጉብኝት ይገኛል",
    virtualTourUnavailable: "ቨርቹዋል ጉብኝት አይገኝም",
    inPersonTour: "በአካል ጉብኝት",
    inPersonTourAvailable: "በአካል ጉብኝት ይገኛል",
    inPersonTourUnavailable: "በአካል ጉብኝት አይገኝም",
    featuredAgent: "ተለይቶ የቀረበ ወኪል",
    contactSeller: "ሻጭን ያግኙ",
    bedrooms: "መኝታ ቤት",
    bathrooms: "ባኞዎች",
    sqm: "ካ.ሜ",
    viewDetails: "ዝርዝሮችን ይመልከቱ",
    currency: "ብር",
    bed: "መኝታ ቤት",
    beds: "መኝታ ቤቶች",
    bath: "ባኞ",
    baths: "ባኞዎች",
  },
};

const ExclusiveCard: React.FC<ExclusiveCardProps> = ({ property }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isLiked, setLiked] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === "en" ? "en-US" : "am-ET", {
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-[700px] flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          priority
          quality={100}
        />
        {/* Badges Container */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-gradient-to-r from-[#1DA599]/80 to-[#18877e]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sansationBold text-sm shadow-lg border border-white/10">
            {t.exclusive}
          </span>
          {property.featured && (
            <span className="bg-gradient-to-r from-[#FB3B3B]/80 to-[#d62e2e]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sansationBold text-sm shadow-lg flex items-center gap-1.5 border border-white/10">
              <MdVerified className="text-base" />
              {t.featured}
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={() => setLiked(!isLiked)}
          className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg shadow-lg transition-all duration-500 backdrop-blur-md z-10
            ${
              isLiked
                ? "bg-gradient-to-r from-[#FB3B3B]/90 to-[#d62e2e]/90"
                : "bg-white/60 hover:bg-white/80"
            }`}
        >
          {isLiked ? (
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
        <div className="mb-2">
          <span className="text-xl font-semibold text-gray-900">
            <span className="text-[#1DA599]">{t.currency}</span>{" "}
            {formatPrice(property.price)}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-2">
          <HiOutlineLocationMarker className="w-4 h-4 text-[#1DA599] flex-shrink-0" />
          <span className="text-sm text-gray-600 line-clamp-1">
            {property.location}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium mb-3 line-clamp-1 text-[#1DA599]">
          {property.title}
        </h3>

        {/* Specs */}
        <div className="border-t border-gray-100 pt-3 mb-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors">
              <IoBedOutline className="w-5 h-5 text-[#1DA599] mb-1.5" />
              <div className="text-center">
                <span className="block font-medium text-gray-700">
                  {property.bedrooms}
                </span>
                <span className="text-sm text-gray-500">
                  {property.bedrooms === 1 ? t.bed : t.beds}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors">
              <LuBath className="w-5 h-5 text-[#1DA599] mb-1.5" />
              <div className="text-center">
                <span className="block font-medium text-gray-700">
                  {property.bathrooms}
                </span>
                <span className="text-sm text-gray-500">
                  {property.bathrooms === 1 ? t.bath : t.baths}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-[#1DA599]/5 hover:bg-[#1DA599]/10 transition-colors">
              <BiArea className="w-5 h-5 text-[#1DA599] mb-1.5" />
              <div className="text-center">
                <span className="block font-medium text-gray-700">
                  {property.area}
                </span>
                <span className="text-sm text-gray-500">{t.sqm}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Options and Agent Info */}
        <div className="mt-auto space-y-3">
          {/* Tour Options */}
          <div className="flex gap-2">
            {property.hasVirtualTour && (
              <Link
                href={`/properties/${property.id}/virtual-tour`}
                className="flex-1 bg-[#1DA599]/5 hover:bg-[#1DA599]/10 text-[#1DA599] py-2 px-3 rounded-lg text-sm font-medium transition-colors text-center flex items-center justify-center gap-2"
              >
                <BsCameraVideoFill className="w-4 h-4" />
                <span>{t.virtualTour}</span>
              </Link>
            )}
            {property.hasInPersonTour && (
              <Link
                href={`/properties/${property.id}/schedule`}
                className="flex-1 bg-[#1DA599]/5 hover:bg-[#1DA599]/10 text-[#1DA599] py-2 px-3 rounded-lg text-sm font-medium transition-colors text-center flex items-center justify-center gap-2"
              >
                <FaPersonWalking className="w-4 h-4" />
                <span>{t.inPersonTour}</span>
              </Link>
            )}
          </div>

          {/* Featured Agent Section */}
          <div className="flex items-center justify-between p-3 bg-[#1DA599]/5 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1DA599]/20">
                <Image
                  src={property.agentImage || "/Images/agent/agent3.jpg"}
                  alt={property.agentName || "Agent"}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-800">
                  {property.agentName || "Jerry Smith"}
                </h4>
                <span className="text-xs text-[#1DA599]">
                  {t.featuredAgent}
                </span>
              </div>
            </div>
            <button className="bg-[#1DA599]/10 hover:bg-[#1DA599]/20 text-[#1DA599] px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
              {t.contactSeller}
            </button>
          </div>

          {/* View Details Button */}
          <Link
            href={`/properties/${property.id}`}
            className="flex items-center justify-between pt-3 border-t border-gray-100"
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

export default ExclusiveCard;
