import { allSneakers } from "@/app/libs/sneakers";
import ProductCard from "./productCard";
import ProductHeader from "./productHeader";
import { allHoodies } from "@/app/libs/hoodies";
import { allDress } from "@/app/libs/dresses";

export default function BestOffers() {
  const discountedSneakers = allSneakers.filter(
    (sneaker) => sneaker.discountPercent > 0
  );
  const discountedHoodies = allHoodies.filter(
    (hoody) => hoody.discountPercent > 0
  );
  const discountedDresses = allDress.filter(
    (dress) => dress.discountPercent > 0
  );
  const bestOffers = [discountedDresses, discountedHoodies, discountedSneakers];
  const links = ["dresses", "", "sneakers"];
  return (
    <ProductHeader>
      {bestOffers.map((item, i) => (
        <ProductCard data={item} key={i} link={links[i] as any} />
      ))}
    </ProductHeader>
  );
}
