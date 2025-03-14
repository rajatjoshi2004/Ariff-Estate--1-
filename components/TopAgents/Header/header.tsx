"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaTrophy } from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageContext";
import topAgent from "../../../public/Images/top-agent.jpg";
import yellow from "../../../public/Images/yellow.png";

const translations = {
  en: {
    meet: "Meet Our",
    top: "Top Performing",
    agents: "Real Estate Agents",
    description:
      "Discover our elite team of real estate professionals who consistently deliver exceptional results. These top-performing agents have proven track records, extensive market knowledge, and a commitment to excellence.",
    stats: {
      experience: "Years Average Experience",
      sales: "Properties Sold",
      satisfaction: "Client Satisfaction",
      awards: "Excellence Awards",
    },
  },
  am: {
    meet: "ያግኙ የኛን",
    top: "ከፍተኛ አፈጻጸም ያላቸው",
    agents: "የሪል እስቴት ወኪሎች",
    description:
      "ሁልጊዜም 탁월한 ውጤቶችን የሚያስገኙ የሪል እስቴት ባለሙያዎቻችንን ይተዋወቁ። እነዚህ ከፍተኛ አፈጻጸም ያላቸው ወኪሎች የተረጋገጠ የስኬት ታሪክ፣ ሰፊ የገበያ እውቀት እና ለብቃት ያላቸው ቁርጠኝነት አላቸው።",
    stats: {
      experience: "አማካይ የልምድ ዓመታት",
      sales: "የተሸጡ ንብረቶች",
      satisfaction: "የደንበኞች እርካታ",
      awards: "የምርጥነት ሽልማቶች",
    },
  },
};

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full relative mb-32">
      <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-between relative px-4 md:px-6 lg:px-8">
        {/* Yellow arrow - positioned behind content */}
        <div className="absolute hidden lg:block left-[38%] top-[45%] -z-10">
          <Image
            src={yellow}
            alt="yellow-Icon"
            className="w-[140px] md:w-[160px] lg:w-[180px] -rotate-5 animate-pulse"
          />
        </div>

        {/* Left side section */}
        <div className="w-full lg:w-6/12 space-y-6 md:space-y-8 mt-6 lg:mt-0 lg:py-12">
          {/* Desktop hero text */}
          <div className="space-y-6 hidden lg:block">
            <h2 className="text-[#FF9A01] font-sansationBold text-[2rem] relative inline-block">
              {t.meet}
              <i>&#34;</i>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF9A01] rounded-full opacity-30" />
            </h2>

            <h3 className="text-[2.8rem] lg:text-[3.2rem] font-sansationBold leading-tight tracking-wide">
              <span className="text-[#1DA599] relative inline-block group">
                <i>&#34;</i>
                {t.top}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1DA599] rounded-full transition-all duration-500 group-hover:w-full" />
              </span>{" "}
              <br className="lg:block hidden" />
              <span className="text-[#1DA599] relative inline-block group">
                {t.agents}
                <i>&#34;</i>
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1DA599] rounded-full transition-all duration-500 group-hover:w-full" />
              </span>
            </h3>
            <p className="font-sansationRegular tracking-wide text-[#454545] lg:pr-8 text-base md:text-lg max-w-[500px] leading-relaxed">
              {t.description}
            </p>

            {/* Stats Section - Moved to left side */}
            <div className="grid grid-cols-2 gap-4 mt-12 max-w-[400px]">
              <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#1DA599]/10 p-2 rounded-lg">
                    <FaTrophy className="text-[#FF9A01] text-xl" />
                  </div>
                  <span className="text-2xl font-bold text-[#1DA599]">8+</span>
                </div>
                <p className="text-sm text-gray-600">{t.stats.experience}</p>
              </div>
              <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#1DA599]/10 p-2 rounded-lg">
                    <FaStar className="text-[#FF9A01] text-xl" />
                  </div>
                  <span className="text-2xl font-bold text-[#1DA599]">98%</span>
                </div>
                <p className="text-sm text-gray-600">{t.stats.satisfaction}</p>
              </div>
              <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#1DA599]/10 p-2 rounded-lg">
                    <FaTrophy className="text-[#FF9A01] text-xl" />
                  </div>
                  <span className="text-2xl font-bold text-[#1DA599]">
                    1000+
                  </span>
                </div>
                <p className="text-sm text-gray-600">{t.stats.sales}</p>
              </div>
              <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#1DA599]/10 p-2 rounded-lg">
                    <FaTrophy className="text-[#FF9A01] text-xl" />
                  </div>
                  <span className="text-2xl font-bold text-[#1DA599]">25+</span>
                </div>
                <p className="text-sm text-gray-600">{t.stats.awards}</p>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet hero text overlay */}
          <div className="lg:hidden absolute top-8 left-4 right-4 z-20 text-white">
            <h2 className="text-[#FF9A01] font-sansationBold text-[1.6rem] md:text-[1.8rem] relative inline-block">
              {t.meet}
              <i>&#34;</i>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF9A01] rounded-full opacity-30" />
            </h2>

            <h3 className="text-[2rem] md:text-[2.4rem] font-sansationBold leading-tight tracking-wide mt-4">
              <span className="relative inline-block group">{t.top}</span>{" "}
              <span className="font-light">{t.agents}</span>
            </h3>
          </div>

          {/* Mobile Stats */}
          <div className="grid grid-cols-2 gap-3 lg:hidden mt-8">
            <div className="bg-white shadow-md rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#1DA599]/10 p-2 rounded-lg">
                  <FaTrophy className="text-[#FF9A01] text-lg" />
                </div>
                <span className="text-xl font-bold text-[#1DA599]">8+</span>
              </div>
              <p className="text-xs text-gray-600">{t.stats.experience}</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#1DA599]/10 p-2 rounded-lg">
                  <FaStar className="text-[#FF9A01] text-lg" />
                </div>
                <span className="text-xl font-bold text-[#1DA599]">98%</span>
              </div>
              <p className="text-xs text-gray-600">{t.stats.satisfaction}</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#1DA599]/10 p-2 rounded-lg">
                  <FaTrophy className="text-[#FF9A01] text-lg" />
                </div>
                <span className="text-xl font-bold text-[#1DA599]">1000+</span>
              </div>
              <p className="text-xs text-gray-600">{t.stats.sales}</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#1DA599]/10 p-2 rounded-lg">
                  <FaTrophy className="text-[#FF9A01] text-lg" />
                </div>
                <span className="text-xl font-bold text-[#1DA599]">25+</span>
              </div>
              <p className="text-xs text-gray-600">{t.stats.awards}</p>
            </div>
          </div>
        </div>

        {/* Right side section */}
        <div className="w-full lg:w-6/12 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
          <div className="absolute inset-0 overflow-hidden rounded-b-[2rem] lg:rounded-[2rem]">
            <Image
              src={topAgent}
              alt="Top Agents"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:from-black/20 lg:to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
