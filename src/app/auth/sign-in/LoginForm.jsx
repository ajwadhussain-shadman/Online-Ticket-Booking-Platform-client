"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
  Button,
  TextField,
  Label,
  InputGroup,
} from "@heroui/react";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { authClient } from "@/lib/auth-client";

const LoginForm = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Login Successful 🎉");

    router.push("/");
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    setGoogleLoading(false);
  };

  return (
    <div className="w-full max-w-lg rounded-3xl border border-cyan-500/20 bg-[#091425] p-8 shadow-[0_0_50px_rgba(6,182,212,0.08)]">
      <div className="mb-8 text-center">
        <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">
          Welcome Back
        </h1>

        <p className="mt-2 text-gray-400">
          Sign in to continue your journey
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <TextField isRequired className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-gray-300">
            Email Address
          </Label>

          <InputGroup className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 focus-within:border-cyan-400">
            <FiMail className="text-cyan-400" />

            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </InputGroup>
        </TextField>

        {/* Password */}
        <TextField isRequired className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-gray-300">
            Password
          </Label>

          <InputGroup className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 focus-within:border-cyan-400">
            <FiLock className="text-cyan-400" />

            <input
              name="password"
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />

            <button
              type="button"
              onClick={toggleVisibility}
              className="text-cyan-400 transition hover:text-cyan-300"
            >
              {isVisible ? (
                <FiEyeOff size={18} />
              ) : (
                <FiEye size={18} />
              )}
            </button>
          </InputGroup>
        </TextField>

        {/* Login Button */}
        <Button
          type="submit"
          isLoading={loading}
          className="h-14 w-full rounded-xl bg-cyan-500 text-base font-semibold text-white"
        >
          Sign In
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {/* Google Login */}
        <Button
          type="button"
          variant="bordered"
          isLoading={googleLoading}
          onClick={handleGoogleLogin}
          className="h-14 w-full border-cyan-500/30 bg-[#0D1B2A] text-white"
        >
          Continue with Google
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/auth/sign-up"
            className="font-medium text-cyan-400 hover:text-cyan-300"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;