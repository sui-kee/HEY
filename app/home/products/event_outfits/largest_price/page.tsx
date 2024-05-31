import ItemCard from "@/components/products/itemCard";
import ProductItemsWarper from "@/components/warpers/productsItemWarper";
import { NormalItem } from "@/types/itemTypes";

export default async function Page() {
  const allEventOutfits = await fetch(
    `https://54.167.15.95:3001/products?type=event_outfit&sortBy=price`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
  return (
    <ProductItemsWarper>
      {allEventOutfits.map((outfit: NormalItem, i: number) => (
        <ItemCard key={i} img={outfit.image} data={outfit} />
      ))}
    </ProductItemsWarper>
  );
}
