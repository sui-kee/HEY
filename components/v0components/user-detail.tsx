/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8Pb2EZnY74P
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { convertDateTime } from "@/app/libs/dateTimeFilter";
import { totalPriceFormat } from "@/app/libs/globalsFuns";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Order } from "@/types/orderTypes";
import { User } from "@/types/userTypes";
import axios from "axios";

const getOrderByUserId = async (id: string) => {
  const response = await axios.get(
    `http://localhost:3001/orders/byUserId/${id}`
  );
  if (response.status === 201) {
    return response.data;
  } else {
    return console.log("error in fetcing order for user...");
  }
};

export async function UserDetail({ user }: { user: User }) {
  const orders = await getOrderByUserId(user.id);
  console.log("orders by user: ", orders, "user :", user.id);

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 bg-white h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                <LocateIcon className="w-5 h-5 inline-block mr-1" />
                San Francisco, CA
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Phone</p>
              <p className="text-gray-900 dark:text-gray-50">(123) 456-7890</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-gray-900 dark:text-gray-50">{user.email}</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-2 lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Purchase History</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order #</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order: Order, index: number) => (
                <TableRow key={index}>
                  <TableCell>1234</TableCell>
                  <TableCell>{convertDateTime(order.orderTime)}</TableCell>
                  <TableCell>
                    ${order && totalPriceFormat(order.total)}
                  </TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function LocateIcon(props: any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
