/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Nj896tbRjRw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { calculateTotal, itemDiscount } from "@/app/libs/cartFunctions";
import { convertDateTime } from "@/app/libs/dateTimeFilter";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Order } from "@/types/orderTypes";
import Link from "next/link";
import { Button } from "../ui/button";
import DeleteOrder from "./orderFuns";

export function OrderDetail({ order }: { order: Order }) {
  const totalPrice = calculateTotal(order.products);
  return (
    <>
      <Card>
        <CardHeader>
          <DeleteOrder orderId={order.id} />
          <CardTitle>Order #3102</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1 text-sm">
            <Link className="underline text-blue-600" href="#">
              View details
            </Link>
            <div>Ships from: Warehouse 1</div>
            <div>Tracking number: 1234567890</div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            variant="outline"
          >
            Decline
          </Button>
          <Button className="dark:bg-blue-500 dark:text-gray-100 dark:hover:bg-blue-600">
            finished
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Contact information</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <div className="grid gap-1">
            <Link className="text-blue-600 underline" href="#">
              {order.customer.email}
            </Link>
            <div className="text-gray-500 dark:text-gray-400">
              +1 888 8888 8888
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Order time</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <div>{convertDateTime(order.orderTime)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total amount</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <div>{totalPrice}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Status</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <div>{order.status}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {order.products.map((product, index) => (
              <div key={index}>
                <img
                  alt="Product image"
                  className="aspect-video object-cover rounded-md overflow-hidden"
                  height="480"
                  src={product.image}
                  width="640"
                />
                <div className="grid gap-1 text-sm">
                  <div className="font-semibold">{product.name}</div>
                  <div>price: {product.price}</div>
                  <div>Quantity: {product.quantity}</div>
                  <div>Total: {product.price * product.quantity!}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
