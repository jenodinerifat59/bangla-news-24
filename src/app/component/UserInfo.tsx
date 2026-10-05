"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handelSignOut = async()=>{
    await authClient.signOut();
  }
  

  return (
    <div className="flex items-center justify-end">
      {user ? (
        <div className="flex items-center gap-3 ml-40">
          {/* User Profile */}
          <div className="flex items-center gap-2 bg-white px-2 py-1.5">
            {/* Avatar */}
            <div className="relative">
               <Link href='/profile'>
              <div className="w-10 h-10 overflow-hidden rounded-full ring-2 ring-red-500 ring-offset-2">
               <img
                  src={user.image || "/default-user.png"}
                  alt={user.name || "User"}
                  className="w-full h-full object-cover"
                />
              </div>
              </Link>

              {/* Online Indicator */}
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
            </div>

            {/* User Name */}
            <div className="hidden sm:block pr-2">
              <p className="text-sm font-semibold text-gray-800 leading-tight">
                {user.name}
              </p>

              <p className="text-xs text-gray-500">
                Active now
              </p>
            </div>
          </div>

          {/* Sign Out */}
          <button onClick={handelSignOut}
            className="btn btn-sm rounded-full border border-red-500
            bg-white px-4 text-red-500
            hover:bg-red-500 hover:text-white
            transition-all duration-300"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link href="/signin">
            <button
              className="btn btn-sm bg-transparent border-none
              text-gray-700 hover:text-red-500"
            >
              সাইন ইন
            </button>
          </Link>

          <Link href="/signup">
            <button
              className="btn btn-sm rounded-full
              bg-red-500 px-5 text-white
              hover:bg-red-600"
            >
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;