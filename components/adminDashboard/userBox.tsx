import { User } from "@/types/userTypes";
import Image from "next/image";
import Link from "next/link";

export default function UserBox({ user }: { user: User }) {
  return (
    <Link
      href={"/admin/users/" + user.email}
      className="flex items-center justify-center flex-col gap-4 w-fit cursor-pointer"
    >
      <Image
        alt="Avatar"
        className="rounded-md overflow-hidden border w-[100px] h-[100px]"
        height={100}
        src={
          "https://firebasestorage.googleapis.com/v0/b/heyshop-9658b.appspot.com/o/hat.png?alt=media&token=da385753-74c2-4b06-8e86-1758009346a4"
        }
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
    </Link>
  );
}
