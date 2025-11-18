"use client";
import { useState } from "react";
import Link from "next/link";
import GoogleAuthButton from "@/componets/auth/GoogleAuthButton";
import { AuthBackButton } from "@/componets/auth/AuthBackButton";
import { AuthInput } from "@/componets/auth/AuthInput";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="max-w-md w-full ">
      <AuthBackButton />
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Create your account
      </h2>
      <form onSubmit={handleSignup}>
        <AuthInput
          label="Full Name"
          onChange={(val) => setForm({ ...form, name: val })}
          type="text"
          value={form.name}
        />
        <AuthInput
          label="Email"
          onChange={(val) => setForm({ ...form, email: val })}
          type="email"
          value={form.email}
        />
        <AuthInput
          label="Password"
          onChange={(val) => setForm({ ...form, password: val })}
          type="password"
          value={form.email}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          Sign Up
        </button>
      </form>

      <GoogleAuthButton title="Continue with Google" onPress={() => null} />

      <div className="text-sm mt-4 text-center">
        <Link href="/auth/login" className="text-indigo-600 hover:underline">
          Already have an account? Log in
        </Link>
      </div>
    </div>
  );
}
