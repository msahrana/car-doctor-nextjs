"use client";
import {BsGithub, BsGoogle} from "react-icons/bs";
import React from "react";
import {signIn} from "next-auth/react";

const SocialSignin = () => {
  const handleSocialLogin = (provider) => {
    const res = signIn(provider, {redirect:false});
  };

  return (
    <div className="flex items-center justify-center space-x-3">
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn flex items-center justify-center text-green-500"
      >
        <BsGoogle />
      </button>

      <button
        onClick={() => handleSocialLogin("github")}
        className="btn flex items-center justify-center text-primary"
      >
        <BsGithub />
      </button>
    </div>
  );
};

export default SocialSignin;
