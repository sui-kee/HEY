import { poppin } from "@/app/font";
import { Item, useCarts } from "@/app/store";
import Image from "next/image";
import MyButton from "../MyButton";
import { itemDiscount } from "@/app/libs/cartFunctions";
import { ProductItem } from "@/types/productTypes";

export default function BillItem({ item }: { item: ProductItem }) {
  const removeItem = useCarts((state) => state.removeItem);
  const { total, totalDiscount } = itemDiscount(item);

  return (
    <article
      className={` ${poppin.className} relative flex justify-between items-center w-full text-lg`}
    >
      <Image
        width={100}
        height={100}
        className=" w-[100px] rounded-md bg-center object-cover"
        src={item.image}
        alt="billitem"
      />
      <span>X {item.quantity}=</span>
      <span>
        {total}
        MMK
      </span>
      <MyButton
        text="X"
        className=" bg-red-600 hover:bg-red-400"
        onClick={() => removeItem(item.id)}
      />
    </article>
  );
}
