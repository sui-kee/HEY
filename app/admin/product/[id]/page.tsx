/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jUtbU21OX8Q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

const getProduct = async (productId: string) => {
  const response = await axios.get(
    "http://localhost:3001/products/" + productId
  );
  if (response.status === 201) {
    return response.data;
  } else {
    console.log("error fetching product with id:", response.data);

    return alert("error fetching product:");
  }
};

export default function EditProduct({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const router = useRouter();
  const productId = params.id;
  console.log("product edit data: ", product);

  useEffect(() => {
    const get_product = async () => {
      const product = await getProduct(productId);
      setProduct(product[0]);
    };
    get_product();
  }, []);
  return (
    product && (
      <Card>
        <CardHeader>
          <div>Edit Product</div>
          <div>Adjust the details of the product</div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
              htmlFor="name"
            >
              NAME
            </label>
            <Input
              id="name"
              placeholder="Name"
              value={product && product.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
              htmlFor="description"
            >
              DESCRIPTION
            </label>
            <textarea
              className="resize-y min-h-[100px] border rounded-md"
              id="description"
              placeholder="Enter description"
              value={product && product.description}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
              htmlFor="made-in"
            >
              MADE IN
            </label>
            <Input
              id="made-in"
              placeholder="Enter country"
              value={product && product.madeIn}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
              htmlFor="price"
            >
              PRICE
            </label>
            <Input
              id="price"
              placeholder="Enter price"
              type="number"
              value={product && product.price}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
              htmlFor="left"
            >
              LEFT
            </label>
            <Input
              id="left"
              type="number"
              placeholder="Enter quantity"
              value={product && product.left}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
              htmlFor="discount"
            >
              DISCOUNT
            </label>
            <Input
              id="discount"
              placeholder="Enter discount"
              type="number"
              value={product && product.discountPercent}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
              htmlFor="image"
            >
              IMAGE
            </label>
            <Image
              width={200}
              height={200}
              className="w-[200px] h-[200px] object-cover rounded-md"
              alt="image"
              src={product && product.image}
            />
            <Input id="image" type="file" />
          </div>
        </CardContent>
        <CardFooter className=" gap-7">
          <Button size="lg">Save Changes</Button>
          <Button size="lg" onClick={() => router.back()}>
            Back
          </Button>
        </CardFooter>
      </Card>
    )
  );
}

// === styles.css ===

// body {
//   font-family: var(--font-inter), sans-serif;
// }

// h1, h2, h3, h4, h5, h6 {
//   font-family: var(--font-inter), sans-serif;
// }

// === layout.jsx ===

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

// import { Inter } from 'next/font/google'
// import { Inter } from 'next/font/google'
// import './styles.css'

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })
// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.variable + inter.variable}>
//         {children}
//       </body>
//     </html>
//   )
