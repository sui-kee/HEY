import { Image } from "antd";
import { Heart } from "../icons/heart";

export function FashionImage({ img }: { img: string }) {
  return (
    <div className="w-full rounded-lg overflow-hidden relative">
      <Image
        preview={false}
        src={img}
        alt="Image 1"
        className=" w-full rounded-lg"
      />
      <Heart />
    </div>
  );
}
