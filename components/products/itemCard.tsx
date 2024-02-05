import Image from "next/image";
import ItemDetailDrawer from "./itemDetailDrawer";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function ItemCard({
  img,
  data,
}: {
  img: string | StaticImport;
  data: any;
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
    </article>
  );
}
