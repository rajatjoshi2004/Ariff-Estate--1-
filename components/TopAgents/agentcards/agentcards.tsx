"use client";

import React, { useState } from "react";
import AgentCard from "./agentheadercard";
import { HiSearch } from "react-icons/hi";
import { useLanguage } from "../../../context/LanguageContext";

interface Agent {
  id: string;
  image: string;
  name: string;
  location: string;
  experience: number;
  rating: number;
  totalReviews: number;
  phone: string;
  verified: boolean;
  totalSales: number;
  specialization: string;
  languages: string[];
}

interface AgentCardsProps {
  agents: Agent[];
}

const translations = {
  en: {
    searchPlaceholder: "Search top agents by name or specialization...",
    noResults: "No agents found matching your search.",
  },
  am: {
    searchPlaceholder: "በስም ወይም በስፔሻላይዜሽን ከፍተኛ ወኪሎችን ይፈልጉ...",
    noResults: "ከፍለጋዎ ጋር የሚዛመድ ወኪል አልተገኘም።",
  },
};

const AgentCards: React.FC<AgentCardsProps> = ({ agents }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.specialization.toLowerCase().includes(searchTerm.toLowerCase())
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
      </div>
    </div>
  );
};

export default AgentCards;
