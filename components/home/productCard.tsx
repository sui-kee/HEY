"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { conforta, protest_riot } from "@/app/font";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function ProductCard({
  image,
  percent,
  header,
  total,
  left,
}: {
  image: string[];
  percent: string;
  header: string;
  total: number;
  left: number;
}) {
  const [displayImage, setDisplayImage] = useState<string | StaticImport>(
    image[0]
  );
  const [index, setIndex] = useState(1);
  const handleChangeImage = (index: number) => {
    setDisplayImage(image[index]);
    setIndex(index);
  };
  return (
    <section
      className={` ${protest_riot.className} flex flex-row justify-start gap-3`}
    >
      <article className="h-[450px] min-w-[400px] relative flex justify-start items-start">
        <div className=" relative bg-[#025159] rounded-lg  w-[300px] h-[310px] z-[5] ">
          <Image
            src={displayImage}
            fill
            alt="dress"
            className={` rounded-lg z-[6] h-[200px] bg-center object-cover  `}
          />
          <span className=" z-[6] h-[50px] w-[50px] rounded-full bg-white text-[#025159] absolute top-2 right-2 p-1 text-center items-center text-2xl">
            {index}
          </span>
        </div>
        <div className=" absolute left-3 top-3 bg-[#025159] rounded-lg  w-[300px] h-[310px] z-[4] "></div>
        <button
          onClick={() => handleChangeImage(1)}
          className=" absolute hover:h-[360px] left-3 top-3 bg-[#025159] rounded-lg  w-[50px] h-[350px] flex justify-end flex-col items-center z-[4] "
        >
          <h4 className="text-white text-lg">1</h4>
        </button>
        <div className=" absolute left-5 top-5 bg-[#8C452B] rounded-lg  w-[300px] h-[310px] z-[3]"></div>
        <button
          onClick={() => handleChangeImage(2)}
          className=" absolute hover:h-[360px] left-[50px] top-5 bg-[#8C452B] rounded-lg  w-[50px] h-[350px] flex justify-end flex-col items-center z-[3]"
        >
          <h4 className="text-white text-lg">2</h4>
        </button>
        <div className=" absolute left-7 top-7 bg-[#038C8C] rounded-lg  w-[300px] h-[310px] z-[2]"></div>
        <button
          onClick={() => handleChangeImage(3)}
          className=" absolute hover:h-[360px] left-[100px] top-7 bg-[#038C8C] rounded-lg  w-[50px] h-[350px] flex justify-end flex-col items-center z-[2]"
        >
          <h4 className="text-white text-lg">3</h4>
        </button>
        <div className=" absolute left-9 top-9 bg-[#BF9A78] rounded-lg  w-[300px] h-[310px] z-[1]"></div>
        <button
          onClick={() => handleChangeImage(4)}
          className=" absolute hover:h-[360px] left-[150px] top-9 bg-[#BF9A78] rounded-lg  w-[50px] h-[350px] flex justify-end flex-col items-center z-[1]"
        >
          <h4 className="text-white text-lg">4</h4>
        </button>
      </article>
      <article className=" flex flex-col justify-start gap-2">
        <h3 className="text-4xl text-white">{header}</h3>
        <p className={` ${conforta.className} text-lg`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est
          magni, eligendi quae ea incidunt atque nisi quis nobis sapiente aut
          non cumque voluptate consequuntur neque voluptates quos ratione
          officia.
        </p>
        <footer className=" flex justify-start items-start p-2 gap-2 flex-col">
          <h2 className=" text-3xl text-[#038C8C]">Events</h2>
          <div
            className={` ${conforta.className} flex justify-start items-center gap-2`}
          >
            <h2 className=" text-3xl text-white">Special</h2>
            <h3 className=" text-yellow-400 text-[40px]"> - {percent} off</h3>
          </div>
          <div
            className={` ${conforta.className} flex justify-start items-center gap-2`}
          >
            <h2 className=" text-2xl font-serif uppercase text-white">Total</h2>
            <h3 className=" text-green-400 text-2xl font-extrabold bg-black p-1 rounded-md">
              {total}
            </h3>
          </div>
          <div
            className={` ${conforta.className} flex justify-start items-center gap-2`}
          >
            <h2 className=" text-2xl font-serif uppercase text-white">Left</h2>
            <h3 className=" text-red-400 text-2xl font-extrabold bg-black p-1 rounded-md">
              {left}
            </h3>
          </div>
          <Link
            href={"products"}
            className=" p-2 px-3 rounded-md hover:bg-[#038C8C] bg-[#025159] text-white"
          >
            shop now
          </Link>
        </footer>
      </article>
    </section>
  );
}
