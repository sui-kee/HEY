import { NormalItem } from "@/types/itemTypes";
import ProductItemsWarper from "../warpers/productsItemWarper";
import ItemCard from "../products/itemCard";
import Link from "next/link";

const getAllProducts = async () => {
  const response = await fetch(`http://54.167.15.95:3001/products/allProducts`);
  if (response.status === 201) {
    return response.json();
  } else {
    console.log(response, "error --is response in getting all products");
  }
};

export default async function AdminProducts() {
  const allProducts = await getAllProducts();

  return (
    <ProductItemsWarper>
      <Link
        href={"/admin/products/create"}
        className="relative w-full min-h-[430px] sm:min-h-[260px] lg:min-h-[400px] rounded-lg z-[10] bg-[#038C8C] flex justify-center items-center overflow-hidden"
      >
        <button className=" text-white text-[60px] sm:text-[110px]">+</button>
      </Link>
      {allProducts.map((hoody: NormalItem, i: number) => (
        <ItemCard key={i} img={hoody.image} data={hoody} />
      ))}
    </ProductItemsWarper>
  );
}
