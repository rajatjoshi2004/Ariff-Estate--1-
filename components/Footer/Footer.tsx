"use client";

import React from "react";
import { Button } from "../ui/button";
import { useLanguage } from "../../context/LanguageContext";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const translations = {
  en: {
    cta: {
      title: "Ready to Find Your Dream Home?",
      subtitle: "Connect with our expert agents today",
      contactAgent: "Contact Agent",
      scheduleViewing: "Schedule Viewing",
    },
    about: {
      title: "Ariff Location",
      description:
        "Your trusted partner in Ethiopian real estate. We're committed to helping you find the perfect property that matches your lifestyle and investment goals.",
    },
    quickLinks: {
      title: "Quick Links",
      items: [
        { label: "Properties for Sale", href: "/for-sale" },
        { label: "Properties for Rent", href: "/for-rent" },
        { label: "New Developments", href: "/new-developments" },
        { label: "Market Updates", href: "/market-updates" },
        { label: "Agent Directory", href: "/top-agents" },
      ],
    },
    support: {
      title: "Support",
      items: [
        { label: "Help Center", href: "/help" },
        { label: "FAQs", href: "/faqs" },
        { label: "Contact Support", href: "/contact" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    contact: {
      title: "Contact Info",
      phone: "+251 911 123 456",
      hours: {
        title: "Business Hours",
        weekday: "Monday - Friday: 9:00 AM - 6:00 PM",
        saturday: "Saturday: 10:00 AM - 4:00 PM",
      },
    },
    footer: {
      copyright: "© 2024 Ariff Location. All rights reserved.",
      links: {
        terms: "Terms",
        privacy: "Privacy",
        cookies: "Cookies",
      },
    },
  },
  am: {
    cta: {
      title: "የህልም ቤትዎን ለማግኘት ዝግጁ ነዎት?",
      subtitle: "ዛሬ ከሙያዊ ወኪሎቻችን ጋር ይገናኙ",
      contactAgent: "ወኪል ያግኙ",
      scheduleViewing: "ቤት ለማየት ቀጠሮ ይያዙ",
    },
    about: {
      title: "አሪፍ ሎኬሽን",
      description:
        "በኢትዮጵያ ሪል እስቴት የእርስዎ የታመነ አጋር። ከህይወት ዘይቤዎ እና የኢንቨስትመንት ግቦችዎ ጋር የሚጣጣም ፍጹም ንብረት እንዲያገኙ ለመርዳት ቁርጠኞች ነን።",
    },
    quickLinks: {
      title: "ፈጣን ማስፈንጠሪያዎች",
      items: [
        { label: "ለሽያጭ የቀረቡ ንብረቶች", href: "/for-sale" },
        { label: "ለኪራይ የቀረቡ ንብረቶች", href: "/for-rent" },
        { label: "አዳዲስ ግንባታዎች", href: "/new-developments" },
        { label: "የገበያ ዝማኔዎች", href: "/market-updates" },
        { label: "የወኪሎች ማውጫ", href: "/top-agents" },
      ],
    },
    support: {
      title: "ድጋፍ",
      items: [
        { label: "የእርዳታ ማዕከል", href: "/help" },
        { label: "ተደጋጋሚ ጥያቄዎች", href: "/faqs" },
        { label: "ድጋፍ ያግኙ", href: "/contact" },
        { label: "የአገልግሎት ውሎች", href: "/terms" },
        { label: "የግላዊነት ፖሊሲ", href: "/privacy" },
      ],
    },
    contact: {
      title: "የመገናኛ መረጃ",
      phone: "+251 911 123 456",
      hours: {
        title: "የስራ ሰዓታት",
        weekday: "ሰኞ - አርብ፡ 9:00 ጠዋት - 6:00 ማታ",
        saturday: "ቅዳሜ፡ 10:00 ጠዋት - 4:00 ከሰዓት",
      },
    },
    footer: {
      copyright: "© 2024 አሪፍ ሎኬሽን። መብቱ በህግ የተጠበቀ ነው።",
      links: {
        terms: "መስፈርቶች",
        privacy: "ግላዊነት",
        cookies: "ኩኪዎች",
      },
    },
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="w-full bg-gradient-to-b from-white via-[#1DA599]/5 to-white pt-16">
      {/* Top Section with CTA */}
      <div className="w-[96%] mx-auto bg-gradient-to-r from-[#1DA599] to-[#18877e] rounded-2xl p-8 sm:p-12 mb-16 relative overflow-hidden">
        <div className="absolute inset-0  opacity-10"></div>
        <div className="relative flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-white">
            <h3 className="text-2xl sm:text-3xl font-sansationBold mb-2">
              {t.cta.title}
            </h3>
            <p className="font-sansationRegular text-white/90">
              {t.cta.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-white text-[#1DA599] hover:bg-white/90 font-sansationRegular rounded-xl px-6 py-5 text-base w-full sm:w-auto">
                <HiOutlinePhone className="mr-2 text-lg" />
                {t.cta.contactAgent}
              </Button>
            </Link>
            <Link href="/schedule-viewing">
              <Button className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 font-sansationRegular rounded-xl px-6 py-5 text-base w-full sm:w-auto">
                <MdOutlineRealEstateAgent className="mr-2 text-lg" />
                {t.cta.scheduleViewing}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-[96%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-gray-200">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="font-sansationBold text-2xl text-[#1DA599]">
              {t.about.title}
            </h3>
            <p className="font-sansationRegular text-[#454545] text-sm leading-relaxed">
              {t.about.description}
            </p>
            <div className="flex items-center gap-4">
              {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1DA599]/10 flex items-center justify-center text-[#1DA599] hover:bg-[#1DA599] hover:text-white transition-colors duration-300"
                  >
                    <Icon className="text-lg" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sansationBold text-xl mb-6">
              {t.quickLinks.title}
            </h4>
            <ul className="space-y-4 font-sansationRegular text-[#454545]">
              {t.quickLinks.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-[#1DA599] cursor-pointer transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-sansationBold text-xl mb-6">
              {t.support.title}
            </h4>
            <ul className="space-y-4 font-sansationRegular text-[#454545]">
              {t.support.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-[#1DA599] cursor-pointer transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sansationBold text-xl mb-6">
              {t.contact.title}
            </h4>
            <ul className="space-y-4 font-sansationRegular text-[#454545]">
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="text-[#1DA599] text-xl mt-1" />
                <span>{t.contact.phone}</span>
              </li>
              <li className="bg-[#1DA599]/10 p-4 rounded-xl">
                <p className="font-sansationBold text-[#1DA599] mb-2">
                  {t.contact.hours.title}
                </p>
                <p className="text-sm">{t.contact.hours.weekday}</p>
                <p className="text-sm">{t.contact.hours.saturday}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sansationRegular text-sm text-[#454545]">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6 font-sansationRegular text-sm text-[#454545]">
            <Link
              href="/terms"
              className="hover:text-[#1DA599] transition-colors"
            >
              {t.footer.links.terms}
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#1DA599] transition-colors"
            >
              {t.footer.links.privacy}
            </Link>
            <Link
              href="/cookies"
              className="hover:text-[#1DA599] transition-colors"
            >
              {t.footer.links.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
