import Link from "next/link";
import SettingDrawer from "./drawerSetting";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className=" hidden sticky capitalize bg-[#04BFBF] top-0 right-0 left-0  z-20 w-full md:flex justify-end items-center py-2">
      <ul className=" w-fit flex text-2xl justify-between text-white gap-9 items-center p-2">
        <Link
          href={"/home"}
          className=" min-w-[140px] uppercase flex justify-start items-center gap-1"
        >
          <Image
            alt="navImg"
            src={"/mainNavImg/home.svg"}
            className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden md:block">home</h3>
        </Link>
        <Link
          href={"/home/products"}
          className=" min-w-[140px] uppercase flex justify-start items-center gap-1"
        >
          <Image
            alt="navImg"
            src={"/mainNavImg/product.svg"}
            className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden md:block">products</h3>
        </Link>
        <Link
          href={"/home/carts"}
          className=" min-w-[140px] uppercase flex justify-start items-center gap-1"
        >
          <Image
            alt="navImg"
            src={"/mainNavImg/cart.svg"}
            className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden md:block"> carts</h3>
        </Link>
        <Link
          href={"/home/fashions"}
          className=" min-w-[140px] uppercase flex justify-start items-center gap-1"
        >
          <Image
            alt="navImg"
            src={"/mainNavImg/fashion.svg"}
            className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden md:block"> fashions</h3>
        </Link>
        <SettingDrawer />
      </ul>
    </nav>
  );
}
