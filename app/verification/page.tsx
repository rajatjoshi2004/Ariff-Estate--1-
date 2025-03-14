"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
import toast, { Toaster } from "react-hot-toast";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
const translations = {
  en: {
    title: "Check Your Email",
    subtitle: "Verification link sent",
    description:
      "We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.",
    note: "If you don't see the email, check your spam folder.",
    checkEmail: "Open Email App",
    return: "Return to Home",
    resend: "Resend Email",
    support: "Need help? Contact Support",
  },
  am: {
    title: "ኢሜልዎን ይፈትሹ",
    subtitle: "የማረጋገጫ ሊንክ ተልኳል",
    description:
      "ወደ ኢሜል አድራሻዎ የማረጋገጫ ሊንክ ልከናል። እባክዎ የገቢ ሳጥንዎን ይፈትሹ እና አካውንትዎን ለማረጋገጥ ሊንኩን ጠቅ ያድርጉ።",
    note: "ኢሜሉን ካላዩ፣ የስፓም ፎልደርዎን ይፈትሹ።",
    checkEmail: "የኢሜል መተግበሪያን ክፈት",
    return: "ወደ መነሻ ተመለስ",
    resend: "ኢሜል እንደገና ላክ",
    support: "እርዳታ ይፈልጋሉ? ድጋፍን ያግኙ",
  },
};

export default function VerificationPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const route = useRouter();
  const getCookie = (name: string) => {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((c) => c.startsWith(`${name}=`));
    return cookie ? cookie.split("=")[1] : null;
  };

  const handleResendEmail = async () => {
    console.log(435);

    const userEmail = getCookie("userEmail");
    console.log(userEmail);
    const decryptedData = CryptoJS.AES.decrypt(
      userEmail || "",
      process.env.NEXT_PUBLIC_SECRET_KEY!
    ).toString(CryptoJS.enc.Utf8);
    if (!decryptedData) {
      toast.error("No email found in cookies.");
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: decryptedData,
      });

      if (error) {
        toast.error(error.message || "Failed to resend email.");
      } else {
        toast.success("Verification email has been resent.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-[#1DA599]/5 to-white relative overflow-hidden">
      {/* Background Patterns */}
      <Toaster />
      <div className="absolute inset-0 bg-[url('/Images/pattern.svg')] opacity-5" />
      <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-[#1DA599]/10 rounded-full blur-3xl" />
      <div className="absolute -right-1/4 bottom-1/4 w-96 h-96 bg-[#FF9A01]/10 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-4 pt-8 pb-12">
        {/* Logo Section */}
        <Link href="/" className="inline-block">
          <div className="flex items-center gap-[10px]">
            <div className="text-[#222222] text-[20px] font-[700] font-Sansation">
              Ariff
            </div>
            <div className="w-0.5 h-[20px] bg-[#D1D5DB]" />
            <div className="text-[#222222] text-[20px] font-[700] font-Sansation">
              Location
            </div>
          </div>
        </Link>

        {/* Main Content */}
        <div className="mt-12 sm:mt-16 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden"
          >
            {/* Success Icon */}
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto bg-[#1DA599]/10 rounded-full flex items-center justify-center"
              >
                <Mail className="w-10 h-10 text-[#1DA599]" />
              </motion.div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-sansationBold text-[#222222] mb-3">
              {t.title}
            </h1>
            <p className="text-[#1DA599] font-sansationBold mb-6">
              {t.subtitle}
            </p>
            <p className="text-[#454545] mb-4">{t.description}</p>
            <p className="text-[#454545] text-sm">{t.note}</p>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("https://mail.google.com", "_blank")}
                className="w-full bg-[#1DA599] text-white rounded-xl py-4 font-medium flex items-center justify-center gap-2 group"
              >
                {t.checkEmail}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  // onClick={()=>handleResendEmail()}
                  onClick={handleResendEmail}
                  className="flex-1 bg-white border border-[#1DA599] text-[#1DA599] rounded-xl py-3 font-medium hover:bg-[#1DA599]/5 transition-colors"
                >
                  {t.resend}
                </motion.button>
                <Link href="/" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white border border-[#454545] text-[#454545] rounded-xl py-3 font-medium hover:bg-gray-50 transition-colors"
                  >
                    {t.return}
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Support Link */}
            <Link
              href="/support"
              className="mt-8 inline-block text-sm text-[#1DA599] hover:text-[#18877e] transition-colors"
            >
              {t.support}
            </Link>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1DA599]/5 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF9A01]/5 rounded-tr-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
