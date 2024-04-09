import { corgetta, poppin } from "@/app/font";
import Image from "next/image";
import Beach from "./../../public/summertime.jpg";

export default function WhatsNew() {
  return (
    <section className=" w-full flex flex-col justify-start gap-2 items-start">
      <article className=" flex rounded-lg justify-center z-10 overflow-hidden mb-3 w-full gap-3 items-center min-h-[60vh] md:min-h-[450px] flex-col relative">
        <Image
          fill
          className=" object-cover bg-center z-[1]"
          src={Beach}
          placeholder="blur"
          alt="beach"
          priority
        />
        <h2
          className={` ${corgetta.className} z-[2]  text-[80px] text-yellow-500`}
        >
          {`It's summer time`}
        </h2>
        <div
          className={` ${poppin.className} z-[2] text-4xl text-black flex gap-3 items-center `}
        >
          <h4>Celebrate with</h4>
          <h4 className=" text-white rounded-md bg-blue-600 p-2">
            our product
          </h4>
        </div>
      </article>
    </section>
  );
}
