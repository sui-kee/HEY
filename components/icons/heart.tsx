"use client";

import Image from "next/image";
import { useState } from "react";

export function Heart() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      {isLiked ? (
        <Image
          onClick={() => setIsLiked(!isLiked)}
          src={"/full-heart.svg"}
          width={100}
          height={100}
          className=" h-[50px] w-[50px] cursor-pointer absolute top-2 right-2"
          alt="heart"
        />
      ) : (
        <Image
          onClick={() => setIsLiked(!isLiked)}
          src={"/half-heart.svg"}
          width={100}
          height={100}
          className=" h-[50px] w-[50px] cursor-pointer absolute top-2 right-2"
          alt="heart"
        />
      )}
    </>
  );
}
