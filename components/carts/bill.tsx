"use client";
import { useCarts } from "@/app/store";
import MyDrawer from "../drawers/myDrawer";
import MyButton from "../MyButton";
import { poppin } from "@/app/font";
import Link from "next/link";
import BillItem from "./billItem";
import { itemDiscount } from "@/app/libs/cartFunctions";
import { totalPriceFormat } from "@/app/libs/globalsFuns";

export default function Bill() {
  const carts = useCarts((state) => state.carts);
  const allPrices = carts.map((cart) => {
    const { total, totalDiscount } = itemDiscount(cart);
    return total;
  });
  const totalPrices = allPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(totalPrices, "is total prices");

  const totalPrice = totalPriceFormat(totalPrices);
  return (
    carts.length > 0 && (
      <MyDrawer
        text="check bill"
        direction="left"
        className=" w-fit"
        headerText="Bill"
      >
        <section className=" relative min-w-[40vw] flex justify-start flex-col items-center gap-3 mb-[100px] overflow-auto">
          {carts.map((cart, i) => (
            <BillItem key={i} item={cart} />
          ))}
        </section>
        <footer
          className={` ${poppin.className} text-xl absolute bottom-0 right-0 w-full h-[100px] bg-white flex justify-between border items-center p-2`}
        >
          <div className=" flex justify-start gap-3 items-center">
            <span>Total :</span>
            <span>{totalPrice}MMK</span>
          </div>
          <Link href={"/home/carts/payment"}>
            <MyButton text="payment" />
          </Link>
        </footer>
      </MyDrawer>
    )
  );
}
