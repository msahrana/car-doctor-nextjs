"use client";
import SocialSignin from "@/components/SocialSignin/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="container px-32 mx-auto py-16">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="440"
            width="440"
            alt="login image"
          />
        </div>
        <div className="border rounded-lg p-6">
          <h1 className="text-3xl font-semibold text-primary text-center mb-12">
            Sign In
          </h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="Type Password"
              className="w-full mt-3 input input-bordered"
            />
            <br />
            <button
              type="submit"
              className="w-full btn btn-primary mt-12 text-lg"
            >
              Sign In
            </button>
          </form>
          <div>
            <h6 className="my-6 text-center">or sign in with</h6>
            <SocialSignin />
            <h2 className="my-6 text-center">
              Don`t have an account ?{" "}
              <Link className="text-primary font-semibold" href={"/signup"}>
                Sign Up
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
