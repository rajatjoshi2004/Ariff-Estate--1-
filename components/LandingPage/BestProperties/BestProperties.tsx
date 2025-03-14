"use client";

import React from "react";
import BestPropertyCard from "./BestPropertyCard";
import house1 from "../../../public/Images/3.png";
import house from "../../../public/Images/WhyChoose.png";
import { Button } from "../../ui/button";
import house5 from "../../../public/Images/15.png";
import house6 from "../../../public/Images/16.png";
import { MdApartment, MdVerified } from "react-icons/md";
import { FaHome, FaUsers } from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageContext";
// import house7 from "../../../public/Images/17.png";

const translations = {
  en: {
    badge: "Premium Rentals",
    title: {
      start: "Explore the Best",
      highlight: "Rental Properties",
      end: "in Your Area",
    },
    description:
      "Browse through our curated collection of rental properties, from cozy apartments to spacious family homes. Find your next home in the best locations across Ethiopia.",
    stats: {
      properties: {
        number: "500+",
        text: "Available Properties",
      },
      verified: {
        number: "100%",
        text: "Verified Listings",
      },
      clients: {
        number: "10K+",
        text: "Happy Clients",
      },
    },
    viewAll: "View All Rental Properties",
    properties: [
      {
        title: "Modern Apartment",
        location: "Bole, Addis Ababa",
      },
      {
        title: "Luxury Apartment",
        location: "Sarbet, Addis Ababa",
      },
      {
        title: "Family Apartment",
        location: "CMC, Addis Ababa",
      },
      {
        title: "Studio Apartment",
        location: "Kazanchis, Addis Ababa",
      },
    ],
  },
  am: {
    badge: "ፕሪሚየም ሪንታሎች",
    title: {
      start: "የአካባቢዎን",
      highlight: "ምርጥ የኪራይ ንብረቶች",
      end: "ያስሱ",
    },
    description:
      "ከአነስተኛ አፓርታማዎች እስከ ሰፊ የቤተሰብ ቤቶች ድረስ፣ የተሰናዱ የኪራይ ንብረቶችን ይመልከቱ። በኢትዮጵያ ውስጥ ባሉ ምርጥ ስፍራዎች የሚቀጥለውን ቤትዎን ያግኙ።",
    stats: {
      properties: {
        number: "500+",
        text: "ዝግጁ ንብረቶች",
      },
      verified: {
        number: "100%",
        text: "የተረጋገጡ ዝርዝሮች",
      },
      clients: {
        number: "10ሺ+",
        text: "ደስተኛ ደንበኞች",
      },
    },
    viewAll: "ሁሉንም የኪራይ ንብረቶች ይመልከቱ",
    properties: [
      {
        title: "ዘመናዊ አፓርታማ",
        location: "ቦሌ፣ አዲስ አበባ",
      },
      {
        title: "ፍጹም አፓርታማ",
        location: "ሰርበት፣ አዲስ አበባ",
      },
      {
        title: "የቤተሰብ አፓርታማ",
        location: "ሲኤምሲ፣ አዲስ አበባ",
      },
      {
        title: "ስቱዲዮ አፓርታማ",
        location: "ካዛንችስ፣ አዲስ አበባ",
      },
    ],
  },
};

const cardsData = [
  {
    id: 1,
    img: house,
    title: "Modern Apartment",
    location: "Bole, Addis Ababa",
    price: "112,000",
    new: true,
    rent: true,
  },
  {
    id: 2,
    img: house5,
    title: "Luxury Apartment",
    location: "Sarbet, Addis Ababa",
    price: "112,000",
    new: true,
    rent: false,
  },
  {
    id: 3,
    img: house6,
    title: "Family Apartment",
    location: "CMC, Addis Ababa",
    price: "112,000",
    new: false,
    rent: true,
  },
  {
    id: 4,
    img: house1,
    title: "Studio Apartment",
    location: "Kazanchis, Addis Ababa",
    price: "112,000",
    new: false,
    rent: false,
  },
];

const BestProperties = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full py-20 md:py-28 bg-gradient-to-b from-white via-[#1DA599]/5 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/*------------ heading section ----------- */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          {/* Left side content */}
          <div className="w-full md:w-6/12 space-y-6">
            <div className="inline-block bg-[#1DA599]/10 px-6 py-2 rounded-full">
              <span className="font-sansationRegular text-[#1DA599] text-sm flex items-center gap-2">
                <MdApartment className="text-lg" />
                {t.badge}
              </span>
            </div>
            <h3 className="text-[2rem] md:text-[2.4rem] font-sansationBold leading-tight">
              {t.title.start}{" "}
              <span className="text-[#1DA599]">{t.title.highlight}</span>{" "}
              {t.title.end}
            </h3>
            <p className="font-sansationRegular text-[#454545] text-sm md:text-base leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Right side statistics cards */}
          <div className="w-full md:w-5/12 space-y-4">
            {/* Stats Card 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="bg-[#1DA599]/10 p-3 rounded-xl">
                  <FaHome className="text-2xl text-[#1DA599]" />
                </div>
                <div>
                  <h4 className="font-sansationBold text-xl text-gray-800">
                    {t.stats.properties.number}
                  </h4>
                  <p className="font-sansationRegular text-sm text-[#454545]">
                    {t.stats.properties.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Card 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="bg-[#1DA599]/10 p-3 rounded-xl">
                  <MdVerified className="text-2xl text-[#1DA599]" />
                </div>
                <div>
                  <h4 className="font-sansationBold text-xl text-gray-800">
                    {t.stats.verified.number}
                  </h4>
                  <p className="font-sansationRegular text-sm text-[#454545]">
                    {t.stats.verified.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Card 3 */}
            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="bg-[#1DA599]/10 p-3 rounded-xl">
                  <FaUsers className="text-2xl text-[#1DA599]" />
                </div>
                <div>
                  <h4 className="font-sansationBold text-xl text-gray-800">
                    {t.stats.clients.number}
                  </h4>
                  <p className="font-sansationRegular text-sm text-[#454545]">
                    {t.stats.clients.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {cardsData.map((card, index) => (
              <BestPropertyCard
                key={card.id}
                img={card.img}
                title={t.properties[index].title}
                location={t.properties[index].location}
                price={card.price}
                newProperty={card.new}
                rent={card.rent}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-gradient-to-r from-[#1DA599] to-[#18877e] hover:scale-[0.98] font-sansationRegular rounded-xl py-6 px-8 text-base transition-all duration-300 shadow-lg shadow-[#1DA599]/20">
            {t.viewAll}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BestProperties;
