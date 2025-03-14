"use client";

import React from "react";
import ExclusiveCard from "./exclusivecard";
import { useLanguage } from "../../../context/LanguageContext";
import CardHeader from "./cardheader";
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
  agentName: string;
  agentImage: string;
  hasVirtualTour: boolean;
  hasInPersonTour: boolean;
}

const translations = {
  en: {
    viewAll: "View All Exclusive Properties",
  },
  am: {
    viewAll: "ሁሉንም ልዩ ንብረቶች ይመልከቱ",
  },
};

const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Villa in Bole",
    location: "Bole, Addis Ababa",
    price: 15000000,
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    image: "/Images/11.png",
    featured: true,
    agentName: "Jerry Smith",
    agentImage: "/Images/agent/agent3.jpg",
    hasVirtualTour: true,
    hasInPersonTour: true,
  },
  {
    id: "2",
    title: "Modern Apartment in CMC",
    location: "CMC, Addis Ababa",
    price: 8500000,
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: "/Images/12.png",
    featured: false,
    agentName: "Jerry Smith",
    agentImage: "/Images/agent/agent3.jpg",
    hasVirtualTour: true,
    hasInPersonTour: false,
  },
  {
    id: "3",
    title: "Penthouse with City View",
    location: "Sarbet, Addis Ababa",
    price: 12000000,
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    image: "/Images/13.png",
    featured: true,
    agentName: "Jerry Smith",
    agentImage: "/Images/agent/agent3.jpg",
    hasVirtualTour: true,
    hasInPersonTour: true,
  },
  {
    id: "4",
    title: "Family Home in Old Airport",
    location: "Old Airport, Addis Ababa",
    price: 9500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    image: "/Images/14.png",
    featured: false,
    agentName: "Jerry Smith",
    agentImage: "/Images/agent/agent3.jpg",
    hasVirtualTour: false,
    hasInPersonTour: true,
  },
  {
    id: "5",
    title: "Executive Suite in Kazanchis",
    location: "Kazanchis, Addis Ababa",
    price: 11000000,
    bedrooms: 3,
    bathrooms: 2,
    area: 200,
    image: "/Images/15.png",
    featured: true,
    agentName: "Jerry Smith",
    agentImage: "/Images/agent/agent3.jpg",
    hasVirtualTour: true,
    hasInPersonTour: false,
  },
  {
    id: "6",
    title: "Garden Villa in Summit",
    location: "Summit, Addis Ababa",
    price: 13500000,
    bedrooms: 5,
    bathrooms: 4,
    area: 400,
    image: "/Images/16.png",
    featured: false,
    agentName: "Jerry Smith",
    agentImage: "/Images/agent/agent3.jpg",
    hasVirtualTour: false,
    hasInPersonTour: true,
  },
];

const ExclusiveCards = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20">
      <div className="container max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header with Filters */}
        <CardHeader language={language} />

        {/* Cards Grid */}
        <div className="mt-16 bg-gradient-to-b from-transparent via-[#1DA599]/5 to-transparent py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {sampleProperties.map((property) => (
              <ExclusiveCard key={property.id} property={property} />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-16 text-center">
            <div className="flex justify-center">
              <Link
                href="/properties/exclusive"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-[#1DA599] text-[#1DA599] hover:bg-[#1DA599] hover:text-white transition-all duration-300 group"
              >
                <span>{t.viewAll}</span>
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveCards;
