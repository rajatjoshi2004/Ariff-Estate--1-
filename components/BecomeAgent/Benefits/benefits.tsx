"use client";

import React from "react";
import {
  FaMoneyBillWave,
  FaGraduationCap,
  FaChartLine,
  FaHandshake,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageContext";

const translations = {
  en: {
    title: "Why Choose Ariff Location?",
    benefits: [
      {
        icon: FaMoneyBillWave,
        title: "Competitive Commission",
        description:
          "Earn up to 70% commission on your sales with our industry-leading commission structure.",
      },
      {
        icon: FaGraduationCap,
        title: "Professional Training",
        description:
          "Access comprehensive training programs and continuous learning opportunities.",
      },
      {
        icon: FaChartLine,
        title: "Growth Potential",
        description:
          "Unlimited earning potential and clear career advancement paths.",
      },
      {
        icon: FaHandshake,
        title: "Mentorship Program",
        description:
          "Learn from experienced agents through our dedicated mentorship program.",
      },
      {
        icon: FaTools,
        title: "Advanced Tools",
        description:
          "Access to cutting-edge technology and marketing tools to boost your success.",
      },
      {
        icon: FaUsers,
        title: "Strong Network",
        description:
          "Join a supportive community of professionals and expand your network.",
      },
    ],
  },
  am: {
    title: "ለምን አሪፍ እስቴትን መምረጥ?",
    benefits: [
      {
        icon: FaMoneyBillWave,
        title: "ተወዳዳሪ ኮሚሽን",
        description: "በኢንዱስትሪው መሪ የኮሚሽን መዋቅራችን በሽያጭዎ ላይ እስከ 70% ኮሚሽን ያግኙ።",
      },
      {
        icon: FaGraduationCap,
        title: "ሙያዊ ስልጠና",
        description: "ሁሉን አቀፍ የስልጠና ፕሮግራሞችን እና ቀጣይነት ያለው የመማር እድሎችን ያግኙ።",
      },
      {
        icon: FaChartLine,
        title: "የእድገት እምቅ ዕድል",
        description: "ያልተገደበ የገቢ እምቅ እና ግልጽ የሙያ እድገት መንገዶች።",
      },
      {
        icon: FaHandshake,
        title: "የአማካሪ ፕሮግራም",
        description: "በተወፈደ የአማካሪ ፕሮግራማችን በኩል ከልምድ ያላቸው ወኪሎች ይማሩ።",
      },
      {
        icon: FaTools,
        title: "የላቀ መሳሪያዎች",
        description: "ስኬትዎን ለማሳደግ ዘመናዊ ቴክኖሎጂ እና የማስታወቂያ መሳሪያዎችን ያግኙ።",
      },
      {
        icon: FaUsers,
        title: "ጠንካራ ኔትወርክ",
        description: "ደጋፊ የሙያተኞች ማህበረሰብን ይቀላቀሉ እና አውታረ መረብዎን ያስፋፉ።",
      },
    ],
  },
};

const Benefits = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full bg-gray-50/50">
      <div className="max-w-[1440px] w-11/12 mx-auto py-20">
        <h2 className="text-[2rem] lg:text-[2.5rem] font-sansationBold text-[#1DA599] text-center mb-16">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1DA599]/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="bg-[#1DA599]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="text-[#1DA599] text-2xl" />
                </div>

                <h3 className="text-xl font-sansationBold text-[#1DA599] mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
