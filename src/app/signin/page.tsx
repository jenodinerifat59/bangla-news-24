"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const handelClik = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message ?? "Sign in failed");
      return;
    }

    if (data) {
      toast.success("Sign In successfully!");
    }
  };
   const handelGoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
const handelGithubSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
};

  return (
    <div>
      <form onSubmit={handelClik}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h2 className="text-2xl text-center text-red-600 font-bold">
            সাইন ইন
          </h2>

          <label className="label">ইমেইল</label>

          <input
            name="email"
            type="email"
            className="input"
            placeholder="ইমেইল দিন"
            required
          />

          <label className="label">পাসওয়ার্ড</label>

          <input
            name="password"
            type="password"
            className="input"
            placeholder="পাসওয়ার্ড দিন"
            required
          />

          <button
            type="submit"
            className="btn bg-red-600 text-white text-xl mt-4"
          >
            সাইন ইন করুন
          </button>

          <span className="text-center p-4 text-lg">
            অ্যাকাউন্ট নাই?{" "}
            <Link className="text-red-600" href="/signup">
              সাইন আপ করুন
            </Link>
          </span>
        </fieldset>
      </form>
        <div className='flex items-center justify-center gap-4 my-4 '><button className="btn text-red-500 " onClick={handelGoogleSignIn}>Sign In With Google</button><button className="btn text-red-500 " onClick={handelGithubSignIn}>Sign In With Github</button></div>
    </div>
  );
};

export default SignInPage;