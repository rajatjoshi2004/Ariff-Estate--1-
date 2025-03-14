"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import CommercialCard from "./commercialcard";
import {
  ChevronDown,
  Search,
  ArrowUpRight,
  Building2,
  ArrowUpDown,
} from "lucide-react";
import Link from "next/link";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  area: number;
  image: string;
  propertyType: string;
  availabilityDate: string;
  capacity: number;
  purpose: string;
}

interface CommercialPropertiesProps {
  properties: Property[];
}

const translations = {
  en: {
    search: "Search commercial properties...",
    filters: "Filters",
    sort: "Sort by",
    viewAll: "View All Commercial Properties",
    loading: "Loading more properties...",
    sortOptions: {
      newest: "Newest First",
      priceHigh: "Price: High to Low",
      priceLow: "Price: Low to High",
      areaHigh: "Area: High to Low",
      areaLow: "Area: Low to High",
    },
    propertyTypes: {
      all: "All Properties",
      office: "Office Space",
      retail: "Retail Space",
      warehouse: "Warehouse",
      industrial: "Industrial",
      restaurant: "Restaurant",
      showroom: "Showroom",
    },
    noProperties: "No commercial properties found matching your criteria",
  },
  am: {
    search: "የንግድ ንብረቶችን ይፈልጉ...",
    filters: "ማጣሪያዎች",
    sort: "አስተካክል",
    viewAll: "ሁሉንም የንግድ ንብረቶችን ይመልከቱ",
    loading: "ተጨማሪ ንብረቶችን በመጫን ላይ...",
    sortOptions: {
      newest: "አዲስ መጀመሪያ",
      priceHigh: "ዋጋ፡ ከፍተኛ ወደ ዝቅተኛ",
      priceLow: "ዋጋ፡ ዝቅተኛ ወደ ከፍተኛ",
      areaHigh: "ስፋት፡ ከፍተኛ ወደ ዝቅተኛ",
      areaLow: "ስፋት፡ ዝቅተኛ ወደ ከፍተኛ",
    },
    propertyTypes: {
      all: "ሁሉም ንብረቶች",
      office: "የቢሮ ቦታ",
      retail: "የችርቻሮ ቦታ",
      warehouse: "መጋዘን",
      industrial: "ኢንዱስትሪያል",
      restaurant: "ሬስቶራንት",
      showroom: "የማሳያ ቦታ",
    },
    noProperties: "ከእርስዎ መስፈርት ጋር የሚዛመድ ምንም የንግድ ንብረት አልተገኘም",
  },
};

// Loading Dots Animation Component
const LoadingDots = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-white rounded-full animate-[wave_1s_ease-in-out_infinite]" />
      <div className="w-2 h-2 bg-white rounded-full animate-[wave_1s_ease-in-out_infinite] delay-[0.2s]" />
      <div className="w-2 h-2 bg-white rounded-full animate-[wave_1s_ease-in-out_infinite] delay-[0.4s]" />
    </div>
  );
};

const CommercialProperties: React.FC<CommercialPropertiesProps> = ({
  properties,
}) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Filter and sort properties
  const filteredProperties = properties
    .filter((property) => {
      const matchesSearch = property.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesType =
        selectedType === "all" ||
        property.propertyType.toLowerCase() === selectedType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "priceHigh":
          return b.price - a.price;
        case "priceLow":
          return a.price - b.price;
        case "areaHigh":
          return b.area - a.area;
        case "areaLow":
          return a.area - b.area;
        default:
          return 0;
      }
    });

  // Get the properties to display
  const displayedProperties = filteredProperties.slice(0, 6);
  const hasMoreProperties = filteredProperties.length > 6;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12">
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#1DA599] focus:ring-1 focus:ring-[#1DA599] outline-none transition-all font-Sansation"
            />
          </div>
        </div>

        {/* Property Type Filter */}
        <div className="relative min-w-[200px]">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full appearance-none pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-[#1DA599] focus:ring-1 focus:ring-[#1DA599] outline-none transition-all bg-white font-Sansation"
          >
            {Object.entries(t.propertyTypes).map(([key, value]) => (
              <option key={key} value={key} className="flex items-center gap-2">
                {value}
              </option>
            ))}
          </select>
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1DA599]" />
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Sort */}
        <div className="relative min-w-[200px]">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full appearance-none pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-[#1DA599] focus:ring-1 focus:ring-[#1DA599] outline-none transition-all bg-white font-Sansation"
          >
            {Object.entries(t.sortOptions).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
          <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1DA599]" />
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Properties Grid */}
      {displayedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProperties.map((property) => (
            <CommercialCard key={property.id} {...property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 font-Sansation">{t.noProperties}</p>
        </div>
      )}

      {/* View All Properties Button */}
      {hasMoreProperties && (
        <div className="flex justify-center mt-12">
          <Link
            href="/properties/commercial"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-[#1DA599] text-[#1DA599] hover:bg-[#1DA599] hover:text-white transition-all duration-300 group"
          >
            <span>{t.viewAll}</span>
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      )}

      <style jsx global>{`
        @keyframes wave {
          0%,
          100% {
            transform: scale(1.5);
            opacity: 1;
          }
          50% {
            transform: scale(0.7);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default CommercialProperties;
