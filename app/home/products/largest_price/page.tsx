import ItemCard from "@/components/products/itemCard";
import ProductItemsWarper from "@/components/warpers/productsItemWarper";
import { NormalItem } from "@/types/itemTypes";

export default async function Page() {
  const allHoodies = await fetch(
    `http://localhost:3001/products?type=hoody&sortBy=price`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
  return (
    <ProductItemsWarper>
      {allHoodies.map((hoody: NormalItem, i: number) => (
        <ItemCard key={i} img={hoody.image} data={hoody} />
      ))}
    </ProductItemsWarper>
  );
}
