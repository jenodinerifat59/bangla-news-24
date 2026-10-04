import Link from 'next/link';
import React from 'react';

const SignInPage = () => {
    return (
         <div>
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h2 className="text-2xl text-center text-red-600 font-bold">সাইন ইন</h2>

          <label className="label">ইমেইল</label>
          <input name='email' type="email" className="input"  />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input" />

          <button className="btn bg-red-600 text-white text-xl mt-4">সাইন ইন করুন</button>
          <span className="text-center p-4 text-lg ">অ্যাকাউন্ট নাই? <Link className="text-red-600" href={`/signup`}> সাইন আপ করুন </Link></span>
        </fieldset>
      </form>
    </div>
    );
};

export default SignInPage;