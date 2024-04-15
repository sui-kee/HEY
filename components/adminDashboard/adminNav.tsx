"use client";

import {
  BellIcon,
  HomeIcon,
  LineChartIcon,
  Package2Icon,
  PackageIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Badge } from "../ui/badge";

export default function V0adminNav() {
  const path = usePathname();
  console.log("cuurent path: ", path);

  return (
    <div className="hidden w-[20vw] border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <span className="">Admin page</span>
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  [" bg-gray-100  hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"]:
                    path === "/admin",
                }
              )}
              href="/admin"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  [" bg-gray-100  hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"]:
                    path.includes("orders"),
                }
              )}
              href="/admin/orders"
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0  items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  [" bg-gray-100  hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"]:
                    path.includes("product"),
                }
              )}
              href="/admin/product"
            >
              <PackageIcon className="h-4 w-4" />
              Products
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  [" bg-gray-100  hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"]:
                    path.includes("users"),
                }
              )}
              href="/admin/users"
            >
              <UsersIcon className="h-4 w-4" />
              users
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                {
                  [" bg-gray-100  hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"]:
                    path.includes("analytic"),
                }
              )}
              href="/admin/analytic"
            >
              <LineChartIcon className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
