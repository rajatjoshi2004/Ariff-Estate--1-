"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { MapPin, Home, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useLanguage } from "../../../context/LanguageContext";
import Link from "next/link";

interface AgentCardProps {
  id: string;
  name: string;
  location: string;
  experience: number;
  rating: number;
  phone: string;
  verified: boolean;
}

const translations = {
  en: {
    verified: "Verified",
    properties: "Properties Sold",
    contact: "Contact Agent",
    senior: "Senior Real Estate Advisor",
    commercial: "Commercial Real Estate Agent",
    specialist: "First-Time Home Buyer Specialist",
    negotiation: "Real Estate Negotiation Expert",
    luxury: "Luxury Property Specialist",
    relocation: "Relocation Specialist",
    viewMore: "View Full Profile",
    contactTitle: "Contact Agent",
    contactDesc: "Get in touch with this agent directly",
    phoneLabel: "Phone",
    emailLabel: "Email",
    messageLabel: "Send Message",
    messagePlaceholder: "Write your message here...",
    send: "Send Message",
    close: "Close",
  },
  am: {
    verified: "የተረጋገጠ",
    properties: "የተሸጡ ንብረቶች",
    contact: "ወኪልን አግኙ",
    senior: "ከፍተኛ የሪል እስቴት አማካሪ",
    commercial: "የንግድ ሪል እስቴት ወኪል",
    specialist: "የመጀመሪያ ጊዜ ገዢ ስፔሺያሊስት",
    negotiation: "የሪል እስቴት ድርድር ባለሙያ",
    luxury: "የፍቅር ንብረት ስፔሺያሊስት",
    relocation: "የመዛወሪያ ስፔሺያሊስት",
    viewMore: "ሙሉ መገለጫ ይመልከቱ",
    contactTitle: "ወኪልን አግኙ",
    contactDesc: "ከዚህ ወኪል ጋር በቀጥታ ያግኙ",
    phoneLabel: "ስልክ",
    emailLabel: "ኢሜይል",
    messageLabel: "መልእክት ይላኩ",
    messagePlaceholder: "መልእክትዎን እዚህ ይጻፉ...",
    send: "መልእክት ይላኩ",
    close: "ዝጋ",
  },
};

const AgentCard: React.FC<AgentCardProps> = ({
  id,
  name,
  location,
  experience,
  rating,
  phone,
  verified,
}) => {
  const [showContactModal, setShowContactModal] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Use images from the specified directory
  const sampleImages = [
    "/Images/agent/agent1.jpg",
    "/Images/agent/agent2.jpg",
    "/Images/agent/agent3.jpg",
    "/Images/agent/agent4.jpg",
  ];

  const selectedImage = sampleImages[parseInt(id) % sampleImages.length];
  const propertiesSold = 250 + ((parseInt(id) * 17) % 150);

  const getTitle = (exp: number) => {
    if (exp > 7) return t.senior;
    if (exp > 4) return t.commercial;
    if (exp > 3) return t.luxury;
    if (exp > 2) return t.negotiation;
    return t.specialist;
  };

  return (
    <>
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-[500px] flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-[240px] overflow-hidden">
          <Image
            src={selectedImage}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            priority
          />
          {verified && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-[#1DA599]/80 to-[#18877e]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sansationBold text-sm shadow-lg flex items-center gap-1.5 border border-white/10">
              <MdVerified className="text-base" />
              <span>{t.verified}</span>
            </div>
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Name and Rating */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-medium text-[#1DA599]">{name}</h3>
            <div className="flex items-center bg-[#1DA599]/10 px-2 py-1 rounded-lg">
              <FaStar className="text-[#1DA599] mr-1 text-sm" />
              <span className="font-medium text-sm text-gray-700">
                {rating}
              </span>
            </div>
          </div>

          {/* Title */}
          <p className="text-[13px] text-gray-600 mb-3">
            {getTitle(experience)}
          </p>

          {/* Location */}
          <div className="flex items-center mb-3">
            <MapPin className="h-4 w-4 mr-1.5 text-[#1DA599]" />
            <span className="text-sm text-gray-600">{location}</span>
          </div>

          {/* Properties Sold */}
          <div className="flex items-center mb-4">
            <Home className="h-4 w-4 mr-1.5 text-[#1DA599]" />
            <span className="text-sm text-gray-600">
              {propertiesSold} {t.properties}
            </span>
          </div>

          {/* Contact Button */}
          <Button
            variant="outline"
            onClick={() => setShowContactModal(true)}
            className="w-full bg-[#1DA599]/10 hover:bg-[#1DA599]/20 text-[#1DA599] border-0 rounded-lg py-2 text-sm font-medium transition-colors duration-300 mb-4"
          >
            {t.contact}
          </Button>

          {/* View More Link */}
          <Link
            href={`/agents/${id}`}
            className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100"
          >
            <span className="text-sm font-medium text-[#1DA599]">
              {t.viewMore}
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#1DA599] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-medium text-gray-900">
                {t.contactTitle}
              </h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                {t.close}
              </button>
            </div>

            <p className="text-gray-600 mb-6">{t.contactDesc}</p>

            {/* Agent Quick Info */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-6">
              <div className="w-16 h-16 relative rounded-full overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{name}</h4>
                <p className="text-sm text-gray-600">{getTitle(experience)}</p>
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-[#1DA599] transition-colors">
                <Phone className="w-5 h-5 text-[#1DA599]" />
                <div>
                  <div className="text-sm text-gray-500">{t.phoneLabel}</div>
                  <div className="font-medium">{phone}</div>
                </div>
              </div>

              {/* Message Form */}
              <div className="space-y-4">
                <textarea
                  placeholder={t.messagePlaceholder}
                  className="w-full h-32 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1DA599] focus:ring-1 focus:ring-[#1DA599] outline-none resize-none"
                />
                <Button className="w-full bg-[#1DA599] hover:bg-[#18877e] text-white py-3 rounded-lg flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  {t.send}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgentCard;
