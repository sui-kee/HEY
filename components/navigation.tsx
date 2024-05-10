import Link from "next/link";
import SettingDrawer from "./drawerSetting";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className=" hidden sticky capitalize bg-[#04BFBF] top-0 right-0 left-0  z-20 w-full md:flex justify-end items-center py-2">
      <ul className=" w-fit flex text-2xl justify-between text-white gap-9 items-center p-2">
        <Link
          href={"/home"}
          className=" w-fit px-3 lg:px-0 lg:min-w-[140px] uppercase flex justify-start items-center gap-1"
        >
          <Image
            alt="navImg"
            src={"/mainNavImg/home.svg"}
            className=" w-[50px] h-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden lg:block">home</h3>
        </Link>
        <Link
          href={"/home/products"}
          className=" w-fit px-3 lg:px-0 lg:min-w-[140px] uppercase flex justify-start items-center gap-1"
        >
          <Image
            alt="navImg"
            src={"/mainNavImg/product.svg"}
            className=" w-[50px] h-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden lg:block">products</h3>
        </Link>
        <Link
          href={"/home/carts"}
          className=" w-fit px-3 lg:px-0 lg:min-w-[140px] uppercase flex justify-start items-center gap-1"
        >
          <Image
            alt="navImg"
            src={"/mainNavImg/cart.svg"}
            className=" w-[50px] h-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden lg:block"> carts</h3>
        </Link>
        <Link
          href={"/home/fashions"}
          className=" w-fit px-3 lg:px-0 lg:min-w-[140px] uppercase flex justify-start items-center gap-1"
        >
          <Image
            alt="navImg"
            src={"/mainNavImg/fashion.svg"}
            className=" w-[50px] h-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden lg:block"> fashions</h3>
        </Link>
        <SettingDrawer />
      </ul>
    </nav>
  );
}
