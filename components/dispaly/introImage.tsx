"use client";
import Image from "next/image";
import { open_sans, poppin, roboto } from "@/app/font";

export default function IntroImage() {
  return (
    <section className=" flex justify-start gap-2 items-center px-2 h-[100vh] sticky top-0 left-0 right-0">
      <article className=" flex justify-start flex-col gap-3 items-start ">
        <h2
          className={` ${open_sans.className} text-[50px] uppercase text-[#038C8C]`}
        >
          Welcome to <strong>Hey</strong>
        </h2>
        <h2
          className={` ${roboto.className} text-[40px] uppercase text-[#025159]`}
        >
          Step into Fashion Paradise with us
        </h2>
        <p className={` ${poppin.className} text-3xl list-disc`}></p>
      </article>
      <Image
        priority
        src={"/bb.png"}
        width={640}
        height={640}
        alt="bb"
        className=" "
      />
    </section>
  );
}
