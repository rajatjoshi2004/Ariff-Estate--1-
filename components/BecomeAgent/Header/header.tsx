"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";
import becomeAgent from "../../../public/Images/become-agent.jpg";
import yellow from "../../../public/Images/yellow.png";

const translations = {
  en: {
    title: "Join Our Real Estate Team",
    description:
      "Start your journey as a real estate agent with Ariff Estate. We provide the tools, training, and support you need to build a successful career in real estate.",
  },
  am: {
    title: "የእኛን የሪል እስቴት ቡድን ይቀላቀሉ",
    description:
      "የሪል እስቴት ወኪል የሆኑ ጉዞዎን ከአሪፍ እስቴት ጋር ይጀምሩ። በሪል እስቴት ውስጥ ስኬታማ ሙያ ለመገንባት የሚያስፈልጉትን መሳሪያዎች፣ ስልጠና እና ድጋፍ እናቀርባለን።",
  },
};

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full relative">
      <div className="max-w-[1440px] w-11/12 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-8 lg:gap-16 py-16">
          {/* Left side - Text content */}
          <div className="w-full lg:w-5/12 space-y-6 lg:pl-8">
            <h1 className="text-[2.5rem] lg:text-[3.2rem] font-sansationBold leading-tight">
              <span className="text-[#1DA599]">{t.title}</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Right side - Image and Arrow */}
          <div className="w-full lg:w-6/12 relative">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src={becomeAgent}
                alt="Become an Agent"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Arrow positioned under the image */}
            <div className="absolute hidden lg:block -left-[140px] -bottom-[60px] z-10">
              <Image
                src={yellow}
                alt="Direction Arrow"
                className="w-[180px] -rotate-[30deg] animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
