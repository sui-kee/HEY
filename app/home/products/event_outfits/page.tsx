import { allEventOutfits } from "@/app/libs/event_outfis";
import { allHoodies } from "@/app/libs/hoodies";
import ItemCard from "@/components/products/itemCard";

export default function Page() {
  return (
    <main className=" grid grid-cols-4 border-2 gap-3 border-white rounded-lg p-3">
      {allEventOutfits.map((outfit, i) => (
        <ItemCard key={i} img={outfit.image} data={outfit} />
      ))}
    </main>
  );
}
