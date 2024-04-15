import Image from "next/image";

export default function OrderDetailItem() {
  return (
    <div className="flex items-start gap-4 w-full">
      <Image
        alt="Avatar"
        className="rounded-md overflow-hidden border w-[48px] h-[48px]"
        height={48}
        src="/placeholder.svg"
        style={{
          objectFit: "cover",
        }}
        width={48}
      />
      <div className="flex-1 grid gap-1.5">
        <h3 className="font-semibold text-sm">
          Olivia Martin
          {/* <Badge className="ml-1.5 inline shrink-0">Premium</Badge> */}
        </h3>
      </div>
      <div className="text-right">
        <p className="font-semibold">$42.25</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">2 items</p>
      </div>
    </div>
  );
}
