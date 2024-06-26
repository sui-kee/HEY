/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/UKq1qkO8Gxu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import React from "react";
import { DiscountProduct } from "../home/discountProduct";
import { ProductItem } from "@/types/productTypes";

export function ProductCarousels({
  discountProducts,
  linkTo,
}: {
  discountProducts: ProductItem[];
  linkTo: "" | "dresses" | "sneakers" | "event_outfits";
}) {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {discountProducts.map((product, index) => (
          <CarouselItem key={index}>
            <DiscountProduct product={product} link={linkTo} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/50 p-2 shadow-md hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/80 dark:focus:ring-gray-300">
        <ChevronLeftIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/50 p-2 shadow-md hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/80 dark:focus:ring-gray-300">
        <ChevronRightIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
      </CarouselNext>
    </Carousel>
  );
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
