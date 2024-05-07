"use client";
import Link from "next/link";
import { useState } from "react";
import SettingDrawer from "../drawerSetting";

export default function V0adminNavSmall() {
  const [openNav, setOpenNav] = useState(false);

  return openNav ? (
    <nav className="fixed h-full capitalize bg-[rbga(0,0,0,0.5)] top-0 left-0  z-[100] w-full flex justify-center items-center lg:hidden py-2">
      <ul className="w-full z-[100] bg-white flex flex-col text-2xl justify-center text-white gap-2 items-center p-2">
        <Link
          onClick={() => setOpenNav(!openNav)}
          href={"/admin"}
          className="min-w-[140px] w-[40%] hover:bg-red-200 px-2 rounded-lg uppercase flex justify-between items-center gap-1"
        >
          <h3 className="text-black text-sm">Admin</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-[30px] h-[30px] sm:h-[50px] sm:w-[50px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Link>
        {/* Add other links here */}
        <SettingDrawer />
      </ul>
      <button
        className="p-3 fixed top-0 z-[100] right-3"
        onClick={() => setOpenNav(!openNav)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-[50px] h-[50px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>
  ) : (
    <button
      className="p-3 fixed top-0 z-[100] right-3 block lg:hidden"
      onClick={() => setOpenNav(!openNav)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-[50px] h-[50px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
