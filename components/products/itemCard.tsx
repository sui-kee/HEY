import Image from "next/image";
import ItemDetailDrawer from "./itemDetailDrawer";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import MyButton from "../MyButton";
import { NormalItem } from "@/types/itemTypes";

export default function ItemCard({
  img,
  data,
}: {
  img: string | StaticImport;
  data: NormalItem;
}) {
  return (
    <article className="relative w-full min-h-[400px] rounded-lg z-[10] bg-[#038C8C] overflow-hidden">
      <ItemDetailDrawer data={data} />
      <Image
        src={img}
        fill
        alt="hoodie"
        className=" object-cover bg-center z-[-1]"
      />
      {data.discountPercent > 0 ? (
        <MyButton
          text={` ${data.discountPercent}% Off`}
          className=" absolute right-0 top-0 rounded-lg bg-yellow-400 text-white hover:bg-yellow-400 cursor-text"
        />
      ) : null}
    </article>
  );
}
