import ForgotPassword from "@/components/User/forgotpassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Ariff Location",
  description: "Reset your password for Ariff Location",
};

export default function ForgotPasswordPage() {
  return <ForgotPassword />;
}
