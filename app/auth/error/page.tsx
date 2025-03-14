"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-sansationBold text-gray-800 mb-4">
          Authentication Error
        </h2>
        <p className="text-gray-600 font-sansationRegular mb-8">
          We encountered an error while trying to sign you in. This could be due
          to an expired link or invalid credentials.
        </p>
        <Link
          href="/auth/signin"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1DA599] hover:bg-[#18877e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA599]"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
