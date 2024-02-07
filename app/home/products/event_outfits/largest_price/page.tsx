import { allEventOutfits } from "@/app/libs/event_outfis";
import ItemCard from "@/components/products/itemCard";

export default function Page() {
  const items = allEventOutfits.sort((a, b) => b.price - a.price);
  return (
    <main className=" grid grid-cols-4 border-2 gap-3 border-white rounded-lg p-3">
      {items.map((item, num) => (
        <ItemCard key={num} img={item.image} data={item} />
      ))}
    </main>
  );
}
