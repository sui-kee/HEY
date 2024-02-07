import { allSneakers } from "@/app/libs/sneakers";
import ItemCard from "@/components/products/itemCard";

export default function Page() {
  const sneakers = allSneakers.sort(
    (a, b) => b.discountPercent - a.discountPercent
  );
  return (
    <main className=" grid grid-cols-4 border-2 gap-3 border-white rounded-lg p-3">
      {sneakers.map((item, num) => (
        <ItemCard key={num} img={item.image} data={item} />
      ))}
    </main>
  );
}
