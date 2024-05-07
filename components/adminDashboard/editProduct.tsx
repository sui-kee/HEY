"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jUtbU21OX8Q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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
import { ProductItem } from "@/types/productTypes";
import AlertBox from "@/components/component/alet-box";
import { ProductTypeDropdown } from "@/components/component/product-type-dropdown";
import SpinLoading from "@/components/pending/loading";
import SuccessIndicator from "@/components/indicator/success";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/app/firebase";

export default function EditProduct({ id }: { id: string }) {
  const [product, setProduct] = useState<ProductItem | null>(null);
  const [deleting, setDeleting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [editing, setEding] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [madeIn, setMadeIn] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [chooseImage, setChooseImage] = useState<File | undefined>(undefined);
  const [total, setTotal] = useState<number>(0);
  const [solded, setSolded] = useState<number>(0);
  const [type, setType] = useState<
    "hoody" | "dress" | "sneaker" | "event_outfit"
  >("hoody");
  const [imageUrl, setImageUrl] = useState<string>("");

  const router = useRouter();
  const productId = id;
  const uploadFileToFirebase = async (
    file: File,
    fileDirectory: string,
    setUrl: (url: string) => void
  ): Promise<void> => {
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

  const getProduct = async (productId: string) => {
    const response = await axios.get(
      "http://localhost:3001/products/" + productId
    );
    if (response.status === 201) {
      return response.data;
    } else {
      console.log("error fetching product with id:", response.data);
      setEding(!editing);
      return alert("error fetching product:");
    }
  };

  const deleteProduct = async (productId: string) => {
    const response = await axios.delete(
      `http://localhost:3001/products/delete/${productId}`
    );
    if (response.status === 200) {
      setSuccess(!success);
      return router.back();
    } else {
      console.log(response.data);
      setEding(!editing);
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
      setSuccess(!success);
      return router.back();
    } else {
      setEding(!editing);
      return alert("error on editing products...");
    }
  };
  const handleSaveChanges = async () => {
    if (chooseImage) {
      console.log("firebase mode");
      try {
        return await uploadFileToFirebase(chooseImage, "products", setImageUrl);
      } catch (error) {
        setEding(!editing);
        return alert("something wentwrong");
      }
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
        setPrice(parseInt(value));
        break;
      case "left":
        setLeft(parseInt(value));
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
      setPrice(product.price || 0);
      setLeft(product.left || 0);
      setType(product.type || "hoody");
      setSolded(product.solded || 0);
      setTotal(product.total || 0);
      setDiscount(product.discountPercent || 0);
      setImage(product.image || "");
    };
    if (id) {
      get_product();
    }
  }, [id]);
  console.log("my product in admin: ", product, "and name is: ", name);
  useEffect(() => {
    const updateProduct = async () => {
      await handleSubmitToDb();
    };
    if (imageUrl) {
      updateProduct();
    }
  }, [imageUrl]);

  return product ? (
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
            options={["hoody", "dress", "sneaker", "event_outfit"]}
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
        <Button
          size="lg"
          onClick={() => {
            setEding(!editing);
            handleSaveChanges();
          }}
        >
          Save Changes
        </Button>
        <Button size="lg" onClick={() => router.back()}>
          Back
        </Button>
        <Button
          size="lg"
          className=" hover:bg-red-500 "
          onClick={() => {
            setEding(editing);
            setDeleting(!deleting);
          }}
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
      {editing ? <SpinLoading /> : null}
      {success ? <SuccessIndicator /> : null}
    </Card>
  ) : (
    <section>fetching</section>
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
