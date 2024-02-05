"use client";
import React, { useState } from "react";
import { Divider, Drawer } from "antd";
import Image from "next/image";
import MyButton from "../MyButton";

function ItemDetailDrawer({ data }: { data: any }) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={showDrawer}
        className=" bg-black text-white capitalize text-lg p-2 px-3 absolute right-50 top-50"
      >
        check
      </button>
      <Drawer title="Detail" onClose={onClose} open={open} width={"50vw"}>
        <section className=" w-full h-full flex justify-center relative">
          <Image
            className="w-full rounded-lg"
            width={500}
            height={500}
            alt="image"
            src={data.image}
          />
          <article className=" flex flex-col justify-start items-start w-full h-full p-2">
            <p>{data.description}</p>
            <Divider />
            <div className="flex justify-start gap-2 items-center">
              <label>Made in:</label>
              <h2>{data.madeIn}</h2>
            </div>
            <Divider />
            <div className="flex justify-start gap-2 items-center">
              <label>Price:</label>
              <h2>{data.price}ks</h2>
            </div>
            <Divider />
            <div className="flex justify-start gap-2 items-center">
              <label>Left:</label>
              <h2>{data.left}</h2>
            </div>
          </article>
          <MyButton
            className=" absolute bottom-2 right-2 "
            text="Add to cart"
          />
        </section>
      </Drawer>
    </>
  );
}

export default ItemDetailDrawer;
