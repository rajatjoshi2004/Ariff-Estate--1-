"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calculator,
  FileText,
  ArrowUpRight,
  Home,
  DollarSign,
  Building2,
  Key,
  Lightbulb,
  Scale,
  Clock,
  Eye,
} from "lucide-react";

const translations = {
  en: {
    featuredTitle: "Featured Articles",
    popularTitle: "Popular Resources",
    categoriesTitle: "Browse by Category",
    latestTitle: "Latest Resources",
    readTime: "min read",
    views: "views",
    categories: {
      buyingGuide: {
        title: "Buying Guide",
        description: "Essential tips and steps for buying property in Ethiopia",
      },
      mortgageCalculator: {
        title: "Mortgage Calculator",
        description: "Calculate your monthly mortgage payments and costs",
      },
      marketTrends: {
        title: "Market Trends",
        description: "Latest real estate market trends and analysis",
      },
      legalGuide: {
        title: "Legal Guide",
        description: "Understanding property laws and regulations",
      },
      investmentTips: {
        title: "Investment Tips",
        description: "Smart strategies for real estate investment",
      },
      propertyManagement: {
        title: "Property Management",
        description: "Tips for managing and maintaining your property",
      },
    },
    viewMore: "View More",
  },
  am: {
    featuredTitle: "የተለዩ መጣጥፎች",
    popularTitle: "ታዋቂ መረጃዎች",
    categoriesTitle: "በምድብ ያስሱ",
    latestTitle: "አዲስ መረጃዎች",
    readTime: "ደቂቃ ንባብ",
    views: "ተመልካቾች",
    categories: {
      buyingGuide: {
        title: "የግዢ መመሪያ",
        description: "በኢትዮጵያ ንብረት ለመግዛት አስፈላጊ ምክሮች እና ደረጃዎች",
      },
      mortgageCalculator: {
        title: "የብድር ካልኩሌተር",
        description: "የወርሃዊ የብድር ክፍያዎችን እና ወጪዎችን ያስላሉ",
      },
      marketTrends: {
        title: "የገበያ አዝማሚያዎች",
        description: "የቅርብ ጊዜ የንብረት ገበያ አዝማሚያዎች እና ትንተና",
      },
      legalGuide: {
        title: "የህግ መመሪያ",
        description: "የንብረት ህጎችን እና ደንቦችን መረዳት",
      },
      investmentTips: {
        title: "የኢንቨስትመንት ምክሮች",
        description: "ለንብረት ኢንቨስትመንት ብልህ ስልቶች",
      },
      propertyManagement: {
        title: "የንብረት አስተዳደር",
        description: "ንብረትዎን ለማስተዳደር እና ለመጠበቅ ምክሮች",
      },
    },
    viewMore: "ተጨማሪ ይመልከቱ",
  },
};

const featuredArticles = [
  {
    id: 1,
    title: "Complete Guide to Buying Property in Ethiopia 2024",
    description:
      "Everything you need to know about purchasing real estate in Ethiopia's growing market",
    image: "/Images/1.png",
    readTime: 12,
    views: 2500,
    category: "Buying Guide",
  },
  {
    id: 2,
    title: "Understanding Property Investment Returns",
    description:
      "Learn how to calculate and maximize your real estate investment returns",
    image: "/Images/2.png",
    readTime: 8,
    views: 1800,
    category: "Investment",
  },
  {
    id: 3,
    title: "Legal Requirements for Property Purchase",
    description:
      "A comprehensive guide to legal documentation and requirements",
    image: "/Images/3.png",
    readTime: 10,
    views: 2100,
    category: "Legal",
  },
  {
    id: 4,
    title: "Real Estate Market Trends 2024",
    description: "Analysis of current market trends and future predictions",
    image: "/Images/4.png",
    readTime: 15,
    views: 3200,
    category: "Market Analysis",
  },
];

const icons = {
  buyingGuide: Home,
  mortgageCalculator: Calculator,
  marketTrends: DollarSign,
  legalGuide: Scale,
  investmentTips: Lightbulb,
  propertyManagement: Building2,
};

const ResourcesGrid = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-16">
      {/* Featured Articles */}
      <section className="mb-16">
        <h2 className="text-2xl font-sansationBold text-gray-900 mb-8">
          {t.featuredTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((article) => (
            <Link
              href={`/resources/article/${article.id}`}
              key={article.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#1DA599]">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>
                      {article.readTime} {t.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>
                      {article.views.toLocaleString()} {t.views}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-sansationBold text-gray-900 mb-8">
          {t.categoriesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(t.categories).map(([key, category]) => {
            const Icon = icons[key as keyof typeof icons];
            return (
              <Link
                href={`/resources/${key}`}
                key={key}
                className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/Images/pattern.svg')] opacity-5 transform rotate-45" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1DA599] to-[#157a72] flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-sansationBold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-2 min-h-[48px]">
                    {category.description}
                  </p>
                  <div className="flex items-center text-[#1DA599] font-medium">
                    <span className="text-base">{t.viewMore}</span>
                    <ArrowUpRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ResourcesGrid;
