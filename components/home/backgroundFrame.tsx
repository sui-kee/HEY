"use client";
import { NormalItem } from "@/types/itemTypes";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState } from "react";

export default function DiscountImageHolder({ data }: { data: NormalItem[] }) {
  console.log(data, " discountimg holder:");

  const [displayImage, setDisplayImage] = useState<string | StaticImport>(
    data[0].image
  );
  const [index, setIndex] = useState(0);
  const handleChangeImage = (index: number) => {
    setDisplayImage(data[index].image);
    setIndex(index);
  };
  return (
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
      {data.map((_, num) => (
        <BackgroundFrame
          number={num}
          index={num}
          key={num}
          changeImage={() => handleChangeImage(num)}
        />
      ))}
    </article>
  );
}

export function BackgroundFrame({
  changeImage,
  index,
  number,
}: {
  changeImage: () => void;
  index: number;
  number: number;
}) {
  const colors = [`bg-[#025159]`, `bg-[#8C452B]`, `bg-[#038C8C]`];
  return (
    <React.Fragment key={index}>
      <div
        style={{ top: 5 * index + 10, left: 13 * index }}
        className={` absolute bg-[#025159]  rounded-lg ${
          colors[index]
        }  w-[300px] h-[310px] z-[${4 - index}]`}
      ></div>
      <button
        style={{ top: 5 * index + 10, left: 50 * index }}
        onClick={() => changeImage()}
        className={`absolute hover:h-[360px] bg-[#025159] rounded-lg ${
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
