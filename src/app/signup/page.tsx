"use client";
import { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter();

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name as string,
     email: user.email as string,
     image: user.img as string,
     password: user.password as string,
     callbackURL: "/",
    });

    if (data) {
      toast.success("Sign Up successfully !")
      router.push("/");
    }

    if (error) {
      toast.error(error?.message as string);
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
      <form onSubmit={handelSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h2 className="text-2xl text-center text-red-600 font-bold">
            সাইন আপ
          </h2>

          <label className="label">নাম</label>
          <input name="name" type="text" className="input" />

          <label className="label">ছবি</label>
          <input name="img" type="url" className="input" />

          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input" />

          <button
            type="submit"
            className="btn bg-red-600 text-white text-xl mt-4"
          >
            সাইন আপ করুন
          </button>

          <span className="text-center p-4 text-lg">
            অ্যাকাউন্ট আছে?
            <Link className="text-red-600" href="/signin">
              {" "}
              সাইন ইন করুন
            </Link>
          </span>
        </fieldset>
      </form>
      <div className='flex items-center justify-center gap-4 my-4'>
        <button className="btn text-red-500 " onClick={handelGoogleSignIn}>Sign In With  Google</button>
        <button className="btn text-red-500 " onClick={handelGithubSignIn}>Sign In With  Github</button>
      </div>
    </div>
  );
};

export default SignUpPage;