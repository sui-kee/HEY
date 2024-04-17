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

export default function EditProduct() {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <div>Edit Product</div>
        <div>Adjust the details of the product</div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col gap-2">
          <label
            className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
            htmlFor="made-in"
          >
            MADE IN
          </label>
          <Input
            disabled
            id="made-in"
            placeholder="Enter country"
            value="Japan"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
            htmlFor="price"
          >
            PRICE
          </label>
          <Input id="price" placeholder="Enter price" value="40000mmk" />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
            htmlFor="left"
          >
            LEFT
          </label>
          <Input id="left" placeholder="Enter quantity" value="10" />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
            htmlFor="discount"
          >
            DISCOUNT
          </label>
          <Input id="discount" placeholder="Enter discount" value="0%" />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-sm shrink-0 font-semibold peer-disabled:cursor-not-allowed"
            htmlFor="image"
          >
            IMAGE
          </label>
          <Input id="image" type="file" />
        </div>
      </CardContent>
      <CardFooter className=" gap-7">
        <Button size="lg">create</Button>
        <Button size="lg" onClick={() => router.back()}>
          Back
        </Button>
      </CardFooter>
    </Card>
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
