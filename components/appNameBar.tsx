"use client";
import { auth } from "@/app/firebase-config";
import { User, onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AppNameBar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });
  return (
    <Link
      href={"/"}
      className="fixed cursor-pointer z-30 top-2 left-2 flex justify-start items-center gap-2"
    >
      <h2 className=" uppercase text-4xl text-white font-bold">HEY</h2>
      {user?.photoURL && (
        <Image
          src={user?.photoURL}
          alt="profile"
          width={100}
          height={100}
          className=" rounded-full w-[40px] h-[40px]"
        />
      )}
    </Link>
  );
}
