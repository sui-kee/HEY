"use client";
import { poppin } from "@/app/font";
import { useIsUp } from "@/app/store";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
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
      className=" bg-transparent mt-2 flex justify-start flex-col gap-4 items-start z-20"
    >
      <article className=" flex justify-start items-start gap-1">
        <header className=" flex justify-start gap-2 items-center">
          <svg
            fill="#ffffff"
            height="200px"
            width="200px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-108 89.5 37.2 78.5"
            xmlSpace="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M-79.2,123.8v40.3h-9v-29.8c0-0.5-0.4-1-1-1h-0.2c-0.5,0-1,0.4-1,1v29.9h-9v-40.5H-79.2z M-80.3,94.4H-82l-7.4,8.5l-7.4-8.5 h-1.7c-5.5,0-9.1,4.6-9.1,10.3v22.8h6.2v-21.1c0-0.6,0.5-1,1-1c0.6,0,1,0.4,1,1v14.8h20.2v-14.8c0-0.6,0.5-1,1-1c0.6,0,1,0.5,1,1 v21.1h6.2v-22.7C-71.1,99-74.6,94.4-80.3,94.4z"></path>{" "}
            </g>
          </svg>
        </header>
        <div className="flex justify-start items-start gap-2 flex-col">
          <h3 className={` ${poppin.className} text-2xl`}>Clothes</h3>
          <h2 className=" font-mono text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            porro voluptatum doloribus earum! Fugiat sed accusantium earum dolor
            quos, dolores commodi ex incidunt cumque repellat ullam facilis,
            minima eveniet velit?
          </h2>
        </div>
      </article>
    </section>
  );
}
