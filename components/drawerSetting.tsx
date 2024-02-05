"use client";
import React, { useState } from "react";
import { Drawer } from "antd";
import Image from "next/image";

const SettingDrawer: React.FC = () => {
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
        className=" flex justify-center items-center"
        onClick={showDrawer}
      >
        <Image
          className=" w-[30px] h-[30px] hover:animate-spin cursor-pointer"
          width={100}
          height={100}
          alt="setting"
          src={"/setting.svg"}
        />
      </button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default SettingDrawer;
