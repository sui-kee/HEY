"use client";
import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function NavDropDown() {
  const pathName = usePathname();
  const pureLink = () => {
    if (pathName.includes("discounts")) {
      let result = pathName.replace("discounts", "");
      return result;
    }
    if (pathName.includes("largest_price")) {
      let result = pathName.replace("largest_price", "");
      return result;
    }
    return pathName;
  };
  const normalLink = `${pureLink()}`;
  const discountLink = `${pureLink()}/discounts`;
  const largestPrice_Link = `${pureLink()}/largest_price`;
  const items: MenuProps["items"] = [
    {
      label: <Link href={normalLink}>Normal</Link>,
      key: "0",
    },
    {
      label: <Link href={discountLink}>Discounts</Link>,
      key: "1",
    },
    {
      label: <Link href={largestPrice_Link}>Price</Link>,
      key: "2",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button
        onClick={(e) => e.preventDefault()}
        className=" flex gap-1 justify-start items-center"
      >
        <span className=" hidden md:block">sort by</span>
        <Image
          src={"/sort.svg"}
          width={100}
          height={100}
          alt="sort"
          className=" w-[40px] "
        />
      </button>
    </Dropdown>
  );
}

export default NavDropDown;
