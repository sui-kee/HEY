"use client";
import React, { useState } from "react";
import { Drawer } from "antd";
import { useCarts } from "@/app/store";
import clsx from "clsx";

function MyDrawer({
  text,
  className = "",
  children,
  direction = "right",
  headerText = "Drawer",
}: {
  text?: string;
  headerText?: string;
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "left" | "bottom";
}) {
  const [open, setOpen] = useState(false);
  const allCarts = useCarts((state) => state.carts);
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
        className={clsx(
          " p-2 px-3 rounded-md bg-[#025159] hover:bg-[#038C8C] text-white text-lg",
          {
            [className]: className,
          }
        )}
      >
        {text}
      </button>
      <Drawer
        title={headerText}
        onClose={onClose}
        open={open}
        placement={direction}
        width={" w-auto"}
        children={children}
      ></Drawer>
    </>
  );
}

export default MyDrawer;
