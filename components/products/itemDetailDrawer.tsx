"use client";
import React, { useState } from "react";
import { Divider, Drawer } from "antd";
import Image from "next/image";
import MyButton from "../MyButton";
import { conforta, corgetta, poppin } from "@/app/font";
import { useCarts } from "@/app/store";

function ItemDetailDrawer({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  const addItemToCart = useCarts((state) => state.addItem);
  const allCarts = useCarts((state) => state.carts);
  const showDrawer = () => {
    setOpen(true);
  };
  console.log("all carts:", allCarts);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MyButton
        onClick={showDrawer}
        text="check"
        className=" bg-black text-white capitalize rounded-br-lg absolute right-50 top-50"
      />
      <Drawer title="Detail" onClose={onClose} open={open} width={" w-auto"}>
        <section className=" min-w-[50vw] h-full flex justify-center relative">
          <Image
            className="w-[450px] rounded-lg"
            width={500}
            height={500}
            alt="image"
            src={data.image}
          />
          <article className=" flex flex-col justify-start items-start gap-3 text-sm sm:text-lg w-[30vw] h-full p-2">
            <h2 className={` ${corgetta.className} text-2xl`}>{data.name}</h2>
            <p className={` ${conforta.className} `}>{data.description}</p>
            <div className="flex justify-start gap-2 items-center">
              <label className={` ${poppin.className} uppercase`}>
                Made in:
              </label>
              <h2 className={` ${corgetta.className}`}>{data.madeIn}</h2>
            </div>
            <div className="flex justify-start gap-2 items-center">
              <label className={` ${poppin.className} uppercase`}>Price:</label>
              <h2 className={` ${corgetta.className}`}>{data.price}mmk</h2>
            </div>
            <div className="flex justify-start gap-2 items-center">
              <label className={` ${poppin.className} uppercase`}>Left:</label>
              <h2 className={` ${corgetta.className}`}>{data.left}</h2>
            </div>
            <div className="flex justify-start gap-2 items-center">
              <label className={` ${poppin.className} uppercase`}>
                Discount:
              </label>
              <h2 className={` ${corgetta.className}`}>
                {data.discountPercent}%
              </h2>
            </div>
          </article>
          <MyButton
            onClick={() => addItemToCart({ ...data, quantity: 1 })}
            className=" absolute bottom-2 right-2 "
            text="Add to cart"
          />
        </section>
      </Drawer>
    </>
  );
}

export default ItemDetailDrawer;
