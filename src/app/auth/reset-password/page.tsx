"use client";
import { AuthBackButton } from "@/componets/auth/AuthBackButton";
import { AuthInput } from "@/componets/auth/AuthInput";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset password with token (from URL)
  };

  return (
    <div className="max-w-md w-full">
      <AuthBackButton />
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Set New Password
      </h2>
      <form onSubmit={handleResetPassword}>
        <AuthInput
          label="Password"
          value={password}
          onChange={setPassword}
          type="password"
        />
        <AuthInput
          label="Confirm password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          type="password"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
