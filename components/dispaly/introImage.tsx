"use client";
import Image from "next/image";
import { open_sans, roboto } from "@/app/font";
import item4 from "./../../public/sh2.png";
import item5 from "./../../public/sn3.png";
import item6 from "./../../public/sn5.png";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const getUser = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3001/user/id?id=` + id);

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

export default function IntroImage() {
  const items = [item4, item5, item6];
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const myUser = async () => {
      const user = await getUser(Cookies.get("userToken") as string);
      setUser(user[0]);
    };
    myUser();
  }, []);

  return (
    <section className=" flex justify-start gap-2 items-center px-2 h-[100vh] sticky top-0 left-0 right-0">
      <article className=" flex justify-start flex-col gap-3 items-start ">
        <h2
          className={` ${open_sans.className} text-[50px] uppercase text-[#038C8C]`}
        >
          Welcome to <strong>Hey</strong>
        </h2>
        <h2
          className={` ${roboto.className} text-[40px] uppercase text-[#025159]`}
        >
          Step into Fashion Paradise with us
        </h2>

        <footer className=" flex justify-start border-4 rounded-md border-[#025159] items-center gap-3 z-10">
          {items.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="inta"
              width={200}
              height={200}
              className="w-[200px]"
            />
          ))}
        </footer>
        {user && user.role === "ADMIN" && (
          <Link
            href={user.role === "BASIC" ? "/home" : "/admin"}
            className=" bg-[#025159] text-[#04BFBF] hover:bg-black w-fit h-fit rounded-md p-2 bottom-0 right-[50] left-[50]"
          >
            {user.role === "BASIC" ? "Start shopping" : "Admin dashboard"}
          </Link>
        )}
        <Link
          href={"/home"}
          className=" bg-[#025159] text-[#04BFBF] hover:bg-black w-fit h-fit rounded-md p-2 bottom-0 right-[50] left-[50]"
        >
          Start shopping
        </Link>
      </article>
      <Image
        priority
        src={"/bb.png"}
        width={640}
        height={640}
        alt="bb"
        className=" "
      />
    </section>
  );
}
