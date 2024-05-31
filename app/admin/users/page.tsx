import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Package2Icon, SearchIcon } from "@/components/adminDashboard/v0Icons";
import Image from "next/image";
import UserBox from "@/components/adminDashboard/userBox";
import { User } from "@/types/userTypes";

const getAllUsers = async () => {
  const response = await fetch("https://54.167.15.95:3001/users");
  if (response.ok) {
    return await response.json();
  } else {
    console.log("error in fetching usersss");
    // console.log(response.data);
  }
};

export default async function Page() {
  const users = await getAllUsers();
  // console.log("allusers from admin user:", users);

  return (
    <div className=" flex flex-col gap-2 w-full h-full">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="lg:hidden" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                placeholder="Search users..."
                type="search"
              />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full " size="icon" variant="ghost">
              <Image
                alt="Avatar"
                className=" w-[32px] h-[32px]"
                height={32}
                src="/setting.svg"
                //   style={{
                //     aspectRatio: "32/32",
                //     objectFit: "cover",
                //   }}
                width={32}
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <section className=" gap-8 p-2 flex justify-start items-center ">
        {users &&
          users.map(
            (user: User, index: number) =>
              user.name != "admin" && <UserBox key={index} user={user} />
          )}
      </section>
    </div>
  );
}
