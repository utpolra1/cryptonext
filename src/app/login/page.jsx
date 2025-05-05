"use client";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/wallet");
    } catch (error) {
      console.log("Login error:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/wallet");
    } catch (error) {
      console.log("Google sign-in error:", error.message);
    }
  };

  return (
    <div className="bg-[#0F172A] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-[#1E293B] p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-6 text-center">
          Sign in to SUWEX
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-400 text-sm font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full py-2.5 px-4 rounded bg-[#334155] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-400 text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            className="w-full py-2.5 px-4 rounded bg-[#334155] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between mb-4 gap-2 text-sm">
          <div className="flex items-center">
            <div className="border rounded-full w-5 h-5 flex items-center justify-center mr-2">
              <div className="bg-white rounded-full w-3 h-3"></div>
            </div>
            <span className="text-gray-400">Click to human inspection 🎧</span>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Forgot password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
        >
          Sign in
        </button>

        <div className="mt-6 text-center">
          <hr className="border-gray-600 mb-4" />
          <p className="text-gray-400 text-sm mb-2">Or</p>
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-lg transition-colors"
          >
            Sign in with Google
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Sign up for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
