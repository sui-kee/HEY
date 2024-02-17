import { Image } from "antd";
import { Heart } from "../icons/heart";

export function FashionImage({ img, key }: { img: string; key: number }) {
  return (
    <div className="w-full rounded-lg overflow-hidden relative" key={key}>
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
