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
import { uploadFileToFirebase } from "@/app/libs/uploadToFirebase";
import { ProductItem } from "@/types/productTypes";
import AlertBox from "@/components/component/alet-box";
import { ProductTypeDropdown } from "@/components/component/product-type-dropdown";

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
  const [product, setProduct] = useState<ProductItem | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [madeIn, setMadeIn] = useState("");
  const [price, setPrice] = useState("");
  const [left, setLeft] = useState("");
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState<any>("");
  const [chooseImage, setChooseImage] = useState<File | undefined>(undefined);
  const [total, setTotal] = useState<number | undefined>(undefined);
  const [solded, setSolded] = useState<any>(undefined);
  const [type, setType] = useState<"hoody" | "dress" | "sneaker" | "event">(
    "hoody"
  );
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();
  const productId = params.id;

  const deleteProduct = async (productId: string) => {
    const response = await axios.delete(
      `http://localhost:3001/products/delete/${productId}`
    );
    if (response.status === 200) {
      alert(" deleting process complete");
      return router.back();
    } else {
      console.log(response.data);

      return alert("error in deleting product");
    }
  };

  const handleSubmitToDb = async () => {
    const editProduct = await axios.put(
      `http://localhost:3001/products/edit/${productId}`,
      {
        name: name,
        type: type,
        madeIn: madeIn,
        image: imageUrl ? imageUrl : product?.image,
        price: price,
        left: left,
        total: total,
        solded: solded,
        discountPercent: discount,
        description: description,
      }
    );
    if (editProduct.status === 200) {
      alert("success editing product");
      return router.back();
    } else {
      return alert("error on editing products...");
    }
  };
  const handleSaveChanges = async () => {
    if (chooseImage) {
      console.log("firebase mode");

      return await uploadFileToFirebase(chooseImage, "products", setImageUrl);
    }
    console.log("normal mode ");

    return await handleSubmitToDb();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = e.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "made-in":
        setMadeIn(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "left":
        setLeft(value);
        break;
      case "discount":
        setDiscount(parseInt(value));
        break;
      case "total":
        setTotal(parseInt(value));
        break;
      case "solded":
        setSolded(parseInt(value));
        break;
      // case "image":
      //   setChooseImage(files?.[0] as File);
      //   break;
      default:
        break;
    }
  };
  const handleChooseImage = (image: File) => {
    console.log("when choose new image: ", image);

    setChooseImage(image as File);
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id);
  };

  useEffect(() => {
    const get_product = async () => {
      const product = await getProduct(productId);
      setProduct(product);
      setName(product.name || "");
      setDescription(product.description || "");
      setMadeIn(product.madeIn || "");
      setPrice(product.price || "");
      setLeft(product.left || "");
      setSolded(product.solded || 0);
      setTotal(product.total || 0);
      setDiscount(product.discountPercent || 0);
      setImage(product.image || "");
    };
    get_product();
  }, [productId]);
  console.log("my product in admin: ", product, "and name is: ", name);
  useEffect(() => {
    const updateProduct = async () => {
      await handleSubmitToDb();
    };
    if (imageUrl) {
      updateProduct();
    }
  }, [imageUrl]);

  return (
    product && (
      <Card>
        <CardHeader>
          <div>Edit Product</div>
          <div>Adjust the details of the product</div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">NAME</label>
            <Input
              id="name"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">DESCRIPTION</label>
            <textarea
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e: any) => handleInputChange(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="made-in">MADE IN</label>
            <Input
              id="made-in"
              placeholder="Enter country"
              value={madeIn}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price">PRICE</label>
            <Input
              id="price"
              placeholder="Enter price"
              type="number"
              value={price}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="left">LEFT</label>
            <Input
              id="left"
              type="number"
              placeholder="Enter quantity"
              value={left}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="discount">DISCOUNT</label>
            <Input
              id="discount"
              placeholder="Enter discount"
              type="number"
              value={discount as number}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="discount">TOTAL</label>
            <Input
              id="total"
              placeholder="Enter discount"
              type="number"
              value={total}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="discount">SOLDED</label>
            <Input
              id="solded"
              placeholder="Enter discount"
              type="number"
              value={solded}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="product-type">Choose product type</label>
            <ProductTypeDropdown
              header={type}
              options={["hoody", "dress", "sneaker", "event"]}
              onSelect={setType}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image">IMAGE</label>
            <Image
              width={200}
              height={200}
              className="w-[200px] h-[200px] object-cover rounded-md"
              alt="image"
              src={chooseImage ? URL.createObjectURL(chooseImage) : image}
            />
            <Input
              id="image"
              accept="image/*"
              type="file"
              onChange={(e) => handleChooseImage(e.target.files?.[0] as File)}
            />
          </div>
        </CardContent>
        <CardFooter className=" gap-7">
          <Button size="lg" onClick={() => handleSaveChanges()}>
            Save Changes
          </Button>
          <Button size="lg" onClick={() => router.back()}>
            Back
          </Button>
          <Button
            size="lg"
            className=" hover:bg-red-500 "
            onClick={() => setDeleting(!deleting)}
          >
            Delete product
          </Button>
          {deleting && (
            <AlertBox
              message="Are you sure to delete?"
              confirmFunction={() => handleDeleteProduct(product.id)}
              backFunction={() => setDeleting(!deleting)}
            />
          )}
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
