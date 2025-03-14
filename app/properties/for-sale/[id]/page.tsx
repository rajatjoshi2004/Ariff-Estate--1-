"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Calculator,
  Calendar,
  Video,
  Plus,
  ChevronLeft,
  ChevronRight,
  Shield,
  Car,
  Mountain,
  Utensils,
  Clock,
  Percent,
  Tag,
  Award,
  Home,
  Warehouse,
  Ruler,
  Trees,
  Wifi,
  Zap,
  Droplets,
  Fan,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const propertyImages = [
  "/Images/3.png",
  "/Images/4.png",
  "/Images/11.png",
  "/Images/12.png",
  "/Images/13.png",
  "/Images/14.png",
];

const translations = {
  en: {
    paymentCalculator: "Payment Calculator",
    thinkingForBuying: "Thinking for buying?",
    tourInPerson: "Tour in Person",
    virtualTour: "Virtual Tour",
    requestShowing: "Request Showing",
    orContinue: "or continue",
    startAnOffer: "Start an Offer",
    askOurAgent: "Ask Our Agent",
    propertyOverview: "Property Overview",
    location: "Location",
    sqft: "sqm",
    beds: "Bedrooms",
    baths: "Bathrooms",
    message: "Message",
    callAgent: "Call Agent",
    moreImages: "more images",
    price: "Price",
    pricePerSqm: "Price per sqm",
    propertyType: "Property Type",
    propertyStatus: "Property Status",
    constructionStatus: "Construction Status",
    furnished: "Furnished Status",
    utilities: "Utilities",
    outdoorSpace: "Outdoor Space",
    internet: "Internet",
    electricity: "Electricity",
    water: "Water",
    airConditioning: "Air Conditioning",
    readyToMove: "Ready to Move",
    apartment: "Apartment",
    residential: "Residential",
    completed: "Completed",
    fullyFurnished: "Fully Furnished",
    included: "Included",
    balcony: "Balcony Available",
    fiberOptic: "Fiber Optic",
    backupGenerator: "Backup Generator",
    twentyFourSevenSupply: "24/7 Supply",
    centralAC: "Central AC",
    security: "24/7 Security",
    parking: "Parking Space",
    cityView: "City View",
    modernKitchen: "Modern Kitchen",
    aboutProperty: "About Property",
    amenities: "Amenities",
    propertyDetails: "Property Details",
    availableFrom: "Available From",
    yearBuilt: "Year Built",
  },
  am: {
    paymentCalculator: "የክፍያ ካልኩሌተር",
    thinkingForBuying: "ለመግዛት እያሰቡ ነው?",
    tourInPerson: "በአካል ጉብኝት",
    virtualTour: "ቨርቹዋል ጉብኝት",
    requestShowing: "ማሳየት ይጠይቁ",
    orContinue: "ወይም ይቀጥሉ",
    startAnOffer: "ሀሳብ ያቅርቡ",
    askOurAgent: "ወኪላችንን ይጠይቁ",
    propertyOverview: "የንብረት አጠቃላይ እይታ",
    location: "አድራሻ",
    sqft: "ስኴር ሜትር",
    beds: "መኝታ ቤቶች",
    baths: "ባኞ ቤቶች",
    message: "መልእክት",
    callAgent: "ወኪልን ይደውሉ",
    moreImages: "ተጨማሪ ምስሎች",
    price: "ዋጋ",
    pricePerSqm: "በስኴር ሜትር ዋጋ",
    propertyType: "የንብረት ዓይነት",
    propertyStatus: "የንብረት ሁኔታ",
    constructionStatus: "የግንባታ ሁኔታ",
    furnished: "የመገልገያ ሁኔታ",
    utilities: "አገልግሎቶች",
    outdoorSpace: "የውጭ ቦታ",
    internet: "ኢንተርኔት",
    electricity: "ኤሌክትሪክ",
    water: "ውሃ",
    airConditioning: "የአየር ማቀዝቀዣ",
    readyToMove: "ለመግባት ዝግጁ",
    apartment: "አፓርትመንት",
    residential: "መኖሪያ",
    completed: "የተጠናቀቀ",
    fullyFurnished: "ሙሉ በሙሉ የተfurnished",
    included: "የተካተተ",
    balcony: "ባልኮኒ አለው",
    fiberOptic: "ፋይበር ኦፕቲክ",
    backupGenerator: "የbackup ጄነሬተር",
    twentyFourSevenSupply: "24/7 አቅርቦት",
    centralAC: "ማዕከላዊ ኤሲ",
    security: "24/7 ጥበቃ",
    parking: "የመኪና ማቆሚያ",
    cityView: "የከተማ እይታ",
    modernKitchen: "ዘመናዊ ወጥ ቤት",
    aboutProperty: "ስለ ንብረቱ",
    amenities: "አገልግሎቶች",
    propertyDetails: "የንብረት ዝርዝሮች",
    availableFrom: "ከሚገኝበት ጊዜ",
    yearBuilt: "የተሰራበት ዓመት",
  },
};

export default function PropertyDetail() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + propertyImages.length) % propertyImages.length
    );
  };

  // Get preview images
  const mainImage = propertyImages[currentImageIndex];
  const nextPreviewImage =
    propertyImages[(currentImageIndex + 1) % propertyImages.length];
  const secondPreviewImage =
    propertyImages[(currentImageIndex + 2) % propertyImages.length];

  const amenities = [
    {
      icon: Shield,
      label: t.security,
      description: "24/7 professional security service with CCTV monitoring",
    },
    {
      icon: Car,
      label: t.parking,
      description: "Dedicated covered parking space with 24/7 access",
    },
    {
      icon: Mountain,
      label: t.cityView,
      description: "Panoramic views of the city skyline and mountains",
    },
    {
      icon: Utensils,
      label: t.modernKitchen,
      description: "Fully equipped modern kitchen with premium appliances",
    },
    {
      icon: Wifi,
      label: t.internet,
      description: "High-speed fiber optic internet connection",
    },
    {
      icon: Trees,
      label: t.outdoorSpace,
      description: "Beautiful balcony with garden space",
    },
    {
      icon: Zap,
      label: t.electricity,
      description: "24/7 power with backup generator",
    },
    {
      icon: Fan,
      label: t.airConditioning,
      description: "Central air conditioning system",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Main image with navigation arrows and property type badge */}
          <div className="md:col-span-2 h-[400px] md:h-[500px] relative rounded-lg overflow-hidden">
            <Image
              src={mainImage}
              alt="Property main view"
              fill
              className="object-cover"
            />
            {/* Property Type Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-[#1DA599] font-semibold font-Sansation">
                {t.apartment}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <button
                  onClick={prevImage}
                  className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>
            </div>
          </div>

          {/* Preview images */}
          <div className="grid grid-rows-2 gap-4 h-[400px] md:h-[500px]">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={nextPreviewImage}
                alt="Next property view"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="relative rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={secondPreviewImage}
                alt="Second preview"
                fill
                className="object-cover"
              />
              {propertyImages.length > 3 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <Plus className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-lg font-medium">
                      {propertyImages.length - 3} {t.moreImages}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4 font-Sansation text-[#1DA599]">
              Modern Apartment in Bole
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5 text-[#1DA599]" />
                <span className="font-Sansation">Bole, Addis Ababa</span>
              </div>
              <div className="flex items-center gap-2 text-[#1DA599] font-semibold">
                <Tag className="h-5 w-5" />
                <span className="font-Sansation">BOL-2024-001</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <Bed className="h-8 w-8 text-[#1DA599] mx-auto mb-2" />
                  <div className="font-medium font-Sansation">3</div>
                  <div className="text-sm text-gray-500 font-Sansation">
                    {t.beds}
                  </div>
                </div>
                <div className="text-center">
                  <Bath className="h-8 w-8 text-[#1DA599] mx-auto mb-2" />
                  <div className="font-medium font-Sansation">2</div>
                  <div className="text-sm text-gray-500 font-Sansation">
                    {t.baths}
                  </div>
                </div>
                <div className="text-center">
                  <Square className="h-8 w-8 text-[#1DA599] mx-auto mb-2" />
                  <div className="font-medium font-Sansation">150</div>
                  <div className="text-sm text-gray-500 font-Sansation">
                    {t.sqft}
                  </div>
                </div>
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-[#1DA599] mx-auto mb-2" />
                  <div className="font-medium font-Sansation">2023</div>
                  <div className="text-sm text-gray-500 font-Sansation">
                    {t.yearBuilt}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 font-Sansation text-[#1DA599]">
                {t.aboutProperty}
              </h2>
              <p className="text-gray-600 mb-8 font-Sansation leading-relaxed">
                Experience luxury living in this stunning modern apartment
                located in the heart of Bole. This exceptional property offers
                panoramic city views and contemporary design throughout.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-8 font-Sansation text-[#1DA599]">
                {t.amenities}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.slice(0, 6).map((amenity, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#1DA599]/5 via-white to-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
                        <amenity.icon className="w-6 h-6 text-[#1DA599]" />
                      </div>
                      <div>
                        <h3 className="font-Sansation font-semibold text-gray-800 mb-1">
                          {amenity.label}
                        </h3>
                        <p className="text-sm text-gray-500 font-Sansation line-clamp-2">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {amenities.length > 6 && (
                <Button
                  variant="outline"
                  className="mt-4 w-full border-[#1DA599] text-[#1DA599] hover:bg-[#1DA599] hover:text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Show More Amenities
                </Button>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 font-Sansation text-[#1DA599]">
                {t.location}
              </h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5768883814894!2d38.79745961478386!3d9.010774393533606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1647861183101!5m2!1sen!2set"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Price Section */}
            <div className="bg-gradient-to-br from-[#1DA599]/5 to-white rounded-xl shadow-sm p-8">
              <div className="mb-6">
                <div className="text-sm text-gray-500 font-Sansation mb-2">
                  {t.price}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-base text-gray-500 font-Sansation">
                    ETB
                  </span>
                  <span className="text-4xl font-bold text-gray-600 font-Sansation tracking-tight">
                    8,500,000
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-400 font-Sansation">
                  {t.pricePerSqm}:{" "}
                  <span className="font-medium text-gray-600">ETB 56,666</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-[#1DA599] hover:bg-[#1DA599]/90 h-12">
                  <Calculator className="w-5 h-5 mr-2" />
                  {t.paymentCalculator}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#1DA599] text-[#1DA599] hover:bg-[#1DA599] hover:text-white h-12"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {t.tourInPerson}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#1DA599] text-[#1DA599] hover:bg-[#1DA599] hover:text-white h-12"
                >
                  <Video className="w-5 h-5 mr-2" />
                  {t.virtualTour}
                </Button>
              </div>
            </div>

            {/* Property Details Section */}
            <div className="bg-gradient-to-br from-[#1DA599]/5 to-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-8 font-Sansation text-[#1DA599]">
                {t.propertyDetails}
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Home className="w-5 h-5 text-[#1DA599]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-Sansation">
                        {t.propertyType}
                      </div>
                      <div className="font-medium font-Sansation">
                        {t.apartment}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Tag className="w-5 h-5 text-[#1DA599]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-Sansation">
                        {t.propertyStatus}
                      </div>
                      <div className="font-medium font-Sansation">
                        {t.residential}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Warehouse className="w-5 h-5 text-[#1DA599]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-Sansation">
                        {t.constructionStatus}
                      </div>
                      <div className="font-medium font-Sansation">
                        {t.completed}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Clock className="w-5 h-5 text-[#1DA599]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-Sansation">
                        {t.availableFrom}
                      </div>
                      <div className="font-medium font-Sansation">
                        {t.readyToMove}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Utilities Section */}
            <div className="bg-gradient-to-br from-[#1DA599]/5 to-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-8 font-Sansation text-[#1DA599]">
                {t.utilities}
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Wifi className="w-5 h-5 text-[#1DA599]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-Sansation">
                      {t.internet}
                    </div>
                    <div className="font-medium font-Sansation">
                      {t.fiberOptic}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Zap className="w-5 h-5 text-[#1DA599]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-Sansation">
                      {t.electricity}
                    </div>
                    <div className="font-medium font-Sansation">
                      {t.backupGenerator}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Droplets className="w-5 h-5 text-[#1DA599]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-Sansation">
                      {t.water}
                    </div>
                    <div className="font-medium font-Sansation">
                      {t.twentyFourSevenSupply}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Fan className="w-5 h-5 text-[#1DA599]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-Sansation">
                      {t.airConditioning}
                    </div>
                    <div className="font-medium font-Sansation">
                      {t.centralAC}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ask Our Agent Section - Already has gradient */}
            <div className="bg-gradient-to-br from-[#1DA599]/5 to-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-6 font-Sansation text-[#1DA599]">
                {t.askOurAgent}
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16 border-2 border-[#1DA599] p-0.5">
                  <AvatarImage src="/Images/agent.jpg" alt="Angelica Kusanov" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-gray-900 font-Sansation">
                    Angelica Kusanov
                  </div>
                  <div className="text-sm text-gray-500 font-Sansation">
                    Senior Real Estate Agent
                  </div>
                  <div className="text-sm text-[#1DA599] font-Sansation mt-1">
                    Available Now
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-[#1DA599] hover:bg-[#1DA599]/90">
                  {t.callAgent}
                </Button>
                <Button
                  variant="outline"
                  className="border-[#1DA599] text-[#1DA599] hover:bg-[#1DA599] hover:text-white"
                >
                  {t.message}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
