"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bonus, setBonus] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agree) {
      setError("Please agree to the User Agreement and Privacy Policy.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/wallet"); // redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/wallet"); // redirect after Google signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[#0F172A] min-h-screen flex items-center justify-center">
      <div className="bg-[#1E293B] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          Sign up to SUWEX
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#334155]"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="block text-gray-400 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Your Username"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#334155]"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#334155]"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="block text-white text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Your Password"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#334155]"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bonus" className="block text-gray-400 text-sm font-bold mb-2">
            Bonus (Optional)
          </label>
          <input
            type="text"
            id="bonus"
            placeholder="Optional Bonus Code"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#334155]"
            onChange={(e) => setBonus(e.target.value)}
          />
        </div>

        <div className="flex items-center mb-4">
          <div className="border rounded-full w-5 h-5 flex items-center justify-center mr-2">
            <div className="bg-white rounded-full w-3 h-3"></div>
          </div>
          <span className="text-gray-400 text-sm">Click to human inspection</span>
          <span className="ml-1 text-gray-400 text-sm">🎧</span>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="agree"
              type="checkbox"
              className="w-4 h-4 border text-white border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              onChange={(e) => setAgree(e.target.checked)}
            />
          </div>
          <label htmlFor="agree" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-300">
            By signing up I agree that I am 18 years of age or older, to the{" "}
            <a href="#" className="text-blue-500 hover:underline">
              User Agreement
            </a>
            ,{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          onClick={handleSignup}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full"
        >
          Sign up
        </button>

        <div className="mt-6 text-center">
          <hr className="border-gray-600 mb-2" />
          <p className="text-gray-400 text-sm">Or</p>
          <button
            onClick={handleGoogleSignup}
            className="bg-[#4285F4] hover:bg-[#357AE8] text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full"
          >
            Sign up with Google
          </button>
          <p className="text-gray-400 text-sm">
            Have an account?{" "}
            <a href="#" className="font-bold text-blue-500 hover:text-blue-800">
              Sign in right now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
