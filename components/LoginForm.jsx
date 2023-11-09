/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return setError("All fields required");
    }
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {setError("Invalid Credentials")};
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            handleSubmit
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-green-800 text-white p-2 rounded cursor-pointer">
            Login
          </button>
          {error && (
            <div className="bg-red-500 rounded-md text-white w-fit text-sm py-1 px-3 mt-2">
              {error}
            </div>
          )}
          <Link href={"/register"} className="text-sm mt-2 text-right">
            Don't have an account?
            <span className="text-blue-700 underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
