"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const translations = {
  en: {
    title: "Real Estate Marketplace",
    subtitle: "Connect with trusted professionals and service providers",
    search: "Search services...",
    categories: {
      all: {
        name: "All Services",
        description: "Browse our complete marketplace of real estate services",
      },
      contractors: {
        name: "Contractors",
        description: "Find reliable construction and renovation contractors",
      },
      designers: {
        name: "Interior Designers",
        description:
          "Connect with professional interior designers and decorators",
      },
      inspectors: {
        name: "Property Inspectors",
        description: "Expert property inspection and evaluation services",
      },
      agents: {
        name: "Real Estate Agents",
        description: "Top-rated real estate agents and brokers",
      },
    },
    quickActions: "Popular Services",
  },
  am: {
    title: "የንብረት ገበያ ቦታ",
    subtitle: "ከታማኝ ባለሙያዎች እና አገልግሎት አቅራቢዎች ጋር ይገናኙ",
    search: "አገልግሎቶችን ይፈልጉ...",
    categories: {
      all: {
        name: "ሁሉም አገልግሎቶች",
        description: "የሁሉንም የንብረት አገልግሎቶች ያስሱ",
      },
      contractors: {
        name: "ሥራ ተቋራጮች",
        description: "አስተማማኝ የግንባታ እና የእድሳት ሥራ ተቋራጮችን ያግኙ",
      },
      designers: {
        name: "የውስጥ ንድፈ ሥዕል ባለሙያዎች",
        description: "ከሙያዊ የውስጥ ንድፈ ሥዕል እና ማስዋብ ባለሙያዎች ጋር ይገናኙ",
      },
      inspectors: {
        name: "የንብረት መርማሪዎች",
        description: "ባለሙያ የንብረት ምርመራ እና ግምገማ አገልግሎቶች",
      },
      agents: {
        name: "የንብረት ወኪሎች",
        description: "ከፍተኛ ደረጃ ያላቸው የንብረት ወኪሎች እና አስታራቂዎች",
      },
    },
    quickActions: "ታዋቂ አገልግሎቶች",
  },
};

const categoryQuickActions = {
  all: [
    {
      name: "Construction Services",
      href: "/marketplace/services/construction",
    },
    { name: "Interior Design", href: "/marketplace/services/interior-design" },
    { name: "Property Inspection", href: "/marketplace/services/inspection" },
    { name: "Real Estate Agency", href: "/marketplace/services/agency" },
    { name: "Renovation", href: "/marketplace/services/renovation" },
  ],
  contractors: [
    { name: "General Contractors", href: "/marketplace/contractors/general" },
    { name: "Renovation Experts", href: "/marketplace/contractors/renovation" },
    { name: "Custom Builders", href: "/marketplace/contractors/custom" },
    {
      name: "Commercial Contractors",
      href: "/marketplace/contractors/commercial",
    },
  ],
  designers: [
    { name: "Residential Design", href: "/marketplace/designers/residential" },
    { name: "Commercial Design", href: "/marketplace/designers/commercial" },
    { name: "3D Visualization", href: "/marketplace/designers/3d" },
    { name: "Color Consultation", href: "/marketplace/designers/color" },
  ],
  inspectors: [
    { name: "Home Inspection", href: "/marketplace/inspectors/home" },
    {
      name: "Commercial Inspection",
      href: "/marketplace/inspectors/commercial",
    },
    {
      name: "Pre-Purchase Inspection",
      href: "/marketplace/inspectors/pre-purchase",
    },
    {
      name: "Construction Inspection",
      href: "/marketplace/inspectors/construction",
    },
  ],
  agents: [
    { name: "Residential Agents", href: "/marketplace/agents/residential" },
    { name: "Commercial Agents", href: "/marketplace/agents/commercial" },
    { name: "Property Management", href: "/marketplace/agents/management" },
    { name: "Investment Advisors", href: "/marketplace/agents/investment" },
  ],
};

const MarketplaceHeader = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 pt-20">
      <div className="relative w-full min-h-[60vh] md:min-h-[50vh] flex items-center overflow-hidden rounded-xl">
        {/* Pattern Background - Top */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/Images/pattern.svg')] opacity-10" />
        </div>

        {/* Pattern Background - Left */}
        <div className="absolute left-0 inset-y-0 w-1/3 z-0">
          <div className="absolute inset-0 bg-[url('/Images/pattern.svg')] opacity-10 transform -rotate-45" />
        </div>

        {/* Pattern Background - Right */}
        <div className="absolute right-0 inset-y-0 w-1/3 z-0">
          <div className="absolute inset-0 bg-[url('/Images/pattern.svg')] opacity-10 transform rotate-45" />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/marketplace.jpg"
            alt="Marketplace Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full py-12 md:py-0">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
            {/* Navigation */}
            <nav className="flex flex-nowrap items-center gap-4 md:gap-6 mb-8 text-white/80 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {Object.entries(t.categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedCategory(key);
                    setSearchResults([]);
                    setIsSearching(false);
                  }}
                  className={`text-sm whitespace-nowrap font-medium hover:text-white transition-colors ${
                    selectedCategory === key
                      ? "text-white border-b-2 border-[#1DA599]"
                      : ""
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>

            {/* Header Content */}
            <div className="max-w-3xl mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sansationBold text-white mb-4 md:mb-6">
                {
                  t.categories[selectedCategory as keyof typeof t.categories]
                    .name
                }
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                {
                  t.categories[selectedCategory as keyof typeof t.categories]
                    .description
                }
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t.search}
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl bg-white shadow-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1DA599]"
                />
              </div>
            </div>

            {/* Quick Action Tags */}
            <div className="mt-8">
              <h3 className="text-white/80 text-sm mb-3">{t.quickActions}</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {categoryQuickActions[
                  selectedCategory as keyof typeof categoryQuickActions
                ].map((tag) => (
                  <Link
                    href={tag.href}
                    key={tag.name}
                    className="px-3 md:px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHeader;
