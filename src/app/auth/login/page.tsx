"use client";
import { AuthBackButton } from "@/componets/auth/AuthBackButton";
import { AuthInput } from "@/componets/auth/AuthInput";
import GoogleAuthButton from "@/componets/auth/GoogleAuthButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    router.push("/user/dashboard");
  };

  return (
    <div className="max-w-md w-full">
      <AuthBackButton />
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Sign in to your account
      </h2>
      <form onSubmit={handleLogin}>
        <AuthInput
          value={email}
          onChange={setEmail}
          label="Email"
          type="email"
          isRequired={false}
        />

        <AuthInput
          label="Password"
          onChange={setPassword}
          type="password"
          value={password}
          isRequired={false}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2  rounded-md hover:bg-indigo-700 transition"
        >
          Sign In
        </button>
      </form>

      <GoogleAuthButton title="Continue with Google" />

      <div className="flex justify-between text-sm mt-4">
        <Link
          href="/auth/forgot-password"
          className="text-indigo-600 hover:underline"
        >
          Forgot Password?
        </Link>
        <Link href="/auth/signup" className="text-indigo-600 hover:underline">
          Don't have an account?
        </Link>
      </div>
    </div>
  );
}
