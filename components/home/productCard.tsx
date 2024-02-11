"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { conforta, protest_riot } from "@/app/font";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { NormalItem } from "@/types/itemTypes";

export default function ProductCard({
  data,
  link,
}: {
  data: NormalItem[];
  link: "dresses" | "" | "sneakers";
}) {
  const [displayImage, setDisplayImage] = useState<string | StaticImport>(
    data[0].image
  );
  const [index, setIndex] = useState(0);
  const handleChangeImage = (index: number) => {
    setDisplayImage(data[index].image);
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
            {index + 1}
          </span>
        </div>
        {[1, 2, 3, 4].map((num, i) => (
          <BackgroundFrame
            number={num}
            index={i}
            key={i}
            changeImage={() => handleChangeImage(i)}
          />
        ))}
        {/* <div className=" absolute left-3 top-3 bg-[#025159] rounded-lg  w-[300px] h-[310px] z-[4] "></div>
        <button
          onClick={() => handleChangeImage(0)}
          className=" absolute hover:h-[360px] left-3 top-3 bg-[#025159] rounded-lg  w-[50px] h-[350px] flex justify-end flex-col items-center z-[4] "
        >
          <h4 className="text-white text-lg">1</h4>
        </button>
        <div className=" absolute left-5 top-5 bg-[#8C452B] rounded-lg  w-[300px] h-[310px] z-[3]"></div>
        <button
          onClick={() => handleChangeImage(1)}
          className=" absolute hover:h-[360px] left-[50px] top-5 bg-[#8C452B] rounded-lg  w-[50px] h-[350px] flex justify-end flex-col items-center z-[3]"
        >
          <h4 className="text-white text-lg">2</h4>
        </button>
        <div className=" absolute left-7 top-7 bg-[#038C8C] rounded-lg  w-[300px] h-[310px] z-[2]"></div>
        <button
          onClick={() => handleChangeImage(2)}
          className=" absolute hover:h-[360px] left-[100px] top-7 bg-[#038C8C] rounded-lg  w-[50px] h-[350px] flex justify-end flex-col items-center z-[2]"
        >
          <h4 className="text-white text-lg">3</h4>
        </button> */}
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
          <div
            className={` ${conforta.className} flex justify-start items-center gap-2`}
          >
            <h2 className=" text-xl font-serif uppercase text-white">Total</h2>
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

function BackgroundFrame({
  changeImage,
  index,
  number,
}: {
  changeImage: () => void;
  index: number;
  number: number;
}) {
  const leftPaddingList = [`zero`, `one`, `two`, `three`];
  const barPaddingLeft = [`[0px]`, `[50px]`, `[100px]`, `[150px]`];
  const colors = [`bg-[#025159]`, `bg-[#8C452B]`, `bg-[#038C8C]`];
  return (
    <React.Fragment key={index}>
      <div
        className={`absolute left-${3 + 2 * index} top-${
          3 + 2 * index
        } bg-[#025159] rounded-lg ${colors[index]}  w-[300px] h-[310px] z-[${
          4 - index
        }]`}
      ></div>
      <button
        onClick={() => changeImage()}
        className={`absolute hover:h-[360px] left-${
          barPaddingLeft[index]
        } top-${3 + 2 * index} bg-[#025159] rounded-lg ${
          colors[index]
        }  w-[50px] h-[350px] flex justify-end flex-col items-center z-[${
          4 - index
        }]`}
      >
        <h4 className="text-white text-lg ">{number}</h4>
      </button>
    </React.Fragment>
  );
}
