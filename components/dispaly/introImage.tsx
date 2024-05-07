import Image from "next/image";
import React from "react";
import { open_sans, roboto } from "@/app/font";
import Link from "next/link";
import Cookies from "js-cookie";
import { ProductItem } from "@/types/productTypes";

const getUser = async (id: string) => {
  console.log("usertoken id: ", id);

  try {
    const response = await fetch(
      `http://localhost:3001/users/getUserById?id=` + id
    );

    if (!response.ok) {
      throw new Error("Error fetching user");
    }
    const data = await response.json();
    console.log("get user from middleware getuser data: ", data);

    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

const getAllProducts = async () => {
  try {
    const response = await fetch(`http://localhost:3001/products/allProducts`);

    if (!response.ok) {
      throw new Error("Error fetching products");
    }
    const data = await response.json();
    // console.log("get all products: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export default async function IntroImage() {
  const user = await getUser(Cookies.get("userToken") as string);
  const products = await getAllProducts();

  return (
    <section className=" h-[100vh] sticky top-0 left-0 right-0">
      <div className="flex w-[98vw]  h-full justify-start gap-2 items-center relative">
        <article className=" z-[5]  flex justify-start flex-col gap-3 items-start ">
          <h2
            className={` ${open_sans.className} text-[30px] sm:text-[50px] uppercase text-[#038C8C]`}
          >
            Welcome to <strong>Hey</strong>
          </h2>
          <h2
            className={` ${roboto.className} text-[30px] uppercase text-[#025159]`}
          >
            Step into Fashion Paradise with us
          </h2>

          <footer className=" flex p-1 justify-start  flex-wrap rounded-md border-[#025159] items-center gap-2 z-10">
            {products.slice(0, 5).map((image: ProductItem, i: number) => (
              <Image
                key={i}
                src={image.image}
                alt="inta"
                width={200}
                height={200}
                className="w-[60px] md:w-[180px] lg:w-[100px] xl:w-[150px] rounded-lg object-cover h-[150px]"
              />
            ))}
            <Link
              href={"/home"}
              className="w-[60px] md:w-[180px] lg:w-[100px] xl:w-[150px] rounded-lg object-cover h-[150px] text-center text-white bg-[rgb(0,0,0,0.5)] flex items-center justify-center"
            >
              <h2 className=" text-xl">...More</h2>
            </Link>
          </footer>
          {user && user.role === "ADMIN" && (
            <Link
              href={user.role === "BASIC" ? "/home" : "/admin"}
              className=" bg-[#025159] text-[#04BFBF] hover:bg-black w-fit h-fit rounded-md p-2 bottom-0 right-[50] left-[50]"
            >
              {user.role === "BASIC" ? "Start shopping" : "Admin dashboard"}
            </Link>
          )}
        </article>
        <Image
          priority
          src={"/bb.png"}
          width={640}
          height={640}
          alt="bb"
          className="hidden lg:block lg:w-[640px] h-[100vh]  "
        />
        <Image
          priority
          src={"/yellowshirt.jpg"}
          fill
          alt="bb"
          className="block lg:hidden z-[4] object-cover "
        />
      </div>
    </section>
  );
}
