"use client";

import React, { useState } from "react";
import AgentCard from "./agentheadercard";
import { HiSearch } from "react-icons/hi";
import { useLanguage } from "../../../context/LanguageContext";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Agent {
  id: string;
  image: string;
  name: string;
  location: string;
  experience: number;
  rating: number;
  totalReviews: number;
  phone: string;
  email: string;
  verified: boolean;
}

interface AgentCardsProps {
  agents: Agent[];
}

const translations = {
  en: {
    searchPlaceholder: "Search agents by name...",
    noResults: "No agents found matching your search.",
    viewAll: "View All Agents",
  },
  am: {
    searchPlaceholder: "በስም ወኪሎችን ይፈልጉ...",
    noResults: "ከፍለጋዎ ጋር የሚዛመድ ወኪል አልተገኘም።",
    viewAll: "ሁሉንም ወኪሎች ይመልከቱ",
  },
};

const AgentCards: React.FC<AgentCardsProps> = ({ agents }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full mt-8 pb-8">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="flex justify-end mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full px-6 py-3 pl-14 rounded-xl border-2 border-[#1DA599]/10 focus:border-[#1DA599] focus:ring-1 focus:ring-[#1DA599] outline-none font-sansationRegular text-base bg-[#1DA599]/5 transition-all duration-300"
            />
            <HiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-[#1DA599]" />
          </div>
        </div>

        {/* Cards Grid */}
        {filteredAgents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredAgents.map((agent) => (
              <div key={agent.id}>
                <AgentCard {...agent} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 font-sansationRegular text-lg">
              {t.noResults}
            </p>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/agents"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-[#1DA599] text-[#1DA599] hover:bg-[#1DA599] hover:text-white transition-all duration-300 group"
          >
            <span>{t.viewAll}</span>
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentCards;
