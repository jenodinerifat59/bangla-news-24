
"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [isEditing, setIsEditing] = useState(false);

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const userData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    const result = await authClient.updateUser({
      name: userData.name,
      image: userData.image,
    });



    setIsEditing(false);
  };

  if (!user) {
    return (
      <p className="text-center mt-10">
        Please sign in first.
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">

      {/* Profile */}
      <div className="bg-white px-6 py-8 rounded-lg shadow">

        {/* Profile Image */}
        <div className="flex items-center justify-center">
          <div className="w-48 h-48 overflow-hidden rounded-full ring-2 ring-red-500 ring-offset-2">
            <img
              src={user.image || "/default-user.png"}
              alt={user.name || "User"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* User Information */}
        <div className="mt-6">

          <p className="text-sm font-semibold text-gray-800">
            <span className="font-bold text-lg mr-2">
              Name:
            </span>

            {user.name}
          </p>

          <p className="text-sm font-semibold text-gray-800 mt-2">
            <span className="font-bold text-lg mr-2">
              Email:
            </span>

            {user.email}
          </p>

        </div>

        {/* Edit Button */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {isEditing
              ? "বন্ধ করুন"
              : "প্রোফাইল পরিবর্তন করুন"}
          </button>

        </div>
      </div>

      {/* Edit Form */}
      {isEditing && (
        <form
          onSubmit={handleClick}
          className="mt-6"
        >
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-6">

            <legend className="text-xl font-bold">
              প্রোফাইল পরিবর্তন করুন
            </legend>

            {/* Name */}
            <label className="label">
              নতুন নাম
            </label>

            <input
              name="name"
              type="text"
              defaultValue={user.name}
              className="input w-full"
              placeholder="নাম দিন"
              required
            />

            {/* Image */}
            <label className="label mt-3">
              নতুন ছবি
            </label>

            <input
              name="image"
              type="url"
              defaultValue={user.image || ""}
              className="input w-full"
              placeholder="Image URL দিন"
              required
            />

            {/* Submit */}
            <button
              type="submit"
              className="btn bg-red-600 text-white text-xl mt-4"
            >
              পরিবর্তন করুন
            </button>

          </fieldset>
        </form>
      )}

    </div>
  );
};

export default ProfilePage;

