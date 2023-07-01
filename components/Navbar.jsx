"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { name: "Quran", link: "" },
    { name: "Jadwal Shalat", link: "shalat" },
  ];

  return (
    <nav className="bg-[#c0e0b1] z-10 top-0 sticky w-full mb-5">
      <div className="container flex flex-wrap justify-between p-4 mx-auto">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold text-[18px]"
        >
          <Image src={"/quran.png"} width={30} height={10} alt="quranIcon" />
          <span>Quran Online</span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } items-center gap-3 w-full md:flex md:w-auto`}
          id="navbar-default"
        >
          {nav.map((item, index) => (
            <Link
              key={index}
              href={`/${item.link}`}
              className={`${
                item.link === active ? "text-[#988a51]" : "text-black"
              } font-semibold`}
              onClick={() => setActive(item.link)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <hr className="bg-slate-200 h-0.5" />
    </nav>
  );
};

export default Navbar;
