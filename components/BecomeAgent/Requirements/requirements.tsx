"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageContext";
import Image from "next/image";

const translations = {
  en: {
    title: "Join Our Elite Team",
    description:
      "We're looking for exceptional individuals who share our passion for real estate and commitment to excellence.",
    requirements: [
      {
        title: "Professional Qualifications",
        items: [
          "Valid real estate license or willingness to obtain one",
          "Strong academic background",
          "Proven track record in sales (preferred)",
        ],
      },
      {
        title: "Essential Skills",
        items: [
          "Excellent communication and interpersonal abilities",
          "Strong negotiation skills",
          "Proficiency in digital tools and social media",
          "Time management and organizational skills",
        ],
      },
      {
        title: "Personal Qualities",
        items: [
          "Self-motivated with entrepreneurial spirit",
          "Professional appearance and demeanor",
          "Strong work ethic and integrity",
          "Team player mentality",
        ],
      },
    ],
  },
  am: {
    title: "የኛን ልዩ ቡድን ይቀላቀሉ",
    description:
      "በሪል እስቴት ላይ ያለንን ፍላጎት እና ለብቃት ያለንን ቁርጠኝነት የሚጋሩ ልዩ ግለሰቦችን እየፈለግን ነው።",
    requirements: [
      {
        title: "ሙያዊ ብቃቶች",
        items: [
          "ሕጋዊ የሪል እስቴት ፈቃድ ወይም ለማግኘት ፈቃደኛነት",
          "ጠንካራ የትምህርት ዳራ",
          "በሽያጭ ውስጥ የተረጋገጠ ክትትል (ይመረጣል)",
        ],
      },
      {
        title: "አስፈላጊ ክህሎቶች",
        items: [
          "እጅግ በጣም ጥሩ የግንኙነት እና የግንኙነት ችሎታዎች",
          "ጠንካራ የድርድር ክህሎቶች",
          "በዲጂታል መሳሪያዎች እና በማህበራዊ ሚዲያ ብቃት",
          "የጊዜ አያያዝ እና የአደረጃጀት ክህሎቶች",
        ],
      },
      {
        title: "የግል ጥራቶች",
        items: [
          "የራስ ተነሳሽነት ያለው የንግድ መንፈስ",
          "ሙያዊ መልክ እና ባህሪ",
          "ጠንካራ የስራ ስነ-ምግባር እና ቅንነት",
          "የቡድን ተጫዋች አእምሮ",
        ],
      },
    ],
  },
};

const Requirements = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full">
      <div className="max-w-[1440px] w-11/12 mx-auto py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="w-full lg:w-5/12">
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/Images/agent-requirements.jpg"
                alt="Join Our Team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-sansationBold text-[#1DA599] mb-6">
              {t.title}
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-8">
              {t.requirements.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-sansationBold text-[#1DA599] mb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-[#1DA599]/10 w-5 h-5 rounded-full flex items-center justify-center">
                            <FaCheck className="text-[#1DA599] text-xs" />
                          </div>
                        </div>
                        <p className="text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
