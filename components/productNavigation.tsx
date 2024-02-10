"use client";
import { conforta } from "@/app/font";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavDropDown from "./navDropdown";

export default function ProductNavigation() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav
      className={` ${conforta.className} w-full flex justify-between gap-5 px-3 pt-3 items-center text-lg text-white capitalize`}
    >
      <ul className=" w-fit flex justify-start items-center gap-6  ">
        <Link
          href={"/home/products/dresses"}
          className={clsx(" py-3 rounded-t-lg px-2", {
            ["bg-[#038C8C]"]: pathName.includes("dresses"),
          })}
        >
          Dresses
        </Link>
        <Link
          href={"/home/products/sneakers"}
          className={clsx(" py-3 rounded-t-lg px-2", {
            ["bg-[#038C8C]"]: pathName.includes("sneakers"),
          })}
        >
          Sneakers
        </Link>
        <Link
          href={"/home/products"}
          className={clsx(" py-3 rounded-t-lg px-2", {
            ["bg-[#038C8C]"]:
              pathName == "/home/products" ||
              pathName == "/home/products/discounts" ||
              pathName == "/home/products/largest_price",
          })}
        >
          Hoodies
        </Link>
        <Link
          href={"/home/products/event_outfits"}
          className={clsx(" py-3 rounded-t-lg px-2", {
            ["bg-[#038C8C]"]: pathName.includes("event_outfits"),
          })}
        >
          Event outfits
        </Link>
      </ul>
      <NavDropDown />
    </nav>
  );
}
