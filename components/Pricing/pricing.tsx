"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  BsBuildings,
  BsArrowRight,
  BsCheck2Circle,
  BsStars,
} from "react-icons/bs";
import { HiOutlineHome, HiSparkles } from "react-icons/hi";
import AgentPlane from "./agents_plane/agentplane";
import PropertyOwner from "./property_owners/propertypwner";

const translations = {
  en: {
    title: "Choose Your Perfect Plan",
    subtitle: "For Your Real Estate Journey",
    description:
      "Select your role below to view tailored pricing plans that match your needs",
    agentTitle: "Real Estate Agent",
    agentDesc:
      "Access powerful tools to manage and showcase multiple properties",
    ownerTitle: "Property Owner",
    ownerDesc: "List and manage your properties with ease",
    viewPlans: "View Plans",
    backToSelection: "Back to selection",
  },
  am: {
    title: "ፍጹም እቅድዎን ይምረጡ",
    subtitle: "ለእርስዎ የሪል እስቴት ጉዞ",
    description: "ለእርስዎ ፍላጎት የሚስማማ የዋጋ እቅድ ለማየት ሚናዎን ከታች ይምረጡ",
    agentTitle: "የሪል እስቴት ወኪል",
    agentDesc: "ብዙ ንብረቶችን ለማስተዳደር እና ለማሳየት ጠንካራ መሳሪያዎችን ያግኙ",
    ownerTitle: "የንብረት ባለቤት",
    ownerDesc: "ንብረትዎን በቀላሉ ያስተዋውቁ እና ያስተዳድሩ",
    viewPlans: "እቅዶችን ይመልከቱ",
    backToSelection: "ወደ ምርጫው ይመለሱ",
  },
};

const Pricing = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [animatedBg, setAnimatedBg] = useState(0);

  // Subtle background animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedBg((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FDFC] via-white to-[#F0FAF9]">
      <Navbar />
      <main className="relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-0 left-0 w-[800px] h-[800px] bg-[#1DA599]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 ease-in-out ${
              animatedBg === 0 ? "opacity-100 scale-100" : "opacity-70 scale-90"
            }`}
          ></div>
          <div
            className={`absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#1DA599]/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 transition-all duration-3000 ease-in-out ${
              animatedBg === 1 ? "opacity-100 scale-100" : "opacity-70 scale-90"
            }`}
          ></div>
          <div
            className={`absolute top-1/3 right-1/4 w-64 h-64 bg-[#1DA599]/10 rounded-full blur-2xl transition-all duration-3000 ease-in-out ${
              animatedBg === 2 ? "opacity-100 scale-100" : "opacity-70 scale-90"
            }`}
          ></div>
          <div
            className={`absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#1DA599]/10 rounded-full blur-2xl transition-all duration-3000 ease-in-out ${
              animatedBg === 0 ? "opacity-100 scale-100" : "opacity-70 scale-90"
            }`}
          ></div>

          {/* Decorative elements */}
          <div className="hidden lg:block absolute top-40 left-10 w-20 h-20 border-2 border-[#1DA599]/20 rounded-xl transform rotate-12"></div>
          <div className="hidden lg:block absolute bottom-40 right-10 w-32 h-32 border-2 border-[#1DA599]/20 rounded-full"></div>
          <div className="hidden lg:block absolute top-1/2 right-1/4 w-16 h-16 bg-[#1DA599]/10 rounded-full"></div>

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#1DA599]/30 rounded-full animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#1DA599]/30 rounded-full animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#1DA599]/30 rounded-full animate-float-fast"></div>
        </div>

        <div className="max-w-[1440px] w-11/12 mx-auto relative">
          {!selectedType ? (
            <>
              {/* Hero Section */}
              <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
                <div className="text-center max-w-4xl mx-auto px-4">
                  <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-[#1DA599]/10 rounded-full text-[#1DA599] font-medium">
                    <HiSparkles className="w-5 h-5" />
                    <span>Premium Plans</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-sansationBold mb-6 leading-tight">
                    <span className="text-[#1DA599]">{t.title}</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-sansationBold text-gray-800 mb-6">
                    {t.subtitle}
                  </h2>
                  <p className="text-xl text-gray-600 font-sansationRegular max-w-3xl mx-auto leading-relaxed">
                    {t.description}
                  </p>
                </div>
              </div>

              {/* Selection Cards */}
              <div className="max-w-6xl mx-auto px-4 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                  {/* Agent Card */}
                  <button
                    onClick={() => setSelectedType("agent")}
                    className="group relative bg-white rounded-[2rem] p-12 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(29,165,153,0.15)] transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                  >
                    {/* Card background with gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1DA599] to-[#2A9D8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#1DA599]/5 rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/5 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1DA599]/5 rounded-full transform -translate-x-1/2 translate-y-1/2 group-hover:bg-white/5 transition-colors duration-500"></div>

                    {/* Decorative patterns */}
                    <div className="absolute top-10 left-10 w-20 h-20 border border-[#1DA599]/10 rounded-lg transform rotate-45 group-hover:border-white/10 transition-colors duration-500"></div>
                    <div className="absolute bottom-10 right-10 w-16 h-16 border border-[#1DA599]/10 rounded-full group-hover:border-white/10 transition-colors duration-500"></div>

                    {/* Card content */}
                    <div className="relative z-10">
                      <div className="relative">
                        <div className="w-40 h-40 mx-auto bg-[#1DA599]/10 rounded-full flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10">
                          <BsBuildings className="w-20 h-20 text-[#1DA599] group-hover:text-white transition-colors duration-500" />
                        </div>

                        {/* Floating elements around icon */}
                        <div className="absolute top-0 right-1/4 w-8 h-8 bg-[#1DA599]/10 rounded-full group-hover:bg-white/10 transition-all duration-500 group-hover:scale-125 group-hover:translate-x-2"></div>
                        <div className="absolute bottom-10 left-1/4 w-6 h-6 bg-[#1DA599]/10 rounded-full group-hover:bg-white/10 transition-all duration-500 group-hover:scale-125 group-hover:-translate-x-2"></div>
                      </div>

                      <h3 className="text-4xl font-sansationBold mb-6 text-gray-800 group-hover:text-white transition-colors duration-500">
                        {t.agentTitle}
                      </h3>
                      <p className="text-xl text-gray-600 group-hover:text-white/90 font-sansationRegular mb-10 transition-colors duration-500">
                        {t.agentDesc}
                      </p>

                      {/* Feature highlights */}
                      <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-3 text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                          <BsCheck2Circle className="text-[#1DA599] group-hover:text-white/90 transition-colors duration-500" />
                          <span>Property listing management</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                          <BsCheck2Circle className="text-[#1DA599] group-hover:text-white/90 transition-colors duration-500" />
                          <span>Client relationship tools</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                          <BsCheck2Circle className="text-[#1DA599] group-hover:text-white/90 transition-colors duration-500" />
                          <span>Marketing automation</span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-4 text-[#1DA599] group-hover:text-white font-sansationBold text-xl transition-colors duration-500 bg-[#1DA599]/10 group-hover:bg-white/10 px-6 py-3 rounded-full">
                        <span>{t.viewPlans}</span>
                        <BsArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500" />
                      </div>
                    </div>
                  </button>

                  {/* Owner Card */}
                  <button
                    onClick={() => setSelectedType("owner")}
                    className="group relative bg-white rounded-[2rem] p-12 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(29,165,153,0.15)] transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                  >
                    {/* Card background with gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1DA599] to-[#2A9D8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#1DA599]/5 rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/5 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1DA599]/5 rounded-full transform -translate-x-1/2 translate-y-1/2 group-hover:bg-white/5 transition-colors duration-500"></div>

                    {/* Decorative patterns */}
                    <div className="absolute top-10 right-10 w-20 h-20 border border-[#1DA599]/10 rounded-lg transform -rotate-45 group-hover:border-white/10 transition-colors duration-500"></div>
                    <div className="absolute bottom-10 left-10 w-16 h-16 border border-[#1DA599]/10 rounded-full group-hover:border-white/10 transition-colors duration-500"></div>

                    {/* Card content */}
                    <div className="relative z-10">
                      <div className="relative">
                        <div className="w-40 h-40 mx-auto bg-[#1DA599]/10 rounded-full flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10">
                          <HiOutlineHome className="w-20 h-20 text-[#1DA599] group-hover:text-white transition-colors duration-500" />
                        </div>

                        {/* Floating elements around icon */}
                        <div className="absolute top-0 left-1/4 w-8 h-8 bg-[#1DA599]/10 rounded-full group-hover:bg-white/10 transition-all duration-500 group-hover:scale-125 group-hover:-translate-x-2"></div>
                        <div className="absolute bottom-10 right-1/4 w-6 h-6 bg-[#1DA599]/10 rounded-full group-hover:bg-white/10 transition-all duration-500 group-hover:scale-125 group-hover:translate-x-2"></div>
                      </div>

                      <h3 className="text-4xl font-sansationBold mb-6 text-gray-800 group-hover:text-white transition-colors duration-500">
                        {t.ownerTitle}
                      </h3>
                      <p className="text-xl text-gray-600 group-hover:text-white/90 font-sansationRegular mb-10 transition-colors duration-500">
                        {t.ownerDesc}
                      </p>

                      {/* Feature highlights */}
                      <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-3 text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                          <BsCheck2Circle className="text-[#1DA599] group-hover:text-white/90 transition-colors duration-500" />
                          <span>Easy property listing</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                          <BsCheck2Circle className="text-[#1DA599] group-hover:text-white/90 transition-colors duration-500" />
                          <span>Tenant screening tools</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                          <BsCheck2Circle className="text-[#1DA599] group-hover:text-white/90 transition-colors duration-500" />
                          <span>Maintenance management</span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-4 text-[#1DA599] group-hover:text-white font-sansationBold text-xl transition-colors duration-500 bg-[#1DA599]/10 group-hover:bg-white/10 px-6 py-3 rounded-full">
                        <span>{t.viewPlans}</span>
                        <BsArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="py-8">
              {/* Enhanced back button */}
              <button
                onClick={() => setSelectedType(null)}
                className="mb-8 text-[#1DA599] hover:text-white font-sansationBold flex items-center gap-3 text-lg transition-all duration-300 hover:-translate-x-2 bg-[#1DA599]/10 hover:bg-[#1DA599] px-6 py-3 rounded-full"
              >
                ← {t.backToSelection}
              </button>

              {/* Wrapper for plan content with enhanced styling */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F8FDFC] to-[#E6F7F5] p-6 md:p-10 shadow-lg border border-[#1DA599]/10">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#1DA599]/5 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1DA599]/5 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

                  {/* Decorative patterns */}
                  <div className="absolute top-20 left-20 w-32 h-32 border border-[#1DA599]/10 rounded-lg transform rotate-45"></div>
                  <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#1DA599]/10 rounded-full"></div>
                </div>

                {/* Plan content */}
                <div className="relative z-10">
                  {/* Plan type indicator */}
                  <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 bg-[#1DA599]/10 rounded-full text-[#1DA599] font-medium">
                    <BsStars className="w-5 h-5" />
                    <span>
                      {selectedType === "agent" ? t.agentTitle : t.ownerTitle}{" "}
                      Plans
                    </span>
                  </div>

                  {selectedType === "agent" ? (
                    <AgentPlane />
                  ) : (
                    <PropertyOwner />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
