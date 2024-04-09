"use client";
import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase-config";

const SettingDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  // const { firebase_auth } = getCookies();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != undefined) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  });

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
        className=" justify-start items-center w-full gap-3 flex-col "
      >
        <button className="  flex justify-center items-center gap-2 text-xl font-bold uppercase">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="w-[66px] h-[66px] p-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
          <h3>Logout</h3>
        </button>
        <button className="  flex justify-center items-center gap-2 text-xl font-bold uppercase">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="green"
            className="w-[66px] h-[66px] p-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <h3>Message</h3>
        </button>
      </Drawer>
    </>
  );
};

export default SettingDrawer;
