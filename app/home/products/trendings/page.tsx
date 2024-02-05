import { allHoodies } from "@/app/libs/hoodies";
import ItemCard from "@/components/products/itemCard";

export default function Page() {
  return (
    <main className=" grid grid-cols-4 border-2 gap-3 border-white rounded-lg p-3">
      {allHoodies.map((hoody, i) => (
        <ItemCard key={i} img={hoody.image} data={hoody} />
      ))}
    </main>
  );
}
