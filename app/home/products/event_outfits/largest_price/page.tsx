import ItemCard from "@/components/products/itemCard";
import { NormalItem } from "@/types/itemTypes";

export default async function Page() {
  const allEventOutfits = await fetch(
    `http://localhost:3001/products?type=event_outfit&sortBy=price`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
  return (
    <main className=" grid grid-cols-4 border-2 gap-3 border-white rounded-lg p-3">
      {allEventOutfits.map((outfit: NormalItem, i: number) => (
        <ItemCard key={i} img={outfit.image} data={outfit} />
      ))}
    </main>
  );
}
