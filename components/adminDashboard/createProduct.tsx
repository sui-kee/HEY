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
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProductTypeDropdown } from "@/components/component/product-type-dropdown";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/app/firebase";

export const uploadFileToFirebase = async (
  file: any,
  fileDirectory: any,
  setUrl: (url: any) => void
) => {
  const fileName = `${fileDirectory}/${file.name + uuidv4()}`;
  const imageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(imageRef, file);
  // set up an event listener to track upload progress
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(percent + "% done");
    },
    (error) => {
      console.log(error);
      console.log(error.message);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
        //   toast.success("uploaded successfully!");
        console.log("work somehow and url:::" + url);

        setUrl(url);
      });
    }
  );
};

export default function CreateProduct() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [madeIn, setMadeIn] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [left, setLeft] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [chooseImage, setChooseImage] = useState<File | "">("");
  const [total, setTotal] = useState<number | undefined>(undefined);
  const [solded, setSolded] = useState<any>(undefined);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [type, setType] = useState<"hoody" | "dress" | "sneaker" | "event">(
    "hoody"
  );
  const router = useRouter();

  const handleSubmitToDb = async () => {
    const createdResponse = await axios.post(
      `http://localhost:3001/products/`,
      {
        name: name,
        type: type,
        madeIn: madeIn,
        image: imageUrl ? imageUrl : "/shopping.png",
        price: price,
        left: left,
        total: total,
        solded: solded,
        discountPercent: discount,
        description: description,
      }
    );
    if (createdResponse.status === 200) {
      alert("success creating product");
      return router.back();
    } else {
      console.log("error data in creating new product:", createdResponse.data);

      return alert("error on editing products...");
    }
  };
  const handleCreateNewProduct = async () => {
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

  // const handleChangeType = (selectedType:string)=>{
  //   setType(selectedType)
  // }

  //console.log("my product in admin: ", product, "and name is: ", name);
  useEffect(() => {
    const updateProduct = async () => {
      await handleSubmitToDb();
    };
    if (imageUrl) {
      updateProduct();
    }
  }, [imageUrl]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateNewProduct();
      }}
    >
      <Card>
        <CardHeader>
          <div>Edit Product</div>
          <div>Adjust the details of the product</div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">NAME</label>
            <Input
              required
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
              required
              id="made-in"
              placeholder="Enter country"
              value={madeIn}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price">PRICE</label>
            <Input
              required
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
              required
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
              required
              id="total"
              placeholder="Total amount"
              type="number"
              value={total}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="solded">SOLDED</label>
            <Input
              required
              id="solded"
              placeholder="solded amount"
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
              src={
                chooseImage ? URL.createObjectURL(chooseImage) : "/shopping.png"
              }
            />
            <Input
              required
              id="image"
              accept="image/*"
              type="file"
              onChange={(e) => handleChooseImage(e.target.files?.[0] as File)}
            />
          </div>
        </CardContent>
        <CardFooter className=" gap-7">
          <Button size="lg" type="submit">
            create
          </Button>
          <Button size="lg" type="button" onClick={() => router.back()}>
            Back
          </Button>
        </CardFooter>
      </Card>
    </form>
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
