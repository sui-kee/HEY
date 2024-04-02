"use client";

import { useCarts } from "@/app/store";
import CartItemCard from "./cartItemCard";
import { corgetta } from "@/app/font";
import MyButton from "../MyButton";
import Link from "next/link";
import ProductItemsWarper from "../warpers/productsItemWarper";

export default function CartItems() {
  const carts = useCarts((state) => state.carts);
  return carts.length > 0 ? (
    // <section className=" grid grid-cols-4 border-2 gap-4 border-white rounded-lg p-3">
    <ProductItemsWarper>
      {carts.map((item, i) => (
        <CartItemCard key={i} item={item} />
      ))}
    </ProductItemsWarper>
  ) : (
    <section className=" absolute top-0 left-0 flex gap-3 justify-center w-full border flex-col items-center h-full  rounded-lg p-3">
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
