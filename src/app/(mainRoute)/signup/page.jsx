"use client";
import SocialSignin from "@/components/SocialSignin/SocialSignin";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const SignUp = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();

    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      role: "user",
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/signup/api",
        newUser
      );
      if (response.status === 200) {
        toast.success("User Create Successfully!");
        event.target.reset();
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Failed to sign up. Please try again.");
    }
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
            Sign Up
          </h1>
          <form onSubmit={handleSignUp}>
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
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
              Sign Up
            </button>
          </form>
          <div>
            <h6 className="my-6 text-center">or sign in with</h6>
            <SocialSignin />
            <h2 className="my-6 text-center">
              Already have an account ?{" "}
              <Link className="text-primary font-semibold" href={"/login"}>
                Sign In
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
