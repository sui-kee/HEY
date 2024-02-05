import { roboto } from "@/app/font";
import React from "react";

export default function ProductHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" w-full h-full flex flex-col justify-start items-start gap-2 relative mt-10 rounded-lg border-4 border-[#025159] p-3 pt-9">
      <h2
        className={` ${roboto.className} text-[44px] text-[#025159] absolute top-[-45px] rounded-lg border-4 border-[#025159] left-4 bg-[#04BFBF]`}
      >
        Best offers
      </h2>
      {children}
    </section>
  );
}
