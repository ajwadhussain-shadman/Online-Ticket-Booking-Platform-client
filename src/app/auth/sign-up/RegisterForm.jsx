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
  Checkbox,
} from "@heroui/react";

import {
  FiUser,
  FiMail,
  FiImage,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { authClient } from "@/lib/auth-client";

const RegisterForm = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("user");
  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      image: formData.get("image"),
      password: formData.get("password"),
       role,
    };
    console.log(data)

    const { error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image || undefined,
      role: data.role,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Welcome to TicketBari ✈️");

    e.target.reset();

    router.push("/");
  };

  return (
    <div className="w-full max-w-lg rounded-3xl border border-cyan-500/20 bg-[#091425] p-8 shadow-[0_0_50px_rgba(6,182,212,0.08)]">
      <div className="mb-8 text-center">
        <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">
          Create Account
        </h1>

        <p className="mt-2 text-gray-400">
          Join TicketBari and start your next journey
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <TextField isRequired className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-gray-300">
            Full Name
          </Label>

          <InputGroup className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 focus-within:border-cyan-400">
            <FiUser className="text-cyan-400" />

            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </InputGroup>
        </TextField>

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

        {/* Photo URL */}
        <TextField className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-gray-300">
            Photo URL (Optional)
          </Label>

          <InputGroup className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 focus-within:border-cyan-400">
            <FiImage className="text-cyan-400" />

            <input
              name="image"
              type="text"
              placeholder="https://example.com/photo.jpg"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </InputGroup>
        </TextField>
      {/* Role Selection */}
<div className="space-y-3">
  <Label className="text-sm font-medium text-gray-300">
    Register As
  </Label>

  <div className="flex gap-6">
  <Checkbox
  isSelected={role === "user"}
  onChange={() => setRole("user")}
>
      <Checkbox.Content>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>

        <span className="text-white">
          User
        </span>
      </Checkbox.Content>
    </Checkbox>

   <Checkbox
  isSelected={role === "vendor"}
  onChange={() => setRole("vendor")}
>
      <Checkbox.Content>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>

        <span className="text-white">
          Vendor
        </span>
      </Checkbox.Content>
    </Checkbox>
  </div>

  <p className="text-xs text-gray-500">
    User can book tickets, Vendor can add and manage tickets.
  </p>
</div>

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
              placeholder="Create a strong password"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />

          </InputGroup>
        </TextField>

        {/* Submit */}
        <Button
          type="submit"
          isLoading={loading}
          className="h-14 w-full rounded-xl bg-cyan-500 text-base font-semibold text-white"
        >
          Create Account
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="font-medium text-cyan-400 hover:text-cyan-300"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;