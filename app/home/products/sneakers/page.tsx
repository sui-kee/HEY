import { allSneakers } from "@/app/libs/sneakers";
import ItemCard from "@/components/products/itemCard";

export default function Page() {
  return (
    <main className=" grid grid-cols-4 border-2 gap-3 border-white rounded-lg p-3">
      {allSneakers.map((sneaker, num) => (
        <ItemCard key={num} img={sneaker.image} data={sneaker} />
      ))}
    </main>
  );
}
