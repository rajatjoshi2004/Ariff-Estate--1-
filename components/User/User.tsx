"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);


const Login = dynamic(() => import("./Login"), { ssr: false });
const SignUp = dynamic(() => import("./SignUp"), { ssr: false });

const User = () => {
  const [user, setUser] = useState<string>("Login");

  console.log(setUser)

  return (
    <div className="w-[100vw] h-[100vh] relative">
      <div className=' sm:bg-[url("/bg.png")] w-[98%] h-[60vh] bg-cover bg-center rounded-lg absolute top-8 left-1/2 -translate-x-1/2'></div>
      <AnimatePresence mode="wait">
        {user === "Login" ? (
          <Login  />
        ) : (
          <SignUp  />
        )}
      </AnimatePresence>
    </div>
  );
};

export default User;
