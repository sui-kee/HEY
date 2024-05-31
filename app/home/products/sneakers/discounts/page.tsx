import ItemCard from "@/components/products/itemCard";
import ProductItemsWarper from "@/components/warpers/productsItemWarper";
import { NormalItem } from "@/types/itemTypes";

export default async function Page() {
  const allSneakers = await fetch(
    `http://54.167.15.95:3001/products?type=sneaker&sortBy=discountPercent`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
  return (
    <ProductItemsWarper>
      {allSneakers.map((sneaker: NormalItem, num: number) => (
        <ItemCard key={num} img={sneaker.image} data={sneaker} />
      ))}
    </ProductItemsWarper>
  );
}
