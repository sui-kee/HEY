import ItemCard from "@/components/products/itemCard";
import ProductItemsWarper from "@/components/warpers/productsItemWarper";
import { NormalItem } from "@/types/itemTypes";

export default async function Page() {
  const allDress = await fetch(
    `http://localhost:3001/products?type=dress&sortBy=discountPercent`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
  return (
    <ProductItemsWarper>
      {allDress.map((dress: NormalItem, num: number) => (
        <ItemCard key={num} img={dress.image} data={dress} />
      ))}
    </ProductItemsWarper>
  );
}
