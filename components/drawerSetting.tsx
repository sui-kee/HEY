"use client";
import React, { useState } from "react";
import { Drawer } from "antd";
import Image from "next/image";

// function getCookies(): { [key: string]: string } {
//   const cookies: { [key: string]: string } = {};
//   if (typeof document !== undefined) {
//     document.cookie.split(";").forEach((cookie) => {
//       const [name, value] = cookie.trim().split("=");
//       cookies[name] = value;
//     });
//     return cookies;
//   } else {
//     return {};
//   }
// }

const SettingDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  // const { firebase_auth } = getCookies();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  // console.log("cookies: ", typeof getCookies());

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
      <Drawer
        title="Setting"
        onClose={onClose}
        open={open}
        className=" justify-start gap-3 flex-col"
      >
        {/* { <h4>Logout</h4>
        <h4>Login</h4>} */}
      </Drawer>
    </>
  );
};

export default SettingDrawer;
