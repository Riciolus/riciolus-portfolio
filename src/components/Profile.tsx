"use client";

import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";
import Mail from "@/icons/Mail";
import Resume from "@/icons/Resume";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Profile = () => {
  const [easterEgg, setEasterEgg] = useState(false);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setLoading(true);
    timerRef.current = setTimeout(() => {
      setEasterEgg(true);
      setLoading(false);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setEasterEgg(false);
    setLoading(false);
  };

  return (
    <div className="space-y-1 lg:space-y-3 lg:fixed w-[clamp(300px,20vw,800px)] h-full ">
      <div className="absolute w-[50vw] xl:w-full  h-3/4  -top-22 opacity-40 -right-64">
        <Image
          src="/tes3.png"
          alt=""
          loading="lazy"
          fill
          className={`object-cover transition-opacity ${
            easterEgg ? "opacity-40" : "opacity-0"
          }`}
        />
      </div>

      {/* avatar */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden"
      >
        {/* Clock-like loader */}
        {/* {loading && !easterEgg && (
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(#3b82f6_0deg,transparent_0deg)] animate-[sweep_2s_linear_forwards]" />
        )} */}

        {loading && !easterEgg && (
          <div className="absolute inset-0  blur-md  rounded-full bg-gradient-to-r from-emerald-200 to-blue-700/40 opacity-30 z-50"></div>
        )}

        {/* Avatar images with fade */}
        <Image
          src="/avatar.jpeg"
          alt="Avatar"
          fill
          className={`rounded-full object-cover transition-opacity duration-700 ${
            easterEgg ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src="/hidden-5.jpeg"
          alt="Hidden Ava"
          loading="lazy"
          fill
          className={`rounded-full object-cover transition-opacity duration-700 ${
            easterEgg ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* name */}
      <h3 className="text-3xl font-semibold">Marcell Pramana Putra</h3>

      {/* title */}
      <h4 className="text-lg text-gray-400">Fullstack Web Developer</h4>

      {/* location */}
      <div className="relative text-base flex gap-2 items-center text-gray-400">
        <h4>📍Bogor, Indonesia</h4>
        <Image
          src="/indonesia-flag.svg"
          alt="Location"
          width={16}
          height={16}
          className="w-4 h-4"
        />
      </div>

      <h5 className="text-neutral-300 text-sm">
        Running scripts, running marathons.
      </h5>

      <div className="flex items-center space-x-5">
        <button className="px-3 cursor-pointer py-1 border border-neutral-200 flex items-center justify-center rounded-md hover:bg-gray-300 hover:text-neutral-900 transition-colors">
          <Resume />
          Resume
        </button>

        <div className="flex space-x-3">
          <Github />
          <Mail />
          <LinkedIn />
        </div>
      </div>
    </div>
  );
};

export default Profile;
