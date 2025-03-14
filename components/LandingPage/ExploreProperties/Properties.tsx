"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Input } from "../../ui/input";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import house1 from "../../../public/Images/11.png";
import house2 from "../../../public/Images/12.png";
import house3 from "../../../public/Images/13.png";
import house4 from "../../../public/Images/14.png";
import house5 from "../../../public/Images/15.png";
import house6 from "../../../public/Images/16.png";

import PropertyCard from "./PropertyCard";
import { Button } from "../../ui/button";
import { useLanguage } from "../../../context/LanguageContext";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface DataProps {
  id: number;
  img: any;
  type: string;
  location: string;
  beds: string;
  bath: string;
  size: string;
  address: string;
  newProperty: boolean;
  rent: boolean;
}

const cardsData: DataProps[] = [
  {
    id: 1,
    img: house5,
    type: "Luxury Villa",
    location: "Addis Ababa",
    beds: "3",
    bath: "2",
    size: "300",
    address: "Bole Road",
    newProperty: true,
    rent: false,
  },
  {
    id: 2,
    img: house4,
    type: "Duplex Villa",
    location: "Dire Dawa",
    beds: "4",
    bath: "2",
    size: "400",
    address: "Sabian Street",
    newProperty: false,
    rent: true,
  },
  {
    id: 3,
    img: house3,
    type: "Luxury Villa",
    location: "Bahir Dar",
    beds: "3",
    bath: "2",
    size: "300",
    address: "Lake Tana View",
    newProperty: false,
    rent: false,
  },
  {
    id: 4,
    img: house2,
    type: "Luxury Villa",
    location: "Hawassa",
    beds: "3",
    bath: "2",
    size: "300",
    address: "Lake Side Drive",
    newProperty: true,
    rent: true,
  },
  {
    id: 5,
    img: house1,
    type: "Luxury Villa",
    location: "Mekelle",
    beds: "3",
    bath: "2",
    size: "300",
    address: "Hawelti Road",
    newProperty: true,
    rent: false,
  },
  {
    id: 6,
    img: house6,
    type: "Luxury Villa",
    location: "Adama",
    beds: "3",
    bath: "2",
    size: "300",
    address: "Rift Valley View",
    newProperty: false,
    rent: false,
  },
  {
    id: 7,
    img: house5,
    type: "Luxury Villa",
    location: "Addis Ababa",
    beds: "3",
    bath: "2",
    size: "300",
    address: "CMC Road",
    newProperty: true,
    rent: true,
  },
  {
    id: 8,
    img: house4,
    type: "Luxury Villa",
    location: "Dire Dawa",
    beds: "3",
    bath: "2",
    size: "300",
    address: "Kezira District",
    newProperty: true,
    rent: false,
  },
  {
    id: 9,
    img: house3,
    type: "Luxury Villa",
    location: "Gondar",
    beds: "3",
    bath: "2",
    size: "300",
    address: "Royal Enclosure",
    newProperty: false,
    rent: true,
  },
];

const translations = {
  en: {
    discover: "Discover Your Dream Home",
    explore: "Explore",
    properties: "Properties",
    forSale: "for Sale",
    description:
      "Browse through our collection of premium properties available for sale. Find your dream home in Ethiopia's most desirable locations.",
    searchPlaceholder: "Search properties...",
    location: "Select Location",
    priceRange: "Price Range",
    propertyType: "Property Type",
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    features: "Features",
    clearAll: "Clear All",
    apply: "Apply Filters",
    viewAll: "View All Properties for Sale",
  },
  am: {
    discover: "የህልምዎን ቤት ያግኙ",
    explore: "ያስሱ",
    properties: "ንብረቶች",
    forSale: "ለሽያጭ",
    description:
      "ለሽያጭ የሚቀርቡ የፕሪሚየም ንብረቶች ስብስባችንን ይመልከቱ። በኢትዮጵያ በጣም በሚፈለጉ ስፍራዎች የህልምዎን ቤት ያግኙ።",
    searchPlaceholder: "ንብረቶችን ይፈልጉ...",
    location: "አካባቢ ይምረጡ",
    priceRange: "የዋጋ ክልል",
    propertyType: "የንብረት አይነት",
    bedrooms: "መኝታ ቤቶች",
    bathrooms: "ባኞዎች",
    features: "ባህሪያት",
    clearAll: "ሁሉንም አጽዳ",
    apply: "ማጣሪያዎችን ተግብር",
    viewAll: "ሁሉንም ለሽያጭ የቀረቡ ንብረቶችን ይመልከቱ",
  },
};

const propertyTypes = [
  "Luxury Villa",
  "Apartment",
  "Penthouse",
  "Family Home",
  "Executive Suite",
  "Garden Villa",
];

const locations = [
  "Addis Ababa",
  "Dire Dawa",
  "Bahir Dar",
  "Hawassa",
  "Mekelle",
  "Adama",
];

const priceRanges = [
  "Under 5M",
  "5M - 10M",
  "10M - 15M",
  "15M - 20M",
  "20M - 25M",
  "Above 25M",
];

const features = [
  "Swimming Pool",
  "Garden",
  "Garage",
  "Security",
  "Gym",
  "Elevator",
  "Balcony",
  "Smart Home",
];

const Properties = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedFeatures] = useState<string[]>([]);

  return (
    <div className="w-full mt-32 md:mt-40 pb-8">
      {/*-------------- section-1 searching -------------------  */}
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          {/*-------- Left side: heading part ----- */}
          <div className="w-full md:w-5/12 md:sticky md:top-32">
            <div className="space-y-6">
              <div className="inline-block bg-[#1DA599]/10 px-6 py-2 rounded-lg">
                <span className="font-sansationRegular text-[#1DA599] text-sm">
                  {t.discover}
                </span>
              </div>
              <h3 className="text-[2rem] md:text-[2.4rem] font-sansationBold leading-tight">
                {t.explore}{" "}
                <span className="text-[#1DA599]">{t.properties}</span>{" "}
                {t.forSale}
              </h3>
              <p className="font-sansationRegular text-[#454545] text-sm md:text-base leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>

          {/*-------- Right side: search part ----- */}
          <div className="w-full md:w-6/12">
            <div className="bg-white rounded-xl shadow-xl p-6 border border-[#1DA599]/10">
              {/* search Input  */}
              <div className="relative mb-4">
                <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1DA599] text-xl" />
                <Input
                  className="pl-12 font-sansationRegular rounded-xl h-12 border-2 border-[#1DA599]/10 focus:border-[#1DA599] bg-[#1DA599]/5 transition-all duration-300"
                  placeholder={t.searchPlaceholder}
                />
              </div>

              {/*---------------- select Location ------------- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Select>
                  <SelectTrigger className="w-full font-sansationRegular bg-[#1DA599]/5 rounded-xl h-12 border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300">
                    <SelectValue placeholder={t.location} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {locations.map((location) => (
                        <SelectItem
                          key={location}
                          value={location.toLowerCase()}
                        >
                          {location}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full font-sansationRegular bg-[#1DA599]/5 rounded-xl h-12 border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300">
                    <SelectValue placeholder={t.priceRange} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {priceRanges.map((range) => (
                        <SelectItem key={range} value={range.toLowerCase()}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Select>
                  <SelectTrigger className="w-full font-sansationRegular bg-[#1DA599]/5 rounded-xl h-12 border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300">
                    <SelectValue placeholder={t.propertyType} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {propertyTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full font-sansationRegular bg-[#1DA599]/5 rounded-xl h-12 border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300">
                    <SelectValue placeholder={t.bedrooms} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {["1", "2", "3", "4", "5+"].map((num) => (
                        <SelectItem key={num} value={num}>
                          {num} {num === "1" ? "Bedroom" : "Bedrooms"}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Features Dropdown */}
              <div className="mb-6">
                <Select>
                  <SelectTrigger className="w-full font-sansationRegular bg-[#1DA599]/5 rounded-xl h-12 border-2 border-[#1DA599]/10 hover:border-[#1DA599] transition-all duration-300">
                    <SelectValue placeholder={t.features} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {features.map((feature) => (
                        <SelectItem
                          key={feature}
                          value={feature.toLowerCase()}
                          className={
                            selectedFeatures.includes(feature)
                              ? "bg-[#1DA599]/10"
                              : ""
                          }
                        >
                          {feature}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 h-12 text-[#1DA599] bg-[#1DA599]/5 hover:bg-[#1DA599]/10 rounded-xl font-sansationBold">
                  {t.clearAll}
                </Button>
                <Button className="flex-1 h-12 bg-gradient-to-r from-[#1DA599] to-[#18877e] hover:scale-[0.98] text-white rounded-xl font-sansationBold transition-all duration-300">
                  {t.apply}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*---------------- all cards section ------------- */}
      <div className="mt-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#1DA599]/5 to-transparent py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-[1440px] mx-auto">
          {cardsData.map((card) => (
            <PropertyCard
              key={card.id}
              id={card.id}
              img={card.img}
              type={card.type}
              location={card.location}
              beds={card.beds}
              bath={card.bath}
              size={card.size}
              address={card.address}
              newProperty={card.newProperty}
              rent={card.rent}
            />
          ))}
        </div>

        {/* View All Properties Button */}
        <div className="mt-16 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link
              href="/properties/for-sale"
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

export default Properties;
