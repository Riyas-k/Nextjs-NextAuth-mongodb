/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form className="flex flex-col gap-3">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="bg-green-800 text-white p-2 rounded cursor-pointer">
            Login
          </button>
          <div className="bg-red-500 rounded-md text-white w-fit text-sm py-1 px-3 mt-2">
            Error Message
          </div>
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
