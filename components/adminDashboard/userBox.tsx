import Image from "next/image";
import Link from "next/link";

type OrderBoxProps = {
  user: any;
};

export default function UserBox({ user }: OrderBoxProps) {
  return (
    <section className="flex items-center justify-center flex-col gap-4 w-fit cursor-pointer">
      <Image
        alt="Avatar"
        className="rounded-md overflow-hidden border w-[100px] h-[100px]"
        height={100}
        src={user.profileImg}
        style={{
          objectFit: "cover",
        }}
        width={100}
      />
      <div className="flex-1 grid gap-1.5">
        <h3 className="font-semibold text-2xl uppercase text-white">
          {user.name}
          {/* <Badge className="ml-1.5 inline shrink-0">Premium</Badge> */}
        </h3>
        {/* <p className="text-sm text-gray-500 dark:text-gray-400">
          #3210
          <br />
          Shipped
        </p> */}
      </div>
      {/* <div className="text-right">
        <p className="font-semibold">$42.25</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">2 items</p>
      </div> */}
    </section>
  );
}
