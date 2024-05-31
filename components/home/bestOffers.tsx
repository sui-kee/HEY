import ProductHeader from "./productHeader";
import { Suspense } from "react";
import { ProductItem } from "@/types/productTypes";
import { ProductCarousels } from "../component/image-carousel";

export default async function BestOffers() {
  const allProducts: ProductItem[] = await fetch(
    "http://54.167.15.95:3001/products/allProducts"
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
        <ProductCarousels discountProducts={d_hoody} linkTo="" />
        <ProductCarousels discountProducts={d_sneaker} linkTo={"sneakers"} />
        <ProductCarousels discountProducts={d_dress} linkTo={"dresses"} />
      </Suspense>
    </ProductHeader>
  );
}
