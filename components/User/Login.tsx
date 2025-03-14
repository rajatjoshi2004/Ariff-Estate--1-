"use client";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { GoLock } from "react-icons/go";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import dynamic from "next/dynamic";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Toaster, toast } from "react-hot-toast";
import { useLanguage } from "@/context/LanguageContext";
import { TbWorld } from "react-icons/tb";
import { supabase } from "@/utils/supabase";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

const translations = {
  en: {
    title: "Sign in to your account",
    subtitle: "Welcome back! Please enter your details",
    email: "Email address",
    password: "Password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    signIn: "Sign in",
    or: "OR CONTINUE WITH EMAIL",
    googleSignIn: "Sign in with Google",
    noAccount: "Don't have an account?",
    createAccount: "Create an account",
    bySigningIn: "By signing in, you agree to our",
    termsOfService: "terms of service",
    and: "and",
    privacyPolicy: "Privacy Policy",
    errors: {
      emailRequired: "Email is required",
      passwordRequired: "Password is required",
      invalidCredentials: "Invalid email or password",
      googleError: "Error signing in with Google",
      networkError: "Network error. Please check your connection",
    },
  },
  am: {
    title: "ወደ መለያዎ ይግቡ",
    subtitle: "እንኳን ደህና መጡ! እባክዎ ዝርዝርዎን ያስገቡ",
    email: "የኢሜል አድራሻ",
    password: "የይለፍ ቃል",
    rememberMe: "አስታውሰኝ",
    forgotPassword: "የይለፍ ቃል ረሳህ?",
    signIn: "ግባ",
    or: "ወይም በኢሜል ይቀጥሉ",
    googleSignIn: "በGoogle ይግቡ",
    noAccount: "መለያ የለዎትም?",
    createAccount: "መለያ ፍጠር",
    bySigningIn: "በመግባትዎ፣ የእኛን ይስማማሉ",
    termsOfService: "የአገልግሎት ውሎች",
    and: "እና",
    privacyPolicy: "የግላዊነት ፖሊሲ",
    errors: {
      emailRequired: "ኢሜል ያስፈልጋል",
      passwordRequired: "የይለፍ ቃል ያስፈልጋል",
      invalidCredentials: "ልክ ያልሆነ ኢሜል ወይም የይለፍ ቃል",
      googleError: "በGoogle መግባት ላይ ስህተት",
      networkError: "የአውታረ መረብ ስህተት። እባክዎ ግንኙነትዎን ያረጋግጡ",
    },
  },
};

const Login = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  // const supabase = createClient();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];
  // Redirect if already authenticated
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push("/");
  //   }
  // }, [isAuthenticated, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push("/");
      }
    };

    checkUserSession();
  }, [router]);

  useEffect(() => {
    const encryptedData = Cookies.get("user_credentials");
  
    if (encryptedData) {
      try {
        const decryptedData = CryptoJS.AES.decrypt(
          encryptedData,
          process.env.NEXT_PUBLIC_SECRET_KEY!
        ).toString(CryptoJS.enc.Utf8);
  
        const { email, password } = JSON.parse(decryptedData);
  
        if (email && password) {
          setFormData({
            email,
            password,
            rememberMe: true,
          });
        }
      } catch (error) {
        console.error("Error decrypting credentials:", error);
      }
    }
  }, []);
  
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
  
    if (!formData.email || !formData.password) {
      toast.error("Please enter your email and password");
      return;
    }
  
    setIsSubmitting(true);
    const loadingToast = toast.loading("Signing in...");
  
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
  
      if (error) throw error;
  
      if (formData.rememberMe) {
        const encryptedData = CryptoJS.AES.encrypt(
          JSON.stringify({ email: formData.email, password: formData.password }),
          process.env.NEXT_PUBLIC_SECRET_KEY!
        ).toString();
      
        Cookies.set("user_credentials", encryptedData, { expires: 30, secure: true });
      } else {
        Cookies.remove("user_credentials");
      }
      toast.success("Welcome back!");
      router.push("/");
    } catch (error: unknown) {
      toast.error(error instanceof Error ? getCustomErrorMessage(error) : "Login failed. Try again.");
    } finally {
      toast.dismiss(loadingToast);
      setIsSubmitting(false);
    }
  };
  
  const getCustomErrorMessage = (error: Error): string => {
    const errorMessage = error.message.toLowerCase();

    if (errorMessage.includes("invalid login credentials")) {
      return "Incorrect email or password. Please try again.";
    }
    if (errorMessage.includes("email not confirmed")) {
      return "Please verify your email address before signing in.";
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
    return "Something went wrong. Please try again.";
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });

      if (error) {
        toast.error("Unable to sign in with Google. Please try again.", {
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
      console.error("Google login error:", error);
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

      {/* Login Form Card */}
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

            {/* Google login button */}
            <div className="mt-4 sm:mt-8 flex justify-center">
              <Button
                onClick={handleGoogleLogin}
                className="w-full h-8 sm:h-12 bg-white text-black border rounded-xl text-[13px] sm:text-[14px] font-Sansation hover:bg-gray-50 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 sm:gap-3"
              >
                <FcGoogle className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
                <span className="font-medium tracking-wide">
                  {t.googleSignIn}
                </span>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-8">
              <hr className="w-[60px] sm:w-[101px] border-[#919191] opacity-24" />
              <span className="text-[#454545] text-xs sm:text-base font-[700] font-Sansation">
                {t.or}
              </span>
              <hr className="w-[60px] sm:w-[101px] border-[#919191] opacity-24" />
            </div>

            {/*--------- Login form ----------- */}
            <form
              onSubmit={handleSubmit}
              className="mt-4 px-6 space-y-4 font-Sansation font-normal"
            >
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
                  className={`pl-12 font-light`}
                />
              </div>

              {/* Password Input */}
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
                  className={`pl-12 font-light`}
                />
              </div>

              {/* Remember me and Forgot password */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Checkbox
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "rememberMe",
                          type: "checkbox",
                          checked: !!checked,
                        },
                      } as any)
                    }
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[#1DC1A4] data-[state=checked]:bg-[#1DC1A4] data-[state=checked]:border-[#1DC1A4]"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-[#454545] text-[13px] sm:text-[14px] font-Sansation font-normal"
                  >
                    {t.rememberMe}
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-[#454545] text-[13px] sm:text-[14px] font-Sansation font-normal hover:text-[#1DC1A4] transition-colors"
                >
                  {t.forgotPassword}
                </Link>
              </div>

              {/* Sign In Button */}
              <div className="w-full">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1DA599] hover:bg-[#18877e] rounded-xl text-[13px] sm:text-[14px] font-medium tracking-wide disabled:opacity-50"
                >
                  {isSubmitting ? "Signing in..." : t.signIn}
                </Button>
              </div>
            </form>

            <div className="text-center space-y-1.5 mt-4 sm:mt-6">
              <p className="text-[#454545] text-[13px] sm:text-[14px] font-Sansation font-normal px-2 sm:px-0">
                {t.bySigningIn}{" "}
                <Link
                  href="/terms"
                  className="text-[#454545] hover:text-[#1da599] transition-colors"
                >
                  {t.termsOfService}
                </Link>
              </p>
              <p className="text-[#454545] text-[13px] sm:text-[14px] font-Sansation font-normal px-2 sm:px-0">
                {t.and}{" "}
                <Link
                  href="/privacy"
                  className="text-[#454545] hover:text-[#1da599] transition-colors"
                >
                  {t.privacyPolicy}
                </Link>
              </p>
            </div>

            <p className="text-center mt-3 sm:mt-6">
              <span className="text-[#454545] text-[13px] sm:text-[14px] font-Sansation font-normal">
                {t.noAccount}{" "}
              </span>
              <Link
                href="/register"
                className="text-[#222222] text-[13px] sm:text-[14px] font-Sansation font-medium hover:text-[#1da599] transition-colors"
              >
                {t.createAccount}
              </Link>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Login;
