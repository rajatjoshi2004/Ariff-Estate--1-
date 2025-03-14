"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { useLanguage } from "../../../context/LanguageContext";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsCalendarCheck } from "react-icons/bs";
import { MdOutlineConstruction } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import house1 from "../../../public/Images/3.png";
import house2 from "../../../public/Images/15.png";
import house3 from "../../../public/Images/16.png";
import house4 from "../../../public/Images/WhyChoose.png";
import { IoLeafOutline } from "react-icons/io5";
import {
  MdOutlineSmartphone,
  MdOutlinePool,
  MdOutlineSecurity,
} from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { TbGardenCart } from "react-icons/tb";
import PropertyCard from "./PropertyCard";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const translations = {
  en: {
    badge: "New Developments",
    title: "Explore New",
    titleHighlight: "Development Projects",
    description:
      "Discover upcoming residential projects in prime locations. Invest early in Ethiopia's most promising new developments and secure your future home at pre-construction prices.",
    searchPlaceholder: "Search developments...",
    location: "Select Location",
    priceRange: "Price Range",
    completionDate: "Completion Date",
    features: "Features",
    viewAll: "View All New Developments",
    search: "Search developments",
    selectLocation: "Select location",
    price: "Price range",
    completion: "Completion date",
    clearAll: "Clear all",
    apply: "Apply filters",
    noResults: "No properties found matching your criteria",
    locations: ["Addis Ababa", "Bahir Dar", "Hawassa", "Adama"],
    priceRanges: ["1M - 2M", "2M - 5M", "5M - 10M", "10M+"],
    dates: ["2024", "2025", "2026", "2027"],
  },
  am: {
    badge: "አዲስ ግንባታዎች",
    title: "አዲስ የሚገነቡ",
    titleHighlight: "ፕሮጀክቶችን ያስሱ",
    description:
      "በዋና ዋና አካባቢዎች የሚገኙ አዳዲስ የመኖሪያ ፕሮጀክቶችን ይመልከቱ። በኢትዮጵያ ተስፋ ያላቸው አዳዲስ ግንባታዎች ላይ አስቀድመው በመዋዕለ ንዋይ ያፍሱ እና የወደፊት ቤትዎን በቅድመ ግንባታ ዋጋ ያረጋግጡ።",
    searchPlaceholder: "ግንባታዎችን ይፈልጉ...",
    location: "አካባቢ ይምረጡ",
    priceRange: "የዋጋ ክልል",
    completionDate: "የማጠናቀቂያ ቀን",
    features: "ባህሪያት",
    viewAll: "ሁሉንም አዲስ ግንባታዎች ይመልከቱ",
    search: "ግንባታዎችን ይፈልጉ",
    selectLocation: "አካባቢ ይምረጡ",
    price: "የዋጋ ክልል",
    completion: "የማጠናቀቂያ ቀን",
    clearAll: "ሁሉንም አጽዳ",
    apply: "ማጣሪያዎችን ተግብር",
    noResults: "ከእርስዎ መስፈርቶች ጋር የሚዛመዱ ንብረቶች አልተገኙም",
    locations: ["አዲስ አበባ", "ባህር ዳር", "ሀዋሳ", "አዳማ"],
    priceRanges: ["1ሚ - 2ሚ", "2ሚ - 5ሚ", "5ሚ - 10ሚ", "10ሚ+"],
    dates: ["2024", "2025", "2026", "2027"],
  },
};

const properties = [
  {
    id: "1",
    img: house1.src,
    title: "Skyline Residences",
    location: "Bole, Addis Ababa",
    price: "5,000,000",
    progress: 50,
    completionDate: "2017 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <MdOutlinePool className="text-[#1DA599] text-lg" />,
        label: "Swimming Pool",
      },
      { icon: <GiGymBag className="text-[#1DA599] text-lg" />, label: "Gym" },
    ],
  },
  {
    id: "2",
    img: house2.src,
    title: "Summit Heights",
    location: "CMC, Addis Ababa",
    price: "6,500,000",
    progress: 85,
    completionDate: "2017 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <TbGardenCart className="text-[#1DA599] text-lg" />,
        label: "Garden",
      },
      {
        icon: <MdOutlineSecurity className="text-[#1DA599] text-lg" />,
        label: "24/7 Security",
      },
    ],
  },
  {
    id: "3",
    img: house3.src,
    title: "Green Valley Apartments",
    location: "Sarbet, Addis Ababa",
    price: "4,800,000",
    progress: 60,
    completionDate: "2018 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
    ],
  },
  {
    id: "4",
    img: house4.src,
    title: "Metro Park Residences",
    location: "Kazanchis, Addis Ababa",
    price: "7,200,000",
    progress: 35,
    completionDate: "2018 E.C.",
    features: [
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <MdOutlinePool className="text-[#1DA599] text-lg" />,
        label: "Swimming Pool",
      },
      { icon: <GiGymBag className="text-[#1DA599] text-lg" />, label: "Gym" },
    ],
  },
  {
    id: "5",
    img: house1.src,
    title: "Harmony Heights",
    location: "Bole, Addis Ababa",
    price: "8,500,000",
    progress: 40,
    completionDate: "2018 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <TbGardenCart className="text-[#1DA599] text-lg" />,
        label: "Garden",
      },
    ],
  },
  {
    id: "6",
    img: house2.src,
    title: "Sunset View Apartments",
    location: "CMC, Addis Ababa",
    price: "5,800,000",
    progress: 75,
    completionDate: "2017 E.C.",
    features: [
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <MdOutlineSecurity className="text-[#1DA599] text-lg" />,
        label: "24/7 Security",
      },
      { icon: <GiGymBag className="text-[#1DA599] text-lg" />, label: "Gym" },
    ],
  },
  {
    id: "7",
    img: house3.src,
    title: "Royal Gardens",
    location: "Sarbet, Addis Ababa",
    price: "9,200,000",
    progress: 30,
    completionDate: "2018 E.C.",
    features: [
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <TbGardenCart className="text-[#1DA599] text-lg" />,
        label: "Garden",
      },
      {
        icon: <MdOutlinePool className="text-[#1DA599] text-lg" />,
        label: "Swimming Pool",
      },
    ],
  },
  {
    id: "8",
    img: house4.src,
    title: "Urban Oasis",
    location: "Kazanchis, Addis Ababa",
    price: "6,900,000",
    progress: 55,
    completionDate: "2017 E.C.",
    features: [
      {
        icon: <MdOutlineSmartphone className="text-[#1DA599] text-lg" />,
        label: "Smart Home",
      },
      {
        icon: <IoLeafOutline className="text-[#1DA599] text-lg" />,
        label: "Eco Friendly",
      },
      {
        icon: <MdOutlineSecurity className="text-[#1DA599] text-lg" />,
        label: "24/7 Security",
      },
      { icon: <GiGymBag className="text-[#1DA599] text-lg" />, label: "Gym" },
    ],
  },
];

const features = [
  { id: "eco", icon: <IoLeafOutline />, label: "Eco Friendly" },
  { id: "smart", icon: <MdOutlineSmartphone />, label: "Smart Home" },
  { id: "pool", icon: <MdOutlinePool />, label: "Swimming Pool" },
  { id: "gym", icon: <GiGymBag />, label: "Gym" },
  { id: "garden", icon: <TbGardenCart />, label: "Garden" },
  { id: "security", icon: <MdOutlineSecurity />, label: "24/7 Security" },
];

const PropertySale = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    priceRange: "",
    completionDate: "",
    selectedFeatures: [] as string[],
  });

  const handleFilterChange = (key: string, value: string | string[]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setActiveDropdown(null);
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      location: "",
      priceRange: "",
      completionDate: "",
      selectedFeatures: [],
    });
  };

  const toggleFeature = (featureId: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedFeatures: prev.selectedFeatures.includes(featureId)
        ? prev.selectedFeatures.filter((id) => id !== featureId)
        : [...prev.selectedFeatures, featureId],
    }));
  };

  return (
    <div className="w-full mt-32 md:mt-40 pb-8">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          {/* Left side: heading part */}
          <div className="w-full md:w-5/12 md:sticky md:top-32">
            <div className="space-y-6">
              <div className="inline-block bg-[#1DA599]/10 px-6 py-2 rounded-full">
                <span className="font-sansationRegular text-[#1DA599] text-sm">
                  {t.badge}
                </span>
              </div>
              <h3 className="text-[2rem] md:text-[2.4rem] font-sansationBold leading-tight">
                {t.title}{" "}
                <span className="text-[#1DA599]">{t.titleHighlight}</span>
              </h3>
              <p className="font-sansationRegular text-[#454545] text-sm md:text-base leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>

          {/* Right side: filter section */}
          <div className="w-full md:w-6/12">
            <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
              {/* Search Bar */}
              <div className="relative mb-4">
                <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1DA599] text-xl" />
                <input
                  type="text"
                  placeholder={t.search}
                  value={filters.search}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                  className="w-full pl-12 pr-4 h-12 rounded-xl border-2 border-[#1DA599]/10 focus:border-[#1DA599] outline-none transition-all duration-300"
                />
              </div>

              {/* Filter Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "location" ? null : "location"
                      )
                    }
                    className="w-full flex items-center justify-between px-4 h-12 rounded-xl border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <HiOutlineLocationMarker className="text-[#1DA599] text-lg" />
                      <span className="text-gray-600 truncate">
                        {filters.location || t.location}
                      </span>
                    </div>
                    <IoIosArrowDown
                      className={`text-[#1DA599] transition-transform duration-300 ${
                        activeDropdown === "location" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "location" && (
                    <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-md border border-[#1DA599]/10">
                      {t.locations.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => handleFilterChange("location", loc)}
                          className="w-full px-4 py-3 text-left hover:bg-[#1DA599]/5 text-gray-600"
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Range */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "price" ? null : "price"
                      )
                    }
                    className="w-full flex items-center justify-between px-4 h-12 rounded-xl border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#1DA599] font-bold">ETB</span>
                      <span className="text-gray-600 truncate">
                        {filters.priceRange || t.price}
                      </span>
                    </div>
                    <IoIosArrowDown
                      className={`text-[#1DA599] transition-transform duration-300 ${
                        activeDropdown === "price" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "price" && (
                    <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-md border border-[#1DA599]/10">
                      {t.priceRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() =>
                            handleFilterChange("priceRange", range)
                          }
                          className="w-full px-4 py-3 text-left hover:bg-[#1DA599]/5 text-gray-600"
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Completion Date */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "completion" ? null : "completion"
                      )
                    }
                    className="w-full flex items-center justify-between px-4 h-12 rounded-xl border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <BsCalendarCheck className="text-[#1DA599] text-lg" />
                      <span className="text-gray-600 truncate">
                        {filters.completionDate || t.completion}
                      </span>
                    </div>
                    <IoIosArrowDown
                      className={`text-[#1DA599] transition-transform duration-300 ${
                        activeDropdown === "completion" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "completion" && (
                    <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-md border border-[#1DA599]/10">
                      {t.dates.map((date) => (
                        <button
                          key={date}
                          onClick={() =>
                            handleFilterChange("completionDate", date)
                          }
                          className="w-full px-4 py-3 text-left hover:bg-[#1DA599]/5 text-gray-600"
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "features" ? null : "features"
                      )
                    }
                    className="w-full flex items-center justify-between px-4 h-12 rounded-xl border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <MdOutlineConstruction className="text-[#1DA599] text-lg" />
                      <span className="text-gray-600 truncate">
                        {t.features}
                      </span>
                    </div>
                    <IoIosArrowDown
                      className={`text-[#1DA599] transition-transform duration-300 ${
                        activeDropdown === "features" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "features" && (
                    <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-md border border-[#1DA599]/10 p-2">
                      <div className="grid grid-cols-2 gap-2">
                        {features.map((feature) => (
                          <button
                            key={feature.id}
                            onClick={() => toggleFeature(feature.id)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                              filters.selectedFeatures.includes(feature.id)
                                ? "bg-[#1DA599] text-white"
                                : "hover:bg-[#1DA599]/5 text-gray-600"
                            }`}
                          >
                            <span className="text-lg">{feature.icon}</span>
                            <span className="truncate">{feature.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <Button
                  onClick={clearFilters}
                  className="flex-1 h-12 text-[#1DA599] bg-[#1DA599]/5 hover:bg-[#1DA599]/10 rounded-xl"
                >
                  {t.clearAll}
                </Button>
                <Button className="flex-1 h-12 bg-[#1DA599] hover:bg-[#18877e] text-white rounded-xl">
                  {t.apply}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property cards section with gradient background */}
      <div className="mt-16 bg-gradient-to-b from-transparent via-[#1DA599]/5 to-transparent py-12">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* View All Properties Button */}
          <div className="flex justify-center mt-16">
            <Link
              href="/new-development"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-[#1DA599] text-[#1DA599] hover:bg-[#1DA599] hover:text-white transition-all duration-300 group"
            >
              <span>{t.viewAll}</span>
              <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySale;
