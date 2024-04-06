import { cool_outfits } from "@/app/libs/cooloutfits";
import React from "react";
import { FashionImage } from "./fashionImage";

export function FashionImgDisplay1() {
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

export default function FashionImageDisplay() {
  return (
    <section className=" grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
      {cool_outfits.map((outfit, index) => (
        <FashionImage img={outfit.source} key={index} />
      ))}
    </section>
  );
}
