"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { propertyOwnerPricingMessages } from "@/messages/property_owner_pricing";
import { useLanguage } from "@/context/LanguageContext";

export default function PropertyPricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const { language } = useLanguage();
  const t = propertyOwnerPricingMessages[language];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-[2rem] md:text-[2.4rem] font-sansationBold leading-tight mb-4">
          {t.title.part1}{" "}
          <span className="text-[#1DA599]">{t.title.part2}</span>
          <br />
          {t.title.part3}
        </h1>
        <p className="font-sansationRegular text-[#454545] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mb-16">
        <span className="text-sm font-sansationRegular">
          {t.paymentToggle.monthly}
        </span>
        <div
          className="relative w-12 h-6 bg-gray-200 rounded-full cursor-pointer flex items-center"
          onClick={() => setIsYearly(!isYearly)}
        >
          <div
            className={cn(
              "absolute w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ease-in-out",
              isYearly ? "translate-x-6" : "translate-x-1"
            )}
          ></div>
        </div>
        <span className="text-sm font-sansationRegular">
          {t.paymentToggle.yearly}
        </span>
        <div className="flex items-center">
          <svg
            width="107"
            height="88"
            viewBox="0 0 107 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 -mt-2"
          >
            <g id="Arrow 2">
              <g id="Group 39866">
                <path
                  id="Vector 210"
                  d="M95.4428 61.597C83.1537 64.6606 68.4802 65.2428 57.6803 57.5055C50.7785 52.5608 47.1135 42.5623 49.6929 34.4467C52.1289 26.782 57.8176 20.0477 66.3422 20.253C70.7855 20.3599 74.6166 22.4042 75.4255 27.0835C76.6612 34.2324 69.5296 41.6303 63.8594 44.74C46.1637 54.4447 21.1305 53.9047 4.27332 42.6402"
                  stroke="#1DA599"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  id="Vector 219"
                  d="M11.6992 55.844C9.63726 52.9627 5.13451 46.2411 3.61925 42.4047"
                  stroke="#1DA599"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  id="Vector 220"
                  d="M3.62109 42.405C7.13374 41.9415 15.1181 40.6358 18.9545 39.1205"
                  stroke="#1DA599"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            </g>
          </svg>
          <span className="text-[#1DA599] font-sansationRegular">
            {t.paymentToggle.saveText}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Free Plan */}
        <div className="flex flex-col h-full">
          <h2 className="text-xl font-sansationBold mb-2">
            {t.freePlan.title}
          </h2>
          <div className="flex items-center gap-1 mb-4">
            <span className="text-xl font-sansationBold">
              {t.freePlan.price}
            </span>
            <span className="text-xs text-gray-500 font-sansationRegular">
              {t.freePlan.period}
            </span>
          </div>

          <button className="w-full border border-gray-300 rounded py-2 mb-6 text-sm hover:bg-gray-50 transition-colors font-sansationRegular">
            {t.freePlan.button}
          </button>

          <div className="space-y-3 mb-6">
            {Object.values(t.freePlan.features).map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-[#E6F7F6] flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3 text-[#1DA599]" />
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <h3 className="text-[#1DA599] font-medium text-sm mb-2">
              {t.freePlan.benefitsTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              {t.freePlan.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Basic Plan */}
        <div className="flex flex-col h-full">
          <h2 className="text-xl font-sansationBold mb-2">
            {t.basicPlan.title}
          </h2>
          <div className="flex items-center gap-1 mb-4">
            <span className="text-xl font-sansationBold">
              {isYearly ? t.basicPlan.priceYearly : t.basicPlan.priceMonthly}
            </span>
            <span className="text-xs text-gray-500 font-sansationRegular">
              {isYearly ? "/ Year" : "/ Month"}
            </span>
          </div>

          <button className="w-full border border-gray-300 rounded py-2 mb-6 text-sm hover:bg-gray-50 transition-colors font-sansationRegular">
            {t.basicPlan.button}
          </button>

          <div className="space-y-3 mb-6">
            {Object.values(t.basicPlan.features).map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-[#E6F7F6] flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3 text-[#1DA599]" />
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <h3 className="text-[#1DA599] font-medium text-sm mb-2">
              {t.basicPlan.benefitsTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              {t.basicPlan.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#1DA599] text-white rounded-lg p-6 flex flex-col h-full shadow-lg relative z-10">
          <h2 className="text-xl font-sansationBold mb-2">{t.proPlan.title}</h2>
          <div className="flex items-center gap-1 mb-4">
            <span className="text-xl font-sansationBold">
              {isYearly ? t.proPlan.priceYearly : t.proPlan.priceMonthly}
            </span>
            <span className="text-xs opacity-80 font-sansationRegular">
              {isYearly ? "/ Year" : "/ Month"}
            </span>
          </div>

          <button className="w-full bg-white text-[#1DA599] rounded py-2 mb-6 text-sm hover:bg-gray-50 transition-colors font-sansationRegular">
            {t.proPlan.button}
          </button>

          <div className="space-y-3 mb-6">
            {Object.values(t.proPlan.features).map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-sansationRegular">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <h3 className="text-white font-medium text-sm mb-2">
              {t.proPlan.benefitsTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              {t.proPlan.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="flex flex-col h-full">
          <h2 className="text-xl font-sansationBold mb-2">
            {t.premiumPlan.title}
          </h2>
          <div className="flex items-center gap-1 mb-4">
            <span className="text-xl font-sansationBold">
              {isYearly
                ? t.premiumPlan.priceYearly
                : t.premiumPlan.priceMonthly}
            </span>
            <span className="text-xs text-gray-500 font-sansationRegular">
              {isYearly ? "/ Year" : "/ Month"}
            </span>
          </div>

          <button className="w-full border border-gray-300 rounded py-2 mb-6 text-sm hover:bg-gray-50 transition-colors font-sansationRegular">
            {t.premiumPlan.button}
          </button>

          <div className="space-y-3 mb-6">
            {Object.values(t.premiumPlan.features).map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-[#E6F7F6] flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3 text-[#1DA599]" />
                </div>
                <span className="text-sm font-sansationRegular">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <h3 className="text-[#1DA599] font-medium text-sm mb-2">
              {t.premiumPlan.benefitsTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              {t.premiumPlan.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
