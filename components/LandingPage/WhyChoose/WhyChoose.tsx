"use client";

import Image from "next/image";
import React from "react";
import whyChooseImage from "../../../public/Images/whyChoose.jpg";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { MdSecurity, MdLocationOn } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import whatMakesDiff1 from "../../../public/Images/WhatMakesUsDifferent1.png";
import whatMakesDiff2 from "../../../public/Images/WhatMakesUsDifferent2.png";
import { Button } from "../../ui/button";
import { useLanguage } from "../../../context/LanguageContext";

const translations = {
  en: {
    whyChoose: {
      highlight: "Why",
      rest: "Choose Us?",
      description:
        "Experience excellence in Ethiopian real estate with our trusted services. We provide carefully selected properties that meet the highest standards of quality and value in Ethiopia's most desirable locations.",
    },
    cards: {
      premium: {
        title: "Premium Properties",
        description:
          "Discover Ethiopia's finest properties in prime locations.",
      },
      expert: {
        title: "Expert Guidance",
        description: "Professional support through your property journey.",
      },
    },
    features: {
      property: {
        title: "Premium Property Selection",
        description:
          "We offer exclusive access to Ethiopia's finest properties, from modern apartments to luxury villas",
      },
      expertise: {
        title: "Trusted Local Expertise",
        description:
          "Our deep understanding of Ethiopian real estate ensures you make informed investment decisions",
      },
      location: {
        title: "Prime Locations",
        description:
          "Access to properties in Ethiopia's most sought-after neighborhoods and emerging areas",
      },
    },
    button: "Explore More",
  },
  am: {
    whyChoose: {
      highlight: "ለምን",
      rest: "እኛን መረጡ?",
      description:
        "በኢትዮጵያ ሪል እስቴት ውስጥ ምርጥ አገልግሎትን ያግኙ። በጥንቃቄ የተመረጡ ንብረቶችን እናቀርባለን። በኢትዮጵያ ምርጥ ቦታዎች ከፍተኛ የጥራት እና የዋጋ መመዘኛዎችን የሚያሟሉ።",
    },
    cards: {
      premium: {
        title: "ፕሪሚየም ንብረቶች",
        description: "በኢትዮጵያ ምርጥ ቦታዎች የሚገኙ ንብረቶችን ያግኙ።",
      },
      expert: {
        title: "የባለሙያ መመሪያ",
        description: "በንብረት ጉዞዎ ሙያዊ ድጋፍ።",
      },
    },
    features: {
      property: {
        title: "ፕሪሚየም የንብረት ምርጫ",
        description:
          "ከዘመናዊ አፓርታማዎች እስከ ፍጹም ቪላዎች፣ የኢትዮጵያን ምርጥ ንብረቶች የማግኘት ልዩ እድል እናቀርባለን",
      },
      expertise: {
        title: "የታመነ የአካባቢ ባለሙያ",
        description:
          "የኢትዮጵያ ሪል እስቴትን በጥልቀት መረዳታችን መረጃ-ነክ የኢንቨስትመንት ውሳኔዎችን እንዲያደርጉ ያስችልዎታል",
      },
      location: {
        title: "ምርጥ አካባቢዎች",
        description:
          "በኢትዮጵያ በጣም በሚፈለጉ አካባቢዎች እና በማደግ ላይ ባሉ አካባቢዎች የሚገኙ ንብረቶችን ያግኙ",
      },
    },
    button: "ተጨማሪ ያስሱ",
  },
};

const WhyChoose = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full pt-20 px-4 md:px-8">
      {/*------------------ section-1 Why Choose Us -------------- */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
        {/*----------- Left side text section ------------ */}
        <div className="w-full md:w-5/12">
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-sansationBold text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] text-center md:text-start">
              <span className="text-[#1DA599]">{t.whyChoose.highlight}</span>{" "}
              {t.whyChoose.rest}
            </h3>
            <p className="font-sansationRegular text-[#454545] leading-relaxed text-base md:text-lg text-center md:text-left">
              {t.whyChoose.description}
            </p>
          </div>
        </div>

        {/*----------- Right side Image section ------------ */}
        <div className="w-full md:w-6/12 aspect-[4/3] md:aspect-[5/3] overflow-hidden rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out relative group">
          <Image
            loading="lazy"
            src={whyChooseImage}
            alt="Modern Ethiopian Property"
            className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-all duration-700 ease-in-out rounded-xl md:rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl md:rounded-2xl" />
        </div>
      </div>

      {/*------------------ section-2 What makes us different-------------- */}
      <div className="flex flex-col md:flex-row mt-16 md:mt-32 md:justify-between md:items-center gap-12">
        {/*----------- Left side Image section ------------ */}
        <div className="w-full md:w-6/12 relative">
          {/* Mobile Layout */}
          <div className="md:hidden relative">
            <div className="relative aspect-[3/4] w-full">
              <Image
                loading="lazy"
                src={whatMakesDiff1}
                alt="Quality Properties"
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

              {/* Cards Container */}
              <div className="absolute inset-4 flex flex-col justify-between">
                {/* Top Card */}
                <div className="backdrop-blur-md py-4 px-4 rounded-xl shadow-lg bg-gradient-to-br from-[#1DA599]/20 to-[#1DA599]/10 border border-white/30">
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full shadow-lg">
                      <BiSolidBuildingHouse className="w-6 h-6 text-[#1DA599]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sansationBold text-white text-base">
                        {t.cards.premium.title}
                      </h4>
                      <p className="font-sansationRegular text-white/90 text-sm leading-relaxed">
                        {t.cards.premium.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Card */}
                <div className="backdrop-blur-md py-4 px-4 rounded-xl shadow-lg bg-gradient-to-br from-[#1DA599]/20 to-[#1DA599]/10 border border-white/30">
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full shadow-lg">
                      <RiCustomerService2Line className="w-6 h-6 text-[#1DA599]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sansationBold text-white text-base">
                        {t.cards.expert.title}
                      </h4>
                      <p className="font-sansationRegular text-white/90 text-sm leading-relaxed">
                        {t.cards.expert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex h-[500px] gap-8">
            {/* left side */}
            <div className="w-1/2 h-full relative">
              <Image
                loading="lazy"
                src={whatMakesDiff1}
                alt="Quality Properties"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              {/* Quality Properties Card */}
              <div className="absolute -bottom-20 -right-20 z-20">
                <div className="backdrop-blur-md py-6 px-6 w-[380px] rounded-2xl shadow-xl bg-gradient-to-br from-[#1DA599]/10 to-[#1DA599]/5 border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <BiSolidBuildingHouse className="w-8 h-8 text-[#1DA599]" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-sansationBold text-[#1DA599] text-lg">
                        {t.cards.premium.title}
                      </h4>
                      <p className="font-sansationRegular text-[#454545] text-sm leading-relaxed">
                        {t.cards.premium.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="w-1/2 h-full relative">
              {/* Customer Satisfaction Card */}
              <div className="absolute -top-20 -left-20 z-20">
                <div className="backdrop-blur-md py-6 px-6 w-[380px] rounded-2xl shadow-xl bg-gradient-to-br from-[#1DA599]/10 to-[#1DA599]/5 border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <RiCustomerService2Line className="w-8 h-8 text-[#1DA599]" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-sansationBold text-[#1DA599] text-lg">
                        {t.cards.expert.title}
                      </h4>
                      <p className="font-sansationRegular text-[#454545] text-sm leading-relaxed">
                        {t.cards.expert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Image
                loading="lazy"
                src={whatMakesDiff2}
                alt="Expert Service"
                className="w-full h-full object-cover rounded-2xl shadow-xl mt-24"
              />
            </div>
          </div>
        </div>

        {/*----------- Right side text section ------------ */}
        <div className="w-full md:w-5/12 space-y-6 md:space-y-8">
          <h3 className="font-sansationBold text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] text-center md:text-left">
            <span className="text-[#1DA599]">What</span> Makes Us Different?
          </h3>

          <div className="space-y-6">
            {/*-------------- Feature 1 ------------ */}
            <div className="group flex gap-4 md:gap-6 items-start transform hover:-translate-y-1 transition-all duration-300 bg-white/50 hover:bg-white/80 p-4 rounded-xl">
              <div className="border-2 border-[#1DA599] text-[#1DA599] rounded-full p-2 md:p-3 text-xl md:text-2xl w-fit h-fit group-hover:bg-[#1DA599] group-hover:text-white group-hover:rotate-12 transition-all duration-300">
                <MdSecurity className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="space-y-1 md:space-y-2">
                <h4 className="font-sansationBold text-lg md:text-xl text-[#1DA599] group-hover:translate-x-2 transition-all duration-300">
                  {t.features.property.title}
                </h4>
                <p className="font-sansationRegular text-[#454545] leading-relaxed text-sm md:text-base">
                  {t.features.property.description}
                </p>
              </div>
            </div>

            {/*-------------- Feature 2 ------------ */}
            <div className="group flex gap-4 md:gap-6 items-start transform hover:-translate-y-1 transition-all duration-300 bg-white/50 hover:bg-white/80 p-4 rounded-xl">
              <div className="border-2 border-[#1DA599] text-[#1DA599] rounded-full p-2 md:p-3 text-xl md:text-2xl w-fit h-fit group-hover:bg-[#1DA599] group-hover:text-white group-hover:rotate-12 transition-all duration-300">
                <FaHandshakeSimple className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="space-y-1 md:space-y-2">
                <h4 className="font-sansationBold text-lg md:text-xl text-[#1DA599] group-hover:translate-x-2 transition-all duration-300">
                  {t.features.expertise.title}
                </h4>
                <p className="font-sansationRegular text-[#454545] leading-relaxed text-sm md:text-base">
                  {t.features.expertise.description}
                </p>
              </div>
            </div>

            {/*-------------- Feature 3 ------------ */}
            <div className="group flex gap-4 md:gap-6 items-start transform hover:-translate-y-1 transition-all duration-300 bg-white/50 hover:bg-white/80 p-4 rounded-xl">
              <div className="border-2 border-[#1DA599] text-[#1DA599] rounded-full p-2 md:p-3 text-xl md:text-2xl w-fit h-fit group-hover:bg-[#1DA599] group-hover:text-white group-hover:rotate-12 transition-all duration-300">
                <MdLocationOn className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="space-y-1 md:space-y-2">
                <h4 className="font-sansationBold text-lg md:text-xl text-[#1DA599] group-hover:translate-x-2 transition-all duration-300">
                  {t.features.location.title}
                </h4>
                <p className="font-sansationRegular text-[#454545] leading-relaxed text-sm md:text-base">
                  {t.features.location.description}
                </p>
              </div>
            </div>

            <Button className="w-full md:w-auto mt-8 bg-gradient-to-r from-[#1DA599] to-[#18877e] font-sansationRegular rounded-xl h-12 px-8 text-base hover:scale-[0.98] hover:shadow-lg transition-all duration-300">
              {t.button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
