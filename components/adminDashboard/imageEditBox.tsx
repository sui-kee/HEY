import Image from "next/image";

export default function ImageEditBox({
  chooseImage,
  image,
}: {
  chooseImage: any;
  image: string;
  onChange: () => void;
}) {
  return (
    <Image
      width={200}
      height={200}
      className="w-[200px] h-[200px] object-cover rounded-md"
      alt="image"
      src={chooseImage ? chooseImage : image}
    />
  );
}
