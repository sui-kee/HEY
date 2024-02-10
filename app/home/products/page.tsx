import ItemCard from "@/components/products/itemCard";
import { NormalItem } from "@/types/itemTypes";

export default async function Page() {
  const allHoodies = await fetch(
    `http://localhost:3001/products?type=hoody&sortBy=name`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
  return (
    <main className=" grid grid-cols-4 border-2 gap-3 border-white rounded-lg p-3">
      {allHoodies.map((hoody: NormalItem, i: number) => (
        <ItemCard key={i} img={hoody.image} data={hoody} />
      ))}
    </main>
  );
}
