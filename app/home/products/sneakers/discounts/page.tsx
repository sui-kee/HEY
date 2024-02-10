import ItemCard from "@/components/products/itemCard";
import { NormalItem } from "@/types/itemTypes";

export default async function Page() {
  const allSneakers = await fetch(
    `http://localhost:3001/products?type=sneaker&sortBy=discountPercent`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
  return (
    <main className=" grid grid-cols-4 border-2 gap-3 border-white rounded-lg p-3">
      {allSneakers.map((sneaker: NormalItem, num: number) => (
        <ItemCard key={num} img={sneaker.image} data={sneaker} />
      ))}
    </main>
  );
}
