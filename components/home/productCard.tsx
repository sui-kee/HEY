"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { conforta, protest_riot } from "@/app/font";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { NormalItem } from "@/types/itemTypes";
import { BackgroundFrame } from "./backgroundFrame";

export default function ProductCard({
  data,
  link,
  type,
}: {
  data: NormalItem[];
  link: "dresses" | "" | "sneakers";
  type: string;
}) {
  const [displayImage, setDisplayImage] = useState<string | StaticImport>("");
  const [index, setIndex] = useState(0);
  const handleChangeImage = (index: number) => {
    setDisplayImage(data[index].image);
    setIndex(index);
  };
  useEffect(() => {
    console.log(data, " from use effect");
    console.log(`${type} length is ;`, data.length);

    if (data.length > 0) {
      setDisplayImage(data[0].image);
    }
  }, []);
  if (data.length === 0) return <p>loading</p>;
  return (
    <section
      className={` ${protest_riot.className} flex flex-row justify-start gap-3`}
    >
      <article className="h-[450px] min-w-[400px] relative flex justify-start items-start">
        <div className=" relative bg-[#025159] rounded-lg  w-[300px] h-[310px] z-[5] ">
          {displayImage && (
            <Image
              src={displayImage}
              fill
              alt="dress"
              className={` rounded-lg z-[6] h-[200px] bg-center object-cover  `}
            />
          )}
          <span className=" z-[6] h-[50px] w-[50px] rounded-full bg-white text-[#025159] absolute top-2 right-2 p-1 text-center items-center text-2xl">
            {index + 1}
          </span>
        </div>
        {data.map((_, num) => (
          <BackgroundFrame
            number={num + 1}
            index={num}
            key={num}
            changeImage={() => handleChangeImage(num)}
          />
        ))}
      </article>
      <article className=" flex flex-col justify-start gap-2">
        <h2 className=" text-4xl text-[#038C8C] capitalize">
          {data[index].type}
        </h2>
        <h3 className="text-3xl text-white">{data[index].name}</h3>
        <p className={` ${conforta.className} text-lg`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est
          magni, eligendi quae ea incidunt atque nisi quis nobis sapiente aut
          non cumque voluptate consequuntur neque voluptates quos ratione
          officia.
        </p>
        <footer className=" flex justify-start items-start p-2 gap-2 flex-col">
          <div
            className={` ${conforta.className} flex justify-start items-center gap-2`}
          >
            <h2 className=" text-3xl text-white">Special</h2>
            <h3 className=" text-yellow-400 text-[40px]">
              - {data[index].discountPercent}% off
            </h3>
          </div>
          <span className=" w-full flex justify-start items-center gap-3">
            <div
              className={` ${conforta.className} flex justify-start items-center gap-2`}
            >
              <h2 className=" text-xl font-serif uppercase text-white">
                Total
              </h2>
              <h3 className=" text-green-400 text-xl font-extrabold bg-black p-1 rounded-md">
                {data[index].total}
              </h3>
            </div>
            <div
              className={` ${conforta.className} flex justify-start items-center gap-2`}
            >
              <h2 className=" text-xl font-serif uppercase text-white">Left</h2>
              <h3 className=" text-red-400 text-xl font-extrabold bg-black p-1 rounded-md">
                {data[index].left}
              </h3>
            </div>
          </span>
          <Link
            href={`/home/products/${link}`}
            className=" p-2 px-3 rounded-md hover:bg-[#038C8C] bg-[#025159] text-white"
          >
            shop now
          </Link>
        </footer>
      </article>
    </section>
  );
}
