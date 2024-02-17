"use client";

import { useCarts } from "@/app/store";
import MyDrawer from "../drawers/myDrawer";
import MyButton from "../MyButton";
import { poppin } from "@/app/font";
import Link from "next/link";
import BillItem from "./billItem";
import { itemDiscount } from "@/app/libs/cartFunctions";
const totalPriceFormat = (total: number) => {
  const totalString = JSON.stringify(total).split("").reverse().join("");
  const initialStringLength = totalString.length / 3; //the initial divided value (it can be int or float for later use)
  const stringLength = parseInt((totalString.length / 3) as any); //the length for breaking point (the time of comma should be added)
  let result = []; //list for final result
  for (let i = 0; i + 1 <= stringLength; i++) {
    let breakingPoint = (i + 1) * 3;
    let startingPoint = i * 3;
    result.push(totalString.slice(startingPoint, breakingPoint));
    //for the rest (if exist )
    if (initialStringLength > stringLength && i + 1 === stringLength) {
      result.push(totalString.slice(breakingPoint));
    }
  }

  return result.join(",").split("").reverse().join("");
};
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
