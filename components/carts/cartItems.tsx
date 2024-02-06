"use client";

import { useCarts } from "@/app/store";
import CartItemCard from "./cartItemCard";
import { corgetta } from "@/app/font";
import MyButton from "../MyButton";
import Link from "next/link";

export default function CartItems() {
  const carts = useCarts((state) => state.carts);
  return carts.length > 0 ? (
    <section className=" grid grid-cols-4 border-2 gap-4 border-white rounded-lg p-3">
      {carts.map((item, i) => (
        <CartItemCard key={i} item={item} />
      ))}
    </section>
  ) : (
    <section className=" flex gap-3 justify-center flex-col items-center min-h-10  rounded-lg p-3">
      <h2
        className={` ${corgetta.className} text-4xl text-center items-center w-full text-white`}
      >
        There is no items yet
      </h2>
      <MyButton>
        <Link href={"/home/products"}>shop now</Link>
      </MyButton>
    </section>
  );
}
