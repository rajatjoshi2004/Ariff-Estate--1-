"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const translations = {
  en: {
    featuredTitle: "Featured Service Providers",
    topRated: "Top Rated",
    verified: "Verified",
    viewProfile: "View Profile",
    contact: "Contact",
    reviews: "reviews",
  },
  am: {
    featuredTitle: "የተለዩ አገልግሎት አቅራቢዎች",
    topRated: "ከፍተኛ ደረጃ",
    verified: "የተረጋገጠ",
    viewProfile: "መገለጫ ይመልከቱ",
    contact: "አግኙ",
    reviews: "ግምገማዎች",
  },
};

const allProviders = [
  {
    id: 1,
    name: "Addis Construction Co.",
    image: "/Images/3.png",
    category: "Contractors",
    rating: 4.8,
    reviews: 156,
    location: "Addis Ababa",
    description:
      "Expert construction and renovation services with over 15 years of experience",
    services: ["General Construction", "Renovation", "Project Management"],
    verified: true,
    topRated: true,
  },
  {
    id: 2,
    name: "Modern Interior Solutions",
    image: "/Images/4.png",
    category: "Interior Designers",
    rating: 4.9,
    reviews: 98,
    location: "Addis Ababa",
    description:
      "Contemporary interior design for residential and commercial spaces",
    services: ["Interior Design", "Space Planning", "Decoration"],
    verified: true,
    topRated: true,
  },
  {
    id: 3,
    name: "Ethiopian Property Inspectors",
    image: "/Images/11.png",
    category: "Property Inspectors",
    rating: 4.7,
    reviews: 124,
    location: "Addis Ababa",
    description: "Thorough property inspection services for buyers and sellers",
    services: [
      "Home Inspection",
      "Commercial Inspection",
      "Pre-Purchase Inspection",
    ],
    verified: true,
    topRated: false,
  },
  {
    id: 4,
    name: "Prime Real Estate Agency",
    image: "/Images/12.png",
    category: "Real Estate Agents",
    rating: 4.9,
    reviews: 210,
    location: "Addis Ababa",
    description:
      "Professional real estate services for buying, selling, and renting",
    services: ["Property Sales", "Property Management", "Investment Advisory"],
    verified: true,
    topRated: true,
  },
  {
    id: 5,
    name: "Elite Home Builders",
    image: "/Images/13.png",
    category: "Contractors",
    rating: 4.7,
    reviews: 89,
    location: "Addis Ababa",
    description: "Luxury home construction and custom building solutions",
    services: ["Custom Homes", "Luxury Construction", "Design-Build"],
    verified: true,
    topRated: false,
  },
  {
    id: 6,
    name: "Urban Design Studio",
    image: "/Images/14.png",
    category: "Interior Designers",
    rating: 4.9,
    reviews: 167,
    location: "Addis Ababa",
    description: "Modern and sustainable interior design solutions",
    services: ["Sustainable Design", "Commercial Interiors", "Space Planning"],
    verified: true,
    topRated: true,
  },
  {
    id: 7,
    name: "Commercial Property Experts",
    image: "/Images/15.png",
    category: "Property Inspectors",
    rating: 4.8,
    reviews: 143,
    location: "Addis Ababa",
    description:
      "Specialized in commercial and industrial property inspections",
    services: [
      "Commercial Inspection",
      "Industrial Inspection",
      "Safety Compliance",
    ],
    verified: true,
    topRated: true,
  },
  {
    id: 8,
    name: "Premium Property Consultants",
    image: "/Images/3.png",
    category: "Real Estate Agents",
    rating: 4.6,
    reviews: 178,
    location: "Addis Ababa",
    description: "Full-service real estate consultancy for premium properties",
    services: ["Luxury Sales", "Investment Advisory", "Property Marketing"],
    verified: true,
    topRated: false,
  },
];

// Loading Dots Animation Component
const LoadingDots = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-[#1DA599] rounded-full animate-[wave_1s_ease-in-out_infinite]" />
      <div className="w-2 h-2 bg-[#1DA599] rounded-full animate-[wave_1s_ease-in-out_infinite] delay-200" />
      <div className="w-2 h-2 bg-[#1DA599] rounded-full animate-[wave_1s_ease-in-out_infinite] delay-300" />
    </div>
  );
};

const MarketplaceGrid = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [displayCount, setDisplayCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const handleViewMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + 4, allProviders.length));
      setIsLoading(false);
    }, 1000);
  };

  const displayedProviders = allProviders.slice(0, displayCount);
  const hasMore = displayCount < allProviders.length;

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-16">
      {/* Featured Service Providers */}
      <section>
        <h2 className="text-2xl font-sansationBold text-gray-900 mb-8">
          {t.featuredTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-[500px] flex flex-col"
            >
              {/* Provider Image */}
              <div className="relative h-48 flex-shrink-0">
                <Image
                  src={provider.image}
                  alt={provider.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {provider.verified && (
                    <span className="px-3 py-1 bg-[#1DA599]/80 backdrop-blur-sm rounded-lg text-sm font-medium text-white shadow-sm">
                      {t.verified}
                    </span>
                  )}
                  {provider.topRated && (
                    <span className="px-3 py-1 bg-[#FB3B3B]/80 backdrop-blur-sm rounded-lg text-sm font-medium text-white shadow-sm">
                      {t.topRated}
                    </span>
                  )}
                </div>
              </div>

              {/* Provider Info */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
                    {provider.name}
                  </h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">
                      {provider.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="line-clamp-1">{provider.location}</span>
                  <span className="mx-2 flex-shrink-0">•</span>
                  <span className="flex-shrink-0">
                    {provider.reviews} {t.reviews}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {provider.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {provider.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 rounded-lg text-xs text-gray-600"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Fixed at Bottom */}
                <div className="flex gap-2 mt-auto">
                  <Link
                    href={`/marketplace/providers/${provider.id}`}
                    className="flex-1 bg-[#1DA599] hover:bg-[#18877e] text-white text-sm font-medium py-2 rounded-lg text-center transition-colors"
                  >
                    {t.viewProfile}
                  </Link>
                  <Link
                    href={`/marketplace/providers/${provider.id}/contact`}
                    className="flex-1 bg-[#1DA599]/10 hover:bg-[#1DA599]/20 text-[#1DA599] text-sm font-medium py-2 rounded-lg text-center transition-colors"
                  >
                    {t.contact}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleViewMore}
              disabled={isLoading}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-gray-50 text-[#1DA599] rounded-xl border border-[#1DA599] transition-colors disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"
            >
              {isLoading ? (
                <LoadingDots />
              ) : (
                <>
                  <span className="text-sm font-medium">View More</span>
                  <ChevronDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        <style jsx global>{`
          @keyframes wave {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(0.7);
              opacity: 0.5;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default MarketplaceGrid;
