/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/5Ao4h1PVEvX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'
import { Rethink_Sans } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { convertDateTime } from "@/app/libs/dateTimeFilter";
import Link from "next/link";
import { Order } from "@/types/orderTypes";
import { totalPriceFormat } from "@/app/libs/globalsFuns";

const getOrders = async () => {
  const response = await axios.get("http://localhost:3001/orders");
  if (response.status === 201) {
    return response.data;
  } else {
    return alert("there is error in fetching orders...");
  }
};

export async function OrdersList() {
  const orders: Order[] = await getOrders();
  console.log("orders are :", orders);

  return (
    <div className="flex flex-col overflow-auto w-full h-full bg-white">
      <div className="border shadow-sm overflow-auto">
        <div className="grid grid-cols-3 items-center border-b px-4 py-2 text-sm md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 dark:border-gray-800">
          <div className="flex items-center gap-2 text-base font-medium md:col-span-2 lg:col-span-2 xl:col-span-2">
            <span>Viewing</span>
            <div className="grid gap-1 sm:grid-flow-col ml-auto">
              <Button className="rounded-full" size="icon" variant="ghost">
                10
              </Button>
              <Button size="icon" variant="ghost">
                25
              </Button>
              <Button size="icon" variant="ghost">
                50
              </Button>
            </div>
          </div>
          <div className="col-span-2 flex flex-col md:flex-row md:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center">
            <div className="flex items-center gap-2 text-sm md:mr-2">
              <Label className="min-w-[100px] text-base" htmlFor="search">
                Search
              </Label>
              <Input
                className="w-full max-w-[200px] text-sm"
                id="search"
                placeholder="Search orders..."
              />
            </div>
            <div className="ml-auto flex items-center gap-2 shrink-0">
              <Button size="sm" variant="outline">
                <SearchIcon className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
          <div className="grid items-center justify-start gap-2 text-sm md:col-start-6 md:justify-end lg:col-start-6 lg:justify-end xl:col-start-6 xl:justify-end">
            <Button className="rounded-full" size="icon" variant="outline">
              <ChevronLeftIcon className="w-4 h-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
              <ChevronRightIcon className="w-4 h-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
        <div className="p-2 md:p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden sm:table-cell">Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="hidden md:table-cell">Total</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden sm:table-cell">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order: Order, index: number) => (
                <TableRow key={index}>
                  <TableCell className="hidden  sm:table-cell font-medium">
                    #{order.orderCode}
                  </TableCell>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell className="hidden  md:table-cell">
                    {convertDateTime(order.orderTime)}
                  </TableCell>
                  <TableCell className="hidden  md:table-cell ">
                    ${totalPriceFormat(order.total)}
                  </TableCell>
                  <TableCell className="hidden  sm:table-cell">
                    {order.status}
                  </TableCell>
                  <TableCell className="hidden  sm:table-cell ">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Link href={"/admin/orders/" + order.id}>
                            View order
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MoreHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
