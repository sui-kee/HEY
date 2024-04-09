import Image from "next/image";

export default function FashionImgLarge({
  img,
  onClick,
}: {
  img: any;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className=" fixed z-[100] top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)]"
    >
      <Image
        src={img}
        alt="fashion image"
        height={800}
        width={400}
        className="h-[90vh]  rounded-md object-cover"
      />
    </div>
  );
}
