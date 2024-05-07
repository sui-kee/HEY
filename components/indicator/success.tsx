"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SuccessIndicator() {
  const [ShowText, setShowText] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowText(true), 200);
  }, []);
  return (
    <div className=" fixed top-0 left-0 z-[1000] gap-2 w-full h-full flex flex-col justify-start items-center p-1">
      <div className=" p-2 bg-white rounded-full flex gap-2 justify-center items-center">
        <Image
          src={"/success.svg"}
          height={100}
          width={100}
          className=" w-[30px] h-[30px]"
          alt="success"
        />
        <span
          className={clsx("text-sm text-black transition-all ", {
            " block ": ShowText,
            " hidden ": !ShowText,
          })}
        >
          Success
        </span>
      </div>
    </div>
  );
}
