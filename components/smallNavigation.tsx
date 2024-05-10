"use client";
import Link from "next/link";
import SettingDrawer from "./drawerSetting";
import Image from "next/image";
import { useState } from "react";

export default function SmallNavigation() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className=" sticky min-h-[80px] capitalize bg-[#04BFBF] top-0 right-0 left-0 z-[20] w-full block md:hidden py-2">
      {openNav && (
        <ul className=" w-full absolute bottom-[-190px] bg-white flex flex-col text-2xl justify-center text-white gap-2 items-center p-2">
          <Link
            onClick={() => setOpenNav(!openNav)}
            href={"/home"}
            className=" min-w-[140px] w-[40%] hover:bg-red-200 px-2 rounded-lg uppercase flex justify-between items-center gap-1"
          >
            <h3 className=" text-black text-sm">home</h3>
            <Image
              alt="navImg"
              src={"/mainNavImg/home.svg"}
              className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
              width={50}
              height={50}
            />
          </Link>
          <Link
            onClick={() => setOpenNav(!openNav)}
            href={"/home/products"}
            className=" min-w-[140px] w-[40%] hover:bg-red-200 px-2 rounded-lg uppercase flex justify-between items-center gap-1"
          >
            <h3 className=" text-black text-sm">products</h3>
            <Image
              alt="navImg"
              src={"/mainNavImg/product.svg"}
              className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
              width={50}
              height={50}
            />
          </Link>
          <Link
            onClick={() => setOpenNav(!openNav)}
            href={"/home/carts"}
            className=" min-w-[140px] w-[40%] hover:bg-red-200 px-2 rounded-lg uppercase flex justify-between items-center gap-1"
          >
            <h3 className=" text-black text-sm"> carts</h3>
            <Image
              alt="navImg"
              src={"/shoppingblack.svg"}
              className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
              width={50}
              height={50}
            />
          </Link>
          <Link
            onClick={() => setOpenNav(!openNav)}
            href={"/home/fashions"}
            className=" min-w-[140px] w-[40%] hover:bg-red-200 px-2 rounded-lg uppercase flex justify-between items-center gap-1"
          >
            <h3 className=" text-black text-sm"> fashions</h3>
            <Image
              alt="navImg"
              src={"/mainNavImg/fashion.svg"}
              className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
              width={50}
              height={50}
            />
          </Link>
          <SettingDrawer />
        </ul>
      )}
      {openNav ? (
        <button
          className=" p-3 fixed top-[50] bottom-[50] z-[100] right-3"
          onClick={() => setOpenNav(!openNav)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-[50px] h-[50px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (
        <button
          className=" p-3 fixed top-[50] bottom-[50] z-[100] right-3"
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
      )}
    </nav>
  );
}
