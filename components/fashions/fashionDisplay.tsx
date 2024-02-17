import { cool_outfits } from "@/app/libs/cooloutfits";
import { Image } from "antd";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import { Heart } from "../icons/heart";

export default function FashionImgDisplay() {
  return (
    <section className="flex flex-wrap gap-2 justify-start items-start p-2 ">
      <article className="flex-[24%] max-w-[24%] ">
        {cool_outfits.slice(0, 5).map((outfit, i) => (
          <FashionImage img={outfit.source} key={i} />
        ))}
      </article>
      <article className="flex-[24%] max-w-[24%] ">
        {cool_outfits.slice(5, 10).map((outfit, i) => (
          <FashionImage img={outfit.source} key={i} />
        ))}
      </article>
      <article className="flex-[24%] max-w-[24%] ">
        {cool_outfits.slice(10, 15).map((outfit, i) => (
          <FashionImage img={outfit.source} key={i} />
        ))}
      </article>
      <article className="flex-[24%] max-w-[24%] ">
        {cool_outfits.slice(15, 20).map((outfit, i) => (
          <FashionImage img={outfit.source} key={i} />
        ))}
      </article>
    </section>
  );
}

export function FashionImage({ img, key }: { img: string; key: number }) {
  return (
    <div className="w-full rounded-lg overflow-hidden relative" key={key}>
      <Image
        preview={false}
        src={img}
        alt="Image 1"
        className=" w-full rounded-lg"
      />
      <Heart />
    </div>
  );
}
