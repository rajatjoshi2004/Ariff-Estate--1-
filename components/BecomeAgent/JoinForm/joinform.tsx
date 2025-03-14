"use client";

import React, { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaMapMarkerAlt,
  FaLanguage,
  FaLinkedin,
  FaGraduationCap,
  FaBuilding,
  FaHome,
  FaCity,
  FaDollarSign,
  FaCheck,
  FaClock,
  FaTimesCircle,
  FaChevronDown,
} from "react-icons/fa";

const translations = {
  en: {
    title: "Start Your Journey",
    description:
      "Fill out the application below to begin your career with Ariff Estate.",
    form: {
      personalInfo: {
        title: "Personal Information",
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        location: "Preferred Location",
        languages: "Languages Spoken",
      },
      professionalInfo: {
        title: "Professional Background",
        experience: {
          label: "Years of Experience",
          options: [
            { value: "0-1", label: "Less than 1 year", icon: FaClock },
            { value: "1-3", label: "1-3 years", icon: FaBriefcase },
            { value: "3-5", label: "3-5 years", icon: FaBriefcase },
            { value: "5-10", label: "5-10 years", icon: FaBriefcase },
            { value: "10+", label: "10+ years", icon: FaGraduationCap },
          ],
        },
        specialization: {
          label: "Area of Specialization",
          options: [
            {
              value: "residential",
              label: "Residential Properties",
              icon: FaHome,
            },
            {
              value: "commercial",
              label: "Commercial Properties",
              icon: FaBuilding,
            },
            { value: "luxury", label: "Luxury Properties", icon: FaDollarSign },
            {
              value: "investment",
              label: "Investment Properties",
              icon: FaCity,
            },
          ],
        },
        linkedin: "LinkedIn Profile (Optional)",
        license: {
          label: "Real Estate License",
          options: [
            { value: "yes", label: "Yes, I have a license", icon: FaCheck },
            {
              value: "no",
              label: "No, but willing to obtain one",
              icon: FaClock,
            },
            {
              value: "pending",
              label: "Currently in process",
              icon: FaTimesCircle,
            },
          ],
        },
      },
      about: {
        title: "About You",
        bio: "Professional Bio",
        bioPlaceholder:
          "Tell us about your background, achievements, and why you want to join Ariff Estate",
      },
      submit: "Submit Application",
      success: "Application submitted successfully! We'll be in touch soon.",
      error: "Error submitting application. Please try again.",
    },
  },
  am: {
    title: "ጉዞዎን ይጀምሩ",
    description: "ከአሪፍ እስቴት ጋር ሙያዎን ለመጀመር ከዚህ በታች ያለውን ማመልከቻ ይሙሉ።",
    form: {
      personalInfo: {
        title: "የግል መረጃ",
        fullName: "ሙሉ ስም",
        email: "የኢሜይል አድራሻ",
        phone: "ስልክ ቁጥር",
        location: "የመረጡት አካባቢ",
        languages: "የሚናገሩት ቋንቋዎች",
      },
      professionalInfo: {
        title: "ሙያዊ ዳራ",
        experience: {
          label: "የልምድ ዓመታት",
          options: [
            { value: "0-1", label: "Less than 1 year", icon: FaClock },
            { value: "1-3", label: "1-3 years", icon: FaBriefcase },
            { value: "3-5", label: "3-5 years", icon: FaBriefcase },
            { value: "5-10", label: "5-10 years", icon: FaBriefcase },
            { value: "10+", label: "10+ years", icon: FaGraduationCap },
          ],
        },
        specialization: {
          label: "የስፔሻላይዜሽን መስክ",
          options: [
            {
              value: "residential",
              label: "Residential Properties",
              icon: FaHome,
            },
            {
              value: "commercial",
              label: "Commercial Properties",
              icon: FaBuilding,
            },
            { value: "luxury", label: "Luxury Properties", icon: FaDollarSign },
            {
              value: "investment",
              label: "Investment Properties",
              icon: FaCity,
            },
          ],
        },
        linkedin: "የLinkedIn መገለጫ (አማራጭ)",
        license: {
          label: "የሪል እስቴት ፈቃድ",
          options: [
            { value: "yes", label: "አዎ፣ ፈቃድ አለኝ", icon: FaCheck },
            { value: "no", label: "የለም፣ ግን ለማግኘት ፈቃደኛ ነኝ", icon: FaClock },
            { value: "pending", label: "በሂደት ላይ ነው", icon: FaTimesCircle },
          ],
        },
      },
      about: {
        title: "ስለ እርስዎ",
        bio: "ሙያዊ ባዮግራፊ",
        bioPlaceholder:
          "ስለ ዳራዎ፣ ስኬቶችዎ እና አሪፍ እስቴትን ለመቀላቀል የሚፈልጉበትን ምክንያት ይንገሩን",
      },
      submit: "ማመልከቻ ያስገቡ",
      success: "ማመልከቻው በተሳካ ሁኔታ ገብቷል! በቅርቡ እናገኝዎታለን።",
      error: "ማመልከቻውን በማስገባት ላይ ስህተት ተከስቷል። እባክዎ እንደገና ይሞክሩ።",
    },
  },
};

const JoinForm = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setStatus("success");
      // Reset form
      (e.target as HTMLFormElement).reset();
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const InputField = ({ icon: Icon, ...props }: any) => (
    <div className="relative">
      <div className="absolute left-4 top-[14px] text-gray-400">
        <Icon className="w-5 h-5" />
      </div>
      <input
        {...props}
        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1DA599]/20 focus:border-[#1DA599] transition-colors duration-200 placeholder:text-gray-400"
      />
    </div>
  );

  const SelectField = ({ label, options, ...props }: any) => (
    <div>
      <label className="block text-sm font-medium text-[#1DA599] mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          {...props}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1DA599]/20 focus:border-[#1DA599] appearance-none bg-white text-gray-600"
        >
          <option value="" className="text-gray-400">
            Select an option
          </option>
          {options.map((option: any) => (
            <option key={option.value} value={option.value} className="py-2">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <FaChevronDown className="text-[#1DA599] w-4 h-4" />
        </div>
      </div>
      <div className="mt-1 space-y-1 bg-white absolute z-10 w-full left-0 top-full rounded-b-xl shadow-lg border border-t-0 border-gray-200 hidden group-focus-within:block">
        {options.map((option: any) => (
          <div
            key={option.value}
            className="flex items-center px-4 py-2 hover:bg-gray-50"
          >
            <option.icon className="w-4 h-4 text-[#1DA599] mr-2" />
            <span className="text-gray-600">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gray-50/50">
      <div className="max-w-[1440px] w-11/12 mx-auto py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[2rem] lg:text-[2.5rem] font-sansationBold text-[#1DA599] text-center mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            {t.description}
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-sansationBold text-[#1DA599] mb-6">
                {t.form.personalInfo.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  icon={FaUser}
                  type="text"
                  placeholder={t.form.personalInfo.fullName}
                  required
                />
                <InputField
                  icon={FaEnvelope}
                  type="email"
                  placeholder={t.form.personalInfo.email}
                  required
                />
                <InputField
                  icon={FaPhone}
                  type="tel"
                  placeholder={t.form.personalInfo.phone}
                  required
                />
                <InputField
                  icon={FaMapMarkerAlt}
                  type="text"
                  placeholder={t.form.personalInfo.location}
                  required
                />
                <InputField
                  icon={FaLanguage}
                  type="text"
                  placeholder={t.form.personalInfo.languages}
                  required
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-sansationBold text-[#1DA599] mb-6">
                {t.form.professionalInfo.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                  label={t.form.professionalInfo.experience.label}
                  options={t.form.professionalInfo.experience.options}
                  required
                />
                <SelectField
                  label={t.form.professionalInfo.specialization.label}
                  options={t.form.professionalInfo.specialization.options}
                  required
                />
                <InputField
                  icon={FaLinkedin}
                  type="url"
                  placeholder={t.form.professionalInfo.linkedin}
                />
                <SelectField
                  label={t.form.professionalInfo.license.label}
                  options={t.form.professionalInfo.license.options}
                  required
                />
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-sansationBold text-[#1DA599] mb-6">
                {t.form.about.title}
              </h3>
              <textarea
                required
                rows={6}
                placeholder={t.form.about.bioPlaceholder}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1DA599]/20 focus:border-[#1DA599] placeholder:text-gray-400"
              />
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`px-8 py-4 rounded-xl font-medium text-white transition-all duration-200
                  ${
                    status === "loading"
                      ? "bg-gray-400"
                      : "bg-[#1DA599] hover:bg-[#1DA599]/90 hover:shadow-lg transform hover:-translate-y-0.5"
                  }`}
              >
                {status === "loading" ? "Submitting..." : t.form.submit}
              </button>
            </div>

            {status === "success" && (
              <div className="text-center text-green-600 font-medium mt-4">
                {t.form.success}
              </div>
            )}
            {status === "error" && (
              <div className="text-center text-red-600 font-medium mt-4">
                {t.form.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinForm;
