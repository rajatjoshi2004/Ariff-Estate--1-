"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const translations = {
  en: {
    title: "Resources Center",
    subtitle:
      "Discover guides, tools, and insights for your real estate journey",
    search: "Search resources...",
    categories: {
      all: {
        name: "All Resources",
        description: "Browse our complete collection of real estate resources",
      },
      guides: {
        name: "Buying & Selling Guides",
        description: "Expert guides to help you navigate property transactions",
      },
      tools: {
        name: "Tools & Calculators",
        description: "Essential tools to make informed real estate decisions",
      },
      market: {
        name: "Market Analysis",
        description:
          "Latest insights and trends in the Ethiopian real estate market",
      },
      legal: {
        name: "Legal Resources",
        description: "Understanding property laws and regulations in Ethiopia",
      },
    },
    popular: "Popular Resources",
    featured: "Featured Articles",
    quickActions: "Quick Actions",
  },
  am: {
    title: "የመረጃ ማዕከል",
    subtitle: "ለእርስዎ የንብረት ጉዞ መመሪያዎችን፣ መሳሪያዎችን እና ግንዛቤዎችን ያግኙ",
    search: "መረጃዎችን ይፈልጉ...",
    categories: {
      all: {
        name: "ሁሉም መረጃዎች",
        description: "የሁሉንም የንብረት መረጃዎች ያስሱ",
      },
      guides: {
        name: "የግዢ እና ሽያጭ መመሪያዎች",
        description: "የንብረት ግብይትን እንዲረዱ የሚያግዙ የባለሙያ መመሪያዎች",
      },
      tools: {
        name: "መሳሪያዎች እና ካልኩሌተሮች",
        description: "የንብረት ውሳኔዎችን ለመወሰን አስፈላጊ መሳሪያዎች",
      },
      market: {
        name: "የገበያ ትንተና",
        description: "በኢትዮጵያ የንብረት ገበያ ውስጥ የቅርብ ጊዜ እይታዎች እና አዝማሚያዎች",
      },
      legal: {
        name: "የህግ መረጃዎች",
        description: "በኢትዮጵያ የንብረት ህጎችን እና ደንቦችን መረዳት",
      },
    },
    popular: "ታዋቂ መረጃዎች",
    featured: "የተለዩ መጣጥፎች",
    quickActions: "ፈጣን እርምጃዎች",
  },
};

const categoryQuickActions = {
  all: [
    { name: "Property Investment", href: "/resources/tag/property-investment" },
    { name: "Market Analysis", href: "/resources/tag/market-analysis" },
    { name: "Legal Guide", href: "/resources/tag/legal-guide" },
    { name: "Home Buying", href: "/resources/tag/home-buying" },
    { name: "Mortgage", href: "/resources/tag/mortgage" },
  ],
  guides: [
    { name: "First Time Buyers", href: "/resources/guides/first-time-buyers" },
    {
      name: "Property Valuation",
      href: "/resources/guides/property-valuation",
    },
    { name: "Negotiation Tips", href: "/resources/guides/negotiation-tips" },
    { name: "Selling Process", href: "/resources/guides/selling-process" },
  ],
  tools: [
    {
      name: "Mortgage Calculator",
      href: "/resources/tools/mortgage-calculator",
    },
    { name: "Property ROI", href: "/resources/tools/property-roi" },
    { name: "Cost Estimator", href: "/resources/tools/cost-estimator" },
    { name: "Payment Planner", href: "/resources/tools/payment-planner" },
  ],
  market: [
    { name: "Market Trends", href: "/resources/market/trends" },
    { name: "Price Analysis", href: "/resources/market/price-analysis" },
    { name: "Growth Areas", href: "/resources/market/growth-areas" },
    {
      name: "Investment Hotspots",
      href: "/resources/market/investment-hotspots",
    },
  ],
  legal: [
    { name: "Property Laws", href: "/resources/legal/property-laws" },
    { name: "Documentation", href: "/resources/legal/documentation" },
    { name: "Buyer Rights", href: "/resources/legal/buyer-rights" },
    { name: "Legal Process", href: "/resources/legal/process" },
  ],
};

const categorySearchResults = {
  all: [
    "Buying Your First Home in Ethiopia",
    "Property Investment Guide 2024",
    "Understanding Mortgage Rates",
    "Legal Requirements for Property Purchase",
    "Real Estate Market Trends",
    "Property Valuation Guide",
    "Rental Property Management Tips",
    "Commercial Real Estate Investment",
  ],
  guides: [
    "Complete Home Buying Guide 2024",
    "How to Sell Your Property Fast",
    "Property Valuation Methods",
    "Negotiating Property Prices",
    "Finding the Right Location",
  ],
  tools: [
    "Using the Mortgage Calculator",
    "Property Investment ROI Calculator",
    "Cost of Ownership Calculator",
    "Property Value Estimator",
    "Monthly Payment Calculator",
  ],
  market: [
    "Ethiopia Real Estate Market Report 2024",
    "Emerging Property Hotspots",
    "Property Price Trends Analysis",
    "Investment Opportunities in Addis Ababa",
    "Market Growth Predictions",
  ],
  legal: [
    "Property Laws in Ethiopia",
    "Legal Documentation Guide",
    "Property Rights and Regulations",
    "Contract Requirements",
    "Legal Process for Property Purchase",
  ],
};

const ResourcesHeader = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    if (query.length > 0) {
      setIsSearching(true);
      const categoryResults =
        categorySearchResults[
          selectedCategory as keyof typeof categorySearchResults
        ];
      const filtered = categoryResults.filter((resource) =>
        resource.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

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
            src="/Images/hero.jpg"
            alt="Resources Hero"
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
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl bg-white shadow-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1DA599]"
                />
              </div>

              {/* Search Results Dropdown */}
              {isSearching && searchResults.length > 0 && (
                <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 max-h-[60vh] overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <Link
                      href={`/resources/${selectedCategory}/${result
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      key={index}
                      className="block px-4 py-3 hover:bg-gray-50 text-gray-900 transition-colors"
                    >
                      {result}
                    </Link>
                  ))}
                </div>
              )}
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

export default ResourcesHeader;
