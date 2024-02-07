import { allDress } from "@/app/libs/dresses";
import ItemCard from "@/components/products/itemCard";

export default function Page() {
  const dresses = allDress.sort(
    (a, b) => b.discountPercent - a.discountPercent
  );
  return (
    <main className=" grid grid-cols-4 border-2 gap-3 border-white rounded-lg p-3">
      {dresses.map((dress, num) => (
        <ItemCard key={num} img={dress.image} data={dress} />
      ))}
    </main>
  );
}
