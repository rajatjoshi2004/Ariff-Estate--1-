"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    loading: "Verifying your email...",
    success: {
      title: "Email Verified Successfully!",
      description:
        "Your email has been verified. You can now access your account.",
      button: "Go to Homepage",
    },
    error: {
      title: "Verification Failed",
      description: "There was an error verifying your email. Please try again.",
      button: "Try Again",
    },
  },
  am: {
    loading: "ኢሜልዎን በማረጋገጥ ላይ...",
    success: {
      title: "ኢሜል በተሳካ ሁኔታ ተረጋግጧል!",
      description: "ኢሜልዎ ተረጋግጧል። አሁን መለያዎን መጠቀም ይችላሉ።",
      button: "ወደ ዋናው ገጽ ሂድ",
    },
    error: {
      title: "ማረጋገጥ አልተሳካም",
      description: "ኢሜልዎን ለማረጋገጥ ስህተት ተከስቷል። እባክዎ እንደገና ይሞክሩ።",
      button: "እንደገና ሞክር",
    },
  },
};

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const t = translations[language];
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const supabase = createClientComponentClient();

    const getSession = async () => {
      try {
        const { error } = await supabase.auth.getSession();
        if (error) {
          setStatus("error");
          throw error;
        }

        const next = searchParams.get("next");
        setStatus("success");

        // Delay the redirect slightly to show the success message
        setTimeout(() => {
          router.push(next ?? "/");
        }, 2000);
      } catch (error) {
        console.error("Error:", error);
        setStatus("error");
      }
    };

    getSession();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#1DA599]/5 to-white px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1DA599] to-[#18877e]" />

        {status === "loading" && (
          <div className="text-center py-8">
            <div className="w-16 h-16 border-4 border-[#1DA599] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
            <h2 className="text-xl font-sansationBold text-gray-800 mb-2">
              {t.loading}
            </h2>
          </div>
        )}

        {status === "success" && (
          <div className="text-center py-8">
            <FaCheckCircle className="w-16 h-16 text-[#1DA599] mx-auto mb-6" />
            <h2 className="text-2xl font-sansationBold text-gray-800 mb-2">
              {t.success.title}
            </h2>
            <p className="text-gray-600 mb-6 font-sansationRegular">
              {t.success.description}
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-[#1DA599] to-[#18877e] text-white px-8 py-3 rounded-xl font-sansationRegular hover:shadow-lg transition-all duration-300"
            >
              {t.success.button}
            </Link>
          </div>
        )}

        {status === "error" && (
          <div className="text-center py-8">
            <MdError className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-2xl font-sansationBold text-gray-800 mb-2">
              {t.error.title}
            </h2>
            <p className="text-gray-600 mb-6 font-sansationRegular">
              {t.error.description}
            </p>
            <button
              onClick={() => setStatus("loading")}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl font-sansationRegular hover:shadow-lg transition-all duration-300"
            >
              {t.error.button}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
