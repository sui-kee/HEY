"use client";

import { useCarts } from "@/app/store";
import MyDrawer from "../drawers/myDrawer";
import MyButton from "../MyButton";
import { poppin } from "@/app/font";
import Link from "next/link";
import BillItem from "./billItem";
import { itemDiscount } from "@/app/libs/cartFunctions";
const totalPriceFormat = (total: number) => {
  const totalString = JSON.stringify(total).split("").reverse();
  const stringLength = (totalString.length / 3) as any;
  // let result = Array.from({ length: stringLength }, (_, index) => index + 1).map((num) => {
  //   // Your logic with num goes here
  //   console.log(num);
  // });
  const result = totalString.map((num, i) => {
    if (parseInt(num) > 0 && (i + 1) % 3 === 0) {
      return "," + num;
    } else {
      return num;
    }
  });
  console.log(result.join(""), "is result unsorted");
  console.log(result.reverse().join(""), "is result filtered");
};
export default function Bill() {
  const carts = useCarts((state) => state.carts);
  const allPrices = carts.map((cart) => {
    const { total, totalDiscount } = itemDiscount(cart);
    return total;
  });
  const totalPrice = allPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  totalPriceFormat(123456789);
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
