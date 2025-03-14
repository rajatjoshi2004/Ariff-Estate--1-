"use client";

import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import { useLanguage } from "@/context/LanguageContext";
import { TbWorld } from "react-icons/tb";
import { supabase } from "@/utils/supabase";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeToTerms?: string;
}

const translations = {
  en: {
    title: "Create your account",
    subtitle: "Join Ariff Location today",
    fullName: "Full Name",
    email: "Email address",
    password: "Password",
    confirmPassword: "Confirm Password",
    terms: "I agree to the Terms of Service and Privacy Policy",
    signUp: "Sign up",
    or: "OR CONTINUE WITH EMAIL",
    googleSignUp: "Sign up with Google",
    haveAccount: "Already have an account?",
    signIn: "Sign In",
    passwordRequirements: {
      title: "Password must contain:",
      minLength: "At least 8 characters",
      uppercase: "One uppercase letter",
      lowercase: "One lowercase letter",
      number: "One number",
      special: "One special character (!@#$%^&*)",
    },
    errors: {
      fullNameRequired: "Full name is required",
      emailRequired: "Email is required",
      passwordRequired: "Password is required",
      passwordMismatch: "Passwords do not match",
      termsRequired: "Please agree to the Terms of Service",
      emailExists: "Email already exists",
      googleError: "Error signing up with Google",
      networkError: "Network error. Please check your connection",
      passwordTooShort: "Password must be at least 8 characters long",
      passwordNoUppercase:
        "Password must contain at least one uppercase letter",
      passwordNoLowercase:
        "Password must contain at least one lowercase letter",
      passwordNoNumber: "Password must contain at least one number",
      passwordNoSpecial: "Password must contain at least one special character",
      passwordInvalid: "Password does not meet the requirements",
    },
  },
  am: {
    title: "መለያዎን ይፍጠሩ",
    subtitle: "ዛሬ ወደ Ariff Location ይቀላቀሉ",
    fullName: "ሙሉ ስም",
    email: "የኢሜል አድራሻ",
    password: "የይለፍ ቃል",
    confirmPassword: "የይለፍ ቃል ያረጋግጡ",
    terms: "የአገልግሎት ውሎችን እና የግላዊነት ፖሊሲን ተስማምቻለሁ",
    signUp: "ተመዝገብ",
    or: "ወይም በኢሜል ይቀጥሉ",
    googleSignUp: "በGoogle ይመዝገቡ",
    haveAccount: "መለያ አለዎት?",
    signIn: "ግባ",
    passwordRequirements: {
      title: "የይለፍ ቃል መያዝ አለበት፡",
      minLength: "ቢያንስ 8 ቁምፊዎች",
      uppercase: "አንድ ከፍተኛ ፊደል",
      lowercase: "አንድ ትንሽ ፊደል",
      number: "አንድ ቁጥር",
      special: "አንድ ልዩ ቁምፊ (!@#$%^&*)",
    },
    errors: {
      fullNameRequired: "ሙሉ ስም ያስፈልጋል",
      emailRequired: "ኢሜል ያስፈልጋል",
      passwordRequired: "የይለፍ ቃል ያስፈልጋል",
      passwordMismatch: "የይለፍ ቃሎቹ አይዛመዱም",
      termsRequired: "እባክዎ የአገልግሎት ውሎችን ይስማሙ",
      emailExists: "ኢሜሉ አስቀድሞ አለ",
      googleError: "በGoogle መመዝገብ ላይ ስህተት",
      networkError: "የአውታረ መረብ ስህተት። እባክዎ ግንኙነትዎን ያረጋግጡ",
      passwordTooShort: "የይለፍ ቃል ቢያንስ 8 ቁምፊዎች መሆን አለበት",
      passwordNoUppercase: "የይለፍ ቃል ቢያንስ አንድ ከፍተኛ ፊደል መያዝ አለበት",
      passwordNoLowercase: "የይለፍ ቃል ቢያንስ አንድ ትንሽ ፊደል መያዝ አለበት",
      passwordNoNumber: "የይለፍ ቃል ቢያንስ አንድ ቁጥር መያዝ አለበት",
      passwordNoSpecial: "የይለፍ ቃል ቢያንስ አንድ ልዩ ቁምፊ መያዝ አለበት",
      passwordInvalid: "የይለፍ ቃል መስፈርቶችን አያሟላም",
    },
  },
};

const SignUp = () => {
  const { language, setLanguage } = useLanguage();
  const customErrorRef = useRef(false);
  const t = translations[language as keyof typeof translations];
  const router = useRouter();
  // const supabase = createClient();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customError, setCustomError] = useState<boolean>(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const getCustomErrorMessage = (error: Error): string => {
    const errorMessage = error.message.toLowerCase();

    if (errorMessage.includes("email already registered")) {
      return "This email is already registered. Please sign in instead.";
    }
    if (errorMessage.includes("password")) {
      return "Password should be at least 6 characters long and include a number.";
    }
    if (errorMessage.includes("invalid email")) {
      return "Please enter a valid email address.";
    }
    if (errorMessage.includes("rate limit")) {
      return "Too many attempts. Please try again later.";
    }
    if (errorMessage.includes("network")) {
      return "Connection error. Please check your internet connection.";
    }
    return "Unable to create account. Please try again.";
  };

  const handleGoogleSignUp = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        toast.error(t.errors.googleError, {
          duration: 4000,
          position: "bottom-center",
          style: {
            background: "#FEE2E2",
            color: "#DC2626",
            border: "1px solid #FECACA",
            padding: "16px",
            borderRadius: "12px",
            fontWeight: "500",
          },
          icon: "❌",
        });
        throw error;
      }
    } catch (error) {
      console.error("Google sign up error:", error);
    }
  };

  const validatePassword = (
    password: string
  ): { isValid: boolean; error?: string } => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    if (password.length < minLength) {
      return { isValid: false, error: t.errors.passwordTooShort };
    }
    if (!hasUppercase) {
      return { isValid: false, error: t.errors.passwordNoUppercase };
    }
    if (!hasLowercase) {
      return { isValid: false, error: t.errors.passwordNoLowercase };
    }
    if (!hasNumber) {
      return { isValid: false, error: t.errors.passwordNoNumber };
    }
    if (!hasSpecial) {
      return { isValid: false, error: t.errors.passwordNoSpecial };
    }

    return { isValid: true };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.fullName.trim()) {
      toast.error(t.errors.fullNameRequired, {
        duration: 4000,
        position: "bottom-center",
        style: {
          background: "#FEE2E2",
          color: "#DC2626",
          border: "1px solid #FECACA",
          padding: "16px",
          borderRadius: "12px",
          fontWeight: "500",
        },
        icon: "❌",
      });
      return;
    }

    if (!formData.email.trim()) {
      toast.error(t.errors.emailRequired, {
        duration: 4000,
        position: "bottom-center",
        style: {
          background: "#FEE2E2",
          color: "#DC2626",
          border: "1px solid #FECACA",
          padding: "16px",
          borderRadius: "12px",
          fontWeight: "500",
        },
        icon: "❌",
      });
      return;
    }

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      toast.error(passwordValidation.error || t.errors.passwordInvalid, {
        duration: 4000,
        position: "bottom-center",
        style: {
          background: "#FEE2E2",
          color: "#DC2626",
          border: "1px solid #FECACA",
          padding: "16px",
          borderRadius: "12px",
          fontWeight: "500",
        },
        icon: "❌",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error(t.errors.passwordMismatch, {
        duration: 4000,
        position: "bottom-center",
        style: {
          background: "#FEE2E2",
          color: "#DC2626",
          border: "1px solid #FECACA",
          padding: "16px",
          borderRadius: "12px",
          fontWeight: "500",
        },
        icon: "❌",
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error(t.errors.termsRequired, {
        duration: 4000,
        position: "bottom-center",
        style: {
          background: "#FEE2E2",
          color: "#DC2626",
          border: "1px solid #FECACA",
          padding: "16px",
          borderRadius: "12px",
          fontWeight: "500",
        },
        icon: "❌",
      });
      return;
    }

    const loadingToast = toast.loading("Creating your account...", {
      position: "top-center",
      style: {
        background: "#E0F2FE",
        color: "#0369A1",
        border: "1px solid #BAE6FD",
        padding: "16px",
        borderRadius: "12px",
        fontWeight: "500",
      },
    });

    setIsSubmitting(true);
    try {
      const { data: existingUser, error: signInError } =
        await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

      if (!signInError && existingUser) {
        toast.error("User already exists! Please log in instead.", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#FEE2E2",
            color: "#DC2626",
            border: "1px solid #FECACA",
            padding: "16px",
            borderRadius: "12px",
            fontWeight: "500",
          },
          icon: "❌",
        });

        customErrorRef.current = true; // Ensure custom error is flagged
        throw new Error("User already exists! Please log in instead.");
      }

      const { error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { full_name: formData.fullName },
        },
      });

      if (signUpError) throw signUpError;

      // localStorage.setItem("userEmail", formData.email);
      const encryptedEmail = CryptoJS.AES.encrypt(
        formData.email,
        process.env.NEXT_PUBLIC_SECRET_KEY!
      ).toString();

      // Store in HTTP-only cookie
      Cookies.set("userEmail", encryptedEmail, {
        expires: 1, // Expires in 1 day
        secure: true,
        sameSite: "Strict",
      });

      toast.success(
        "Account created successfully! Please check your email to verify your account.",
        {
          duration: 6000,
          position: "bottom-center",
          style: {
            background: "#DCFCE7",
            color: "#15803D",
            border: "1px solid #BBF7D0",
            padding: "16px",
            borderRadius: "12px",
            fontWeight: "500",
          },
          icon: "✅",
        }
      );
      router.push("/verification");
    } catch (error: unknown) {
      setTimeout(() => {
        if (!customErrorRef.current) {
          const customMessage =
            error instanceof Error
              ? getCustomErrorMessage(error)
              : "Unable to create account. Please try again.";

          toast.error(customMessage, {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#FEE2E2",
              color: "#DC2626",
              border: "1px solid #FECACA",
              padding: "16px",
              borderRadius: "12px",
              fontWeight: "500",
            },
            icon: "❌",
          });
        }
      }, 0);
    } finally {
      toast.dismiss(loadingToast);
      setIsSubmitting(false);
    }
  };

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "am" : "en");
  };

  return (
    <div className="min-h-screen w-full bg-white relative">
      <Toaster />
      {/* Top image section */}
      <div className="w-full h-[40vh] sm:h-[50vh] px-2 sm:px-4 pt-2 sm:pt-4">
        <div className="w-full h-full rounded-lg sm:rounded-[18px] bg-[url('/bg.png')] bg-cover bg-center" />
      </div>

      {/* SignUp Form Card */}
      <div className="w-[95%] sm:w-[85%] md:w-[70%] lg:w-[530px] h-auto bg-white rounded-2xl sm:rounded-3xl shadow-[0px_3px_12px_0px_rgba(0,0,0,0.25)] overflow-hidden absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 py-6 sm:py-12 px-4 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {/*------------- heading --------- */}
            <div className="flex items-center justify-center gap-[10px] sm:gap-[18px]">
              <div className="text-[#222222] text-[24px] sm:text-[33px] font-[700] font-Sansation">
                Ariff
              </div>
              <div className="w-1 h-[25px] sm:h-[35px] bg-[#D1D5DB]" />
              <div className="text-[#222222] text-[24px] sm:text-[33px] font-[700] font-Sansation">
                Location
              </div>
            </div>

            {/* Language Toggle */}
            <div className="flex justify-end mb-4">
              <button
                onClick={handleLanguageToggle}
                className="flex items-center gap-1.5 text-[#454545] hover:text-[#1DA599] transition-all duration-300"
              >
                <div className="relative">
                  <TbWorld className="w-[22px] h-[22px] text-[#1DA599]" />
                  <span className="absolute -top-1 -right-1 text-[10px] font-Sansation bg-white rounded-full px-1 shadow-sm">
                    {language.toUpperCase()}
                  </span>
                </div>
              </button>
            </div>

            {/* Google signup button - updated to match bottom sign-in style */}
            <div className="mt-4 sm:mt-8 flex justify-center">
              <Button
                onClick={handleGoogleSignUp}
                className="w-full h-8 sm:h-12 bg-white text-black border rounded-xl text-[13px] sm:text-[14px] font-Sansation hover:bg-gray-50 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 sm:gap-3"
              >
                <FcGoogle className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
                <span className="font-medium tracking-wide">
                  {t.googleSignUp}
                </span>
              </Button>
            </div>

            {/* Updated text sizes and styling to match Login */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-8">
              <hr className="w-[60px] sm:w-[101px] border-[#919191] opacity-24" />
              <span className="text-[#454545] text-xs sm:text-base font-[700] font-Sansation">
                {t.or}
              </span>
              <hr className="w-[60px] sm:w-[101px] border-[#919191] opacity-24" />
            </div>

            {/*--------- SignUp form ----------- */}
            <form
              onSubmit={handleSubmit}
              className="mt-4 px-6 space-y-4 font-Sansation font-normal"
            >
              {/* Full Name Input */}
              <div className="relative">
                <span className="text-[1.2rem] absolute top-1/2 -translate-y-1/2 left-3 text-[#9CA3AF]">
                  <FaUser />
                </span>
                <Input
                  name="fullName"
                  type="text"
                  placeholder={t.fullName}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`pl-12 font-light ${errors.fullName ? "border-red-500" : ""
                    }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-[11px] mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <span className="text-[1.2rem] absolute top-1/2 -translate-y-1/2 left-3 text-[#9CA3AF]">
                  <MdOutlineForwardToInbox />
                </span>
                <Input
                  name="email"
                  type="email"
                  placeholder={t.email}
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`pl-12 font-light ${errors.email ? "border-red-500" : ""
                    }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-[11px] mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="relative">
                  <span className="text-[1.2rem] absolute top-1/2 -translate-y-1/2 left-3 text-[#9CA3AF]">
                    <GoLock />
                  </span>
                  <Input
                    name="password"
                    type="password"
                    placeholder={t.password}
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`pl-12 font-light ${errors.password ? "border-red-500" : ""
                      }`}
                  />
                </div>
                {/* Password Requirements */}
                <div className="text-[11px] text-gray-500 space-y-1 px-2">
                  <p className="font-medium text-[#1DA599]">
                    {t.passwordRequirements.title}
                  </p>
                  <ul className="space-y-0.5 list-disc list-inside">
                    <li
                      className={
                        formData.password.length >= 8 ? "text-green-600" : ""
                      }
                    >
                      {t.passwordRequirements.minLength}
                    </li>
                    <li
                      className={
                        /[A-Z]/.test(formData.password) ? "text-green-600" : ""
                      }
                    >
                      {t.passwordRequirements.uppercase}
                    </li>
                    <li
                      className={
                        /[a-z]/.test(formData.password) ? "text-green-600" : ""
                      }
                    >
                      {t.passwordRequirements.lowercase}
                    </li>
                    <li
                      className={
                        /[0-9]/.test(formData.password) ? "text-green-600" : ""
                      }
                    >
                      {t.passwordRequirements.number}
                    </li>
                    <li
                      className={
                        /[!@#$%^&*]/.test(formData.password)
                          ? "text-green-600"
                          : ""
                      }
                    >
                      {t.passwordRequirements.special}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div className="relative">
                <span className="text-[1.2rem] absolute top-1/2 -translate-y-1/2 left-3 text-[#9CA3AF]">
                  <GoLock />
                </span>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder={t.confirmPassword}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`pl-12 font-light ${errors.confirmPassword ? "border-red-500" : ""
                    }`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-[11px] mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Updated Terms Checkbox styling */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Checkbox
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked: boolean) =>
                    handleInputChange({
                      target: {
                        name: "agreeToTerms",
                        type: "checkbox",
                        checked,
                      },
                    } as React.ChangeEvent<HTMLInputElement>)
                  }
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[#1DC1A4] data-[state=checked]:bg-[#1DC1A4] data-[state=checked]:border-[#1DC1A4]"
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-[#454545] text-[13px] sm:text-[14px] font-Sansation font-normal"
                >
                  {t.terms}
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.agreeToTerms}
                </p>
              )}

              {/* Updated Sign Up Button styling */}
              <div className="w-full">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1DA599] hover:bg-[#18877e] rounded-xl text-[13px] sm:text-[14px] font-medium tracking-wide disabled:opacity-50"
                >
                  {isSubmitting ? "Signing up..." : t.signUp}
                </Button>
              </div>
            </form>

            {/* Updated bottom text styling */}
            <p className="text-center mt-3 sm:mt-6">
              <span className="text-[#454545] text-[13px] sm:text-[14px] font-Sansation font-normal">
                {t.haveAccount}{" "}
              </span>
              <Link
                href="/sign-in"
                className="text-[#222222] text-[13px] sm:text-[14px] font-Sansation font-medium hover:text-[#1da599] transition-colors"
              >
                {t.signIn}
              </Link>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignUp;
