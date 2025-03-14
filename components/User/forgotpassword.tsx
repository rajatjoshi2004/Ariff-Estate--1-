"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MdOutlineForwardToInbox } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast, { Toaster } from "react-hot-toast";


const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const supabase = createClientComponentClient();

  const handleForgotPassword = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      toast.error("Please enter your email.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Reset instructions sent to your email.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Top image section */}
      <Toaster />
      <div className="w-full h-[40vh] sm:h-[50vh] px-2 sm:px-4 pt-2 sm:pt-4">
        <div className="w-full h-full rounded-lg sm:rounded-[18px] bg-[url('/bg.png')] bg-cover bg-center" />
      </div>

      {/* Forgot Password Form Card */}
      <div className="w-[95%] sm:w-[85%] md:w-[70%] lg:w-[530px] h-auto bg-white rounded-2xl sm:rounded-3xl shadow-md absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 py-6 sm:py-12 px-4 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading */}
            <div className="flex items-center justify-center gap-[10px] sm:gap-[18px]">
              <div className="text-[#222222] text-[24px] sm:text-[33px] font-[700] font-Sansation">
                Ariff
              </div>
              <div className="w-1 h-[25px] sm:h-[35px] bg-[#D1D5DB]" />
              <div className="text-[#222222] text-[24px] sm:text-[33px] font-[700] font-Sansation">
                Location
              </div>
            </div>

            <p className="text-[#454545] text-sm sm:text-base font-[700] text-center mt-4 sm:mt-6">
              Reset your password
            </p>

            <p className="text-zinc-600 text-sm sm:text-base text-center mt-2 sm:mt-4 max-w-[400px] mx-auto">
              Enter your email address and we&apos;ll send you instructions to reset your password.
            </p>

            {/* Reset Password Form */}
            <form onSubmit={handleForgotPassword} className="mt-6 sm:mt-8 px-6 space-y-4">
              {/* Email Input */}
              <div className="relative">
                <span className="text-[1.2rem] absolute top-1/2 -translate-y-1/2 left-3 text-[#9CA3AF]">
                  <MdOutlineForwardToInbox />
                </span>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="pl-12 font-light"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Reset Password Button */}
              <div className="w-full">
                <Button
                  type="submit"
                  className="w-full h-10 sm:h-12 bg-[#1da599] hover:bg-[#1a968b] rounded-xl sm:rounded-2xl text-white text-sm sm:text-base transition-all duration-300 ease-in-out"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Reset Instructions"}
                </Button>
              </div>
            </form>

            <p className="text-center mt-4 sm:mt-6">
              <span className="text-zinc-600 text-sm sm:text-base">
                Remember your password?{" "}
              </span>
              <Link
                href="/sign-in"
                className="text-black text-sm sm:text-base hover:text-gray-700 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ForgotPassword;
