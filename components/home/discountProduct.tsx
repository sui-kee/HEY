import { conforta } from "@/app/font";
import { ProductItem } from "@/types/productTypes";
import Image from "next/image";
import Link from "next/link";

export function DiscountProduct({
  product,
  link,
}: {
  product: ProductItem;
  link: "" | "sneakers" | "dresses" | "event_outfits";
}) {
  return (
    <section className="grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-4 w-full gap-3">
      <article className=" h-[350px] lg:h-[450px] w-full relative ">
        <Image
          src={product.image}
          fill
          alt="dress"
          className={` rounded-lg  bg-center object-cover  `}
        />
      </article>
      <article className=" flex col-span-1 sm:col-span-3 flex-col justify-start gap-2  ">
        <h2 className=" text-4xl text-[#038C8C] capitalize">{product.type}</h2>
        <h3 className="text-3xl text-white">{product.name}</h3>
        <p className={` ${conforta.className} text-sm w-fit sm:text-lg`}>
          {product.description}
        </p>
        <footer className=" flex justify-start items-start p-2 gap-2 flex-col">
          <div
            className={` ${conforta.className} flex justify-start items-center gap-2`}
          >
            <h2 className=" text-3xl text-white">Special</h2>
            <h3 className=" text-yellow-400 text-[40px]">
              - {product.discountPercent}% off
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
                {product.total}
              </h3>
            </div>
            <div
              className={` ${conforta.className} flex justify-start items-center gap-2`}
            >
              <h2 className=" text-xl font-serif uppercase text-white">Left</h2>
              <h3 className=" text-red-400 text-xl font-extrabold bg-black p-1 rounded-md">
                {product.left}
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
