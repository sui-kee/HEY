"use client";
import Image from "next/image";
import MyButton from "../MyButton";
import { poppin } from "@/app/font";
import { Item, useCarts } from "@/app/store";
import { itemDiscount } from "@/app/libs/cartFunctions";
import { ProductItem } from "@/types/productTypes";

export default function CartItemCard({ item }: { item: ProductItem }) {
  const reduceQuantity = useCarts((state) => state.reduceQuantity);
  const increaseQuantity = useCarts((state) => state.increaseQuantity);
  const removeItem = useCarts((state) => state.removeItem);
  const { total, totalDiscount } = itemDiscount(item);
  return (
    <section className=" relative flex justify-end items-center flex-col min-h-[430px] sm:min-h-[260px] lg:min-h-[400px] overflow-hidden rounded-md">
      <span className=" opacity-60 text-black z-[10] font-extrabold  text-[30px] lg:text-[50px] absolute top-[50px] right-[50px]">
        {item.price}X{item.quantity}
      </span>
      <MyButton
        onClick={() => removeItem(item.id)}
        className=" absolute z-10 rounded-lg top-1 right-1 bg-red-400 hover:bg-red-600 "
        text="X"
      />
      <Image
        src={item.image}
        fill
        alt="cart"
        className=" bg-center object-cover "
      />
      <footer
        className={` ${poppin.className} flex z-10 gap-2 justify-between flex-col items-center p-2  w-full `}
      >
        <div className=" flex justify-between items-center w-full">
          <MyButton
            className="  bg-red-400 hover:bg-red-600 "
            text="-"
            onClick={() => reduceQuantity(item.id)}
          />
          <MyButton
            className="  bg-green-400 hover:bg-green-600 "
            text="+"
            onClick={() => increaseQuantity(item.id)}
          />
        </div>
        <div className=" flex bg-white rounded-md p-2 justify-between items-center w-full">
          <label>Quantity :</label>
          <span>{item.quantity}</span>
        </div>
        <div className=" flex bg-white rounded-md p-2 justify-between items-center w-full">
          <label>Discount :</label>
          <span>{totalDiscount}</span>
        </div>
        <div className=" flex bg-white rounded-md p-2 justify-between items-center w-full">
          <label>Total price :</label>
          <span>{total}</span>
        </div>
      </footer>
    </section>
  );
}
