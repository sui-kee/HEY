import Link from "next/link";
import React from "react";

export default function Denied() {
  return (
    <main className=" w-full h-full text-2xl text-white  flex justify-center flex-col gap-y-2 items-center min-h-[100vh]">
      <h4 className="text-red-600 text-4xl p-7 border-red-500 border-8 rounded-md uppercase font-extrabold">
        Access denied
      </h4>
      <Link href={"/"} className=" bg-black text-white rounded-md p-3 px-5">
        Back
      </Link>
    </main>
  );
}
