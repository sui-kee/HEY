"use client";
import { conforta } from "@/app/font";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavDropDown from "./navDropdown";
import Image from "next/image";

export default function ProductNavigation({
  locationLink,
}: {
  locationLink: string;
}) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav
      className={` fixed bottom-0 left-0 right-0 md:relative bg-[rgba(255,255,255,0.5)] md:bg-transparent ${conforta.className} w-full z-[19] flex justify-between gap-5 px-3 pt-3 items-center text-lg text-white capitalize `}
    >
      <ul className=" w-fit flex justify-start items-center gap-6  ">
        <Link
          href={`/${locationLink}/products/dresses`}
          className={clsx(
            " py-3 rounded-t-lg uppercase px-2 flex justify-start items-center gap-1 text-sm md:text-xl",
            {
              ["bg-[#038C8C]"]: pathName.includes("dresses"),
            }
          )}
        >
          <Image
            alt="navImg"
            src={"/productImg/dress.svg"}
            className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden lg:block">Dresses</h3>
        </Link>
        <Link
          href={`/${locationLink}/products/sneakers`}
          className={clsx(
            " py-3 rounded-t-lg uppercase px-2 flex justify-start items-center gap-1 text-sm md:text-xl",
            {
              ["bg-[#038C8C]"]: pathName.includes("sneakers"),
            }
          )}
        >
          <Image
            alt="navImg"
            src={"/productImg/sneaker.svg"}
            className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden lg:block">Sneakers</h3>
        </Link>
        <Link
          href={`/${locationLink}/products`}
          className={clsx(
            " py-3 rounded-t-lg uppercase px-2 flex justify-start items-center gap-1 text-sm md:text-xl",
            {
              ["bg-[#038C8C]"]:
                pathName == `/${locationLink}/products` ||
                pathName == `/${locationLink}/products/discounts` ||
                pathName == `/${locationLink}/products/largest_price`,
            }
          )}
        >
          <Image
            alt="navImg"
            src={"/productImg/hoody.svg"}
            className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden lg:block">Hoodies</h3>
        </Link>
        <Link
          href={`/${locationLink}/products/event_outfits`}
          className={clsx(
            " py-3 rounded-t-lg uppercase px-2 flex justify-start items-center gap-1 text-sm md:text-xl",
            {
              ["bg-[#038C8C]"]: pathName.includes("event_outfits"),
            }
          )}
        >
          <Image
            alt="navImg"
            src={"/productImg/event.svg"}
            className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
            width={50}
            height={50}
          />
          <h3 className=" hidden lg:block">Event outfits</h3>
        </Link>
      </ul>
      <NavDropDown />
    </nav>
  );
}
