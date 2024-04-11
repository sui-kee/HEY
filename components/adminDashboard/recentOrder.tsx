"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import {
  Package2Icon,
  PackageIcon,
  SearchIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "./v0Icons";
export default function RecentOrder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Latest customer transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border-t pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <img
                alt="Avatar"
                className="rounded-full overflow-hidden border"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="flex-1 grid gap-1.5">
                <h3 className="font-semibold text-sm">
                  Olivia Martin
                  <Badge className="ml-1.5 inline shrink-0">Premium</Badge>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  #3210
                  <br />
                  Shipped
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">$42.25</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  2 items
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                alt="Avatar"
                className="rounded-full overflow-hidden border"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="flex-1 grid gap-1.5">
                <h3 className="font-semibold text-sm">
                  Ava Johnson
                  <Badge className="ml-1.5 inline shrink-0">Gold</Badge>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  #3209
                  <br />
                  Paid
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">$74.99</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  1 items
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                alt="Avatar"
                className="rounded-full overflow-hidden border"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="flex-1 grid gap-1.5">
                <h3 className="font-semibold text-sm">
                  Lisa Anderson
                  <Badge className="ml-1.5 inline shrink-0">Silver</Badge>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  #3203
                  <br />
                  Shipped
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">$34.50</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  1 items
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                alt="Avatar"
                className="rounded-full overflow-hidden border"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="flex-1 grid gap-1.5">
                <h3 className="font-semibold text-sm">
                  Sophia Anderson
                  <Badge className="ml-1.5 inline shrink-0">Premium</Badge>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  #3207
                  <br />
                  Paid
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">$99.99</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  1 items
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
