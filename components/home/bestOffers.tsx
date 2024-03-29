import { NormalItem } from "@/types/itemTypes";
import ProductCard from "./productCard";
import ProductHeader from "./productHeader";

export default async function BestOffers() {
  const allProducts: NormalItem[] = await fetch(
    "http://localhost:3001/products/discounts",
    { next: { revalidate: 20 } }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  const d_dress = allProducts.filter((product) => product.type === "dress");
  const d_sneaker = allProducts.filter((product) => product.type === "sneaker");
  const d_hoody = allProducts.filter((product) => product.type === "hoody");

  return (
    <ProductHeader>
      <ProductCard data={d_dress} link={"dresses"} type="dress" />
      <ProductCard data={d_sneaker} link={""} type="hoody" />
      <ProductCard data={d_hoody} link={"sneakers"} type="sneaker" />
    </ProductHeader>
  );
}
