import React from "react";
import { IoIosDesktop } from "react-icons/io";

const NonDesktopPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md mx-4 p-8 bg-gradient-to-bl from-gray-700 via-gray-900 to-black shadow-lg shadow-blue-500/40 rounded-lg text-white">
        <IoIosDesktop className="h-10 w-10 bg-transparent mb-4 flex mx-auto" />
        <h1 className="text-2xl font-bold mb-4 font-[roboto]">
          Switch to Desktop Mode
        </h1>
        <p className="text-lg mb-4 text-zinc-300 font-[poppins]">
          This app is optimized for desktop use. Please switch to desktop mode
          for the best experience.
        </p>
      </div>
    </div>
  );
};

export default NonDesktopPage;
