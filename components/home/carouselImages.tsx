import { ProductItem } from "@/types/productTypes";
import { CarouselItem } from "../ui/carousel";
import { DiscountProduct } from "./discountProduct";

export default function CarouselDiscountProducts({
  discountProducts,
  linkTo,
}: {
  discountProducts: ProductItem[];
  linkTo: "" | "dresses" | "sneakers" | "event_outfits";
}) {
  return (
    <>
      {discountProducts.map((product, index) => (
        <CarouselItem key={index}>
          <DiscountProduct product={product} link={linkTo} />
        </CarouselItem>
      ))}
    </>
  );
}
