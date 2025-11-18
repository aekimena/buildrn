"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthBackButton } from "@/componets/auth/AuthBackButton";
import { AuthInput } from "@/componets/auth/AuthInput";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger reset email
    router.push("/auth/reset-password");
  };

  return (
    <div className="max-w-md w-full">
      <AuthBackButton />
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Reset Your Password
      </h2>
      <form onSubmit={handleForgotPassword}>
        <AuthInput
          label="Email"
          value={email}
          onChange={setEmail}
          type="email"
          isRequired={false}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
