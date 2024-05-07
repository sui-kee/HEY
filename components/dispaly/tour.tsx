"use client";
import { poppin, protest_riot } from "@/app/font";
import { cool_outfits } from "@/app/libs/cooloutfits";
import { useIsUp } from "@/app/store";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Tour() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const setIsUp = useIsUp((state) => state.setIsUp);
  useEffect(() => {
    setIsUp(isInView);
  }, [isInView]);
  return (
    <section
      ref={containerRef}
      className=" bg-black mt-2 flex justify-start flex-col gap-4 items-center z-20 h-[90vh] w-full py-2"
    >
      <h2 className=" text-4xl text-white font-bold font-serif uppercase p-3 w-full text-center">
        Discover fashions
      </h2>
      <article className=" flex justify-center items-center gap-1 flex-warp w-[70vw]">
        <div className=" flex flex-col sm:flex-row gap-1">
          {cool_outfits.slice(7, 10).map((outfit, i) => (
            <header key={i} className=" flex justify-start items-center">
              <Image
                src={outfit.source}
                width={500}
                height={500}
                className=" max-w-[100px] sm:max-w-[140px] lg:max-w-[230px] xl:max-w-[300px] sm:max-h-[500px] rounded-xl "
                alt="img"
              />
            </header>
          ))}
        </div>
        <footer
          className={` ${protest_riot.className} flex justify-center flex-col text-[50px] text-[#025159] uppercase `}
        >
          <h3>See fancy fashions now</h3>
          <Link
            href={"/home/fashions"}
            className=" bg-[#038C8C] text-center p-2 rounded-md hover:bg-[#04BFBF] text-black text-xl "
          >
            See now
          </Link>
        </footer>
      </article>
    </section>
  );
}

{
  /* <div className="flex justify-start items-start gap-2 flex-col">
            <h3 className={` ${poppin.className} text-2xl`}>Clothes</h3>
            <p className=" font-mono text-lg text-transparent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              porro voluptatum doloribus earum! Fugiat sed accusantium earum
              dolor quos, dolores commodi ex incidunt cumque repellat ullam
              facilis, minima eveniet velit?
            </p>
          </div> */
}
