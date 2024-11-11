"use client";
import Image from "next/image";
import Link from "next/link";
export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-white to-blue-100">
      <div className="flex items-center justify-between space-x-8 bg-white shadow-lg rounded-lg p-8">
        {/* Left side - Logo */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/ace-logo.png"
            alt="College Logo"
            width={300}
            height={300}
            className="rounded-md"
          />
        </div>
        {/* Right side - Form */}
        <div className="w-[400px]  p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-black text-center mb-6">
            Login
          </h2>
          <form className="space-y-4">
            {/* Email input */}
            <div className="relative">
              <label className="text-black" htmlFor="email">
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-md bg-white p-2">
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Password input */}
            <div className="relative">
              <label className="text-black" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-md bg-white p-2">
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Remember me and Forgot Password */}
            <div className="flex justify-between items-center text-black text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link href="#" className="hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Login button */}
            <button className="w-full py-2 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-700 transition-all">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
