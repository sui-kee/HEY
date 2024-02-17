import Link from "next/link";
import SettingDrawer from "./drawerSetting";

export default function Navigation() {
  return (
    <nav className=" sticky capitalize bg-[#04BFBF] top-0 right-0 left-0  z-20 w-full flex justify-end items-center py-2">
      <ul className=" w-fit flex text-2xl justify-between text-white gap-9 items-center p-2">
        <Link href={"/home"} className=" min-w-[140px]">
          home
        </Link>
        <Link href={"/home/products"} className=" min-w-[140px]">
          products
        </Link>
        <Link href={"/home/carts"} className=" min-w-[140px]">
          carts
        </Link>
        <Link href={"/home/fashions"} className=" min-w-[140px]">
          fashions
        </Link>
        <SettingDrawer />
      </ul>
    </nav>
  );
}
