import React from "react";
import Image from "next/image";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="max-w-7xl mx-auto px-4">
  <nav className="grid grid-cols-3 items-center py-3">
    <div></div>
    <div className="flex items-center justify-center gap-3">
      <Image
        src="/logo.webp"
        alt="logo"
        width={75}
        height={75}
        className="shrink-0"
      />
      <div className="text-center">
        <h4 className="font-bold text-2xl leading-tight whitespace-nowrap">
          Bangla News 24
        </h4>
        <div className="text-sm text-gray-600 whitespace-nowrap">
          {date}
        </div>
      </div>
    </div>

    <div className="flex items-center justify-end gap-2">
      <button className="btn bg-transparent border-none">
        সাইন ইন
      </button>
      <button className="btn bg-red-500 text-white hover:bg-red-600">
        সাইন আপ
      </button>
    </div>
  </nav>
  <Navlinks/>
</div>
  );
};

export default Navbar;