import ProductCard from "./productCard";
import ProductHeader from "./productHeader";
import { Suspense } from "react";
import { ProductItem } from "@/types/productTypes";

export default async function BestOffers() {
  const allProducts: ProductItem[] = await fetch(
    "http://localhost:3001/products/allProducts"
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log(error));
  const d_dress = allProducts
    ? allProducts.filter(
        (product) => product.type === "dress" && product.discountPercent > 0
      )
    : [];
  const d_sneaker = allProducts
    ? allProducts.filter(
        (product) => product.type === "sneaker" && product.discountPercent > 0
      )
    : [];
  const d_hoody = allProducts
    ? allProducts.filter(
        (product) => product.type === "hoody" && product.discountPercent > 0
      )
    : [];

  return (
    <ProductHeader>
      <Suspense fallback={<div>.....</div>}>
        <ProductCard data={d_dress} link={"dresses"} type="dress" />
        <ProductCard data={d_sneaker} link={""} type="hoody" />
        <ProductCard data={d_hoody} link={"sneakers"} type="sneaker" />
      </Suspense>
    </ProductHeader>
  );
}
