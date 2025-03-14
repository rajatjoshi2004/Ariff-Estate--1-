"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const translations = {
  en: {
    title: "Cookie Policy",
    lastUpdated: "Last Updated: March 11, 2025",
    intro:
      "This Cookie Policy explains how Ariff Location uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
    sections: [
      {
        title: "What are cookies?",
        content:
          "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.",
      },
      {
        title: "How do we use cookies?",
        content: "We use cookies for several purposes, including:",
        list: [
          "To enable certain functions of the website",
          "To provide analytics",
          "To store your preferences",
          "To enable advertisement delivery",
        ],
      },
      {
        title: "Types of cookies we use",
        content: "The cookies we use can be categorized as follows:",
        list: [
          "Essential cookies: Necessary for the website to function properly",
          "Analytics cookies: Help us understand how visitors interact with our website",
          "Preference cookies: Enable the website to remember your preferences",
          "Marketing cookies: Used to track visitors across websites",
        ],
      },
      {
        title: "How to control cookies",
        content:
          "You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality may be restricted.",
      },
    ],
  },
  am: {
    title: "የኩኪዎች ፖሊሲ",
    lastUpdated: "መጨረሻ የተሰራ: መጋቢት 11, 2025",
    intro:
      "ይህ የኩኪዎች ፖሊሲ አሪፍ ሎኬሽን ድህረ ገጻችንን ሲጎበኙ እርስዎን ለመለየት እንዴት ኩኪዎችን እና ተመሳሳይ ቴክኖሎጂዎችን እንደሚጠቀም ያብራራል። እነዚህ ቴክኖሎጂዎች ምን እንደሆኑ እና ለምን እንደምንጠቀምባቸው እንዲሁም እነዚህን የመቆጣጠር መብትዎን ያብራራል።",
    sections: [
      {
        title: "ኩኪዎች ምንድን ናቸው?",
        content:
          "ኩኪዎች አንድን ድህረ ገጽ ሲጎበኙ በኮምፒውተርዎ ወይም በሞባይል መሳሪያዎ ላይ የሚቀመጡ አነስተኛ የመረጃ ፋይሎች ናቸው። ኩኪዎች በድህረ ገጽ ባለቤቶች ድህረ ገጾቻቸውን እንዲሰሩ ወይም በተሻለ ሁኔታ እንዲሰሩ ለማድረግ እንዲሁም የሪፖርት መረጃ ለመስጠት በሰፊው ጥቅም ላይ ይውላሉ።",
      },
      {
        title: "ኩኪዎችን እንዴት እንጠቀማለን?",
        content: "ኩኪዎችን ለተለያዩ ዓላማዎች እንጠቀማለን፣ ከነዚህም መካከል፡-",
        list: [
          "የድህረ ገጹን የተወሰኑ ተግባራት ለማስቻል",
          "ትንተና ለመስጠት",
          "ምርጫዎችዎን ለማስቀመጥ",
          "ማስታወቂያ ለማድረስ",
        ],
      },
      {
        title: "የምንጠቀምባቸው የኩኪ ዓይነቶች",
        content: "የምንጠቀምባቸው ኩኪዎች እንደሚከተለው ሊከፈሉ ይችላሉ፡-",
        list: [
          "አስፈላጊ ኩኪዎች፡ ድህረ ገጹ በአግባቡ እንዲሰራ አስፈላጊ የሆኑ",
          "የትንተና ኩኪዎች፡ ጎብኝዎች ከድህረ ገጻችን ጋር እንዴት እንደሚገናኙ እንድንረዳ የሚረዱ",
          "የምርጫ ኩኪዎች፡ ድህረ ገጹ ምርጫዎችዎን እንዲያስታውስ የሚያስችሉ",
          "የማርኬቲንግ ኩኪዎች፡ ጎብኝዎችን በተለያዩ ድህረ ገጾች ለመከታተል የሚያገለግሉ",
        ],
      },
      {
        title: "ኩኪዎችን እንዴት መቆጣጠር ይቻላል",
        content:
          "ኩኪዎችን ለመቀበል ወይም ለመከልከል የድረ ገጽ አሳሽዎን መቆጣጠሪያዎችን ማቀናበር ይችላሉ። ኩኪዎችን ለመከልከል ቢመርጡ፣ አንዳንድ ተግባራት ላይ ገደብ ሊጣልብዎት ቢችልም፣ ድህረ ገጻችንን ማግኘት ይችላሉ።",
      },
    ],
  },
};

const CookiesPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50/50">
        <div className="max-w-[1440px] w-11/12 mx-auto py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-[2.5rem] lg:text-[3rem] font-sansationBold text-[#1DA599] mb-4">
              {t.title}
            </h1>
            <p className="text-gray-500 mb-8">{t.lastUpdated}</p>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              {t.intro}
            </p>

            <div className="space-y-12">
              {t.sections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-sansationBold text-[#1DA599] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiesPage;
