import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Package2Icon, SearchIcon } from "@/components/adminDashboard/v0Icons";
import AdminProducts from "@/components/adminDashboard/adminProducts";
import MyAdminSettingDropdown from "@/components/adminDashboard/adminDropdown";
import UserProvider from "@/components/warpers/userProvider";

export default async function Home() {
  return (
    <div className=" flex flex-col justify-center items-center gap-2 w-full">
      <header className="flex h-14 lg:h-[60px] w-full items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
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
                placeholder="Search products..."
                type="search"
              />
            </div>
          </form>
        </div>
        <MyAdminSettingDropdown />
      </header>
      <UserProvider>
        <AdminProducts />
      </UserProvider>
    </div>
  );
}
