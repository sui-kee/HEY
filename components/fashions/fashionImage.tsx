"use client";
import Image from "next/image";
import { Heart } from "../icons/heart";
import { useState } from "react";
import FashionImgLarge from "./fashionImgLarge";

export function FashionImage({ img }: { img: string }) {
  const [viewImg, setViewImg] = useState(false);
  return (
    <div className=" w-full rounded-lg relative cursor-pointer">
      <Image
        onClick={() => setViewImg(!viewImg)}
        height={600}
        width={600}
        src={img}
        alt="Image"
        sizes="max-width(400px):100vw"
        className=" object-cover rounded-lg h-[250px] lg:h-[340px]"
      />
      <Heart />
      {viewImg && (
        <FashionImgLarge img={img} onClick={() => setViewImg(!viewImg)} />
      )}
    </div>
  );
}
