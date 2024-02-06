"use client";

import { Item, useCarts } from "@/app/store";
import MyDrawer from "../drawers/myDrawer";
import Image from "next/image";
import MyButton from "../MyButton";
import { poppin } from "@/app/font";
import Link from "next/link";

export default function Bill() {
  const carts = useCarts((state) => state.carts);
  const allPrices = carts.map((cart) => {
    return cart.price * cart.quantity;
  });
  const sum = allPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
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
            <span>{sum}MMK</span>
          </div>
          <Link href={"/home/carts/payment"}>
            <MyButton text="payment" />
          </Link>
        </footer>
      </MyDrawer>
    )
  );
}

export function BillItem({ item }: { item: Item }) {
  const removeItem = useCarts((state) => state.removeItem);
  return (
    <article
      className={` ${poppin.className} relative flex justify-between items-center w-full text-lg`}
    >
      <Image
        width={100}
        height={100}
        className=" w-[100px] rounded-md bg-center object-cover"
        src={item.image}
        alt="billitem"
      />
      <span>X {item.quantity}</span>
      <span>{item.price * item.quantity}MMK</span>
      <MyButton
        text="X"
        className=" bg-red-600 hover:bg-red-400"
        onClick={() => removeItem(item.id)}
      />
    </article>
  );
}
