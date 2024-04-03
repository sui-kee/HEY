"use client";
import Image from "next/image";
import React, { useState } from "react";
import eye from "./eye.svg";
import uneye from "./uneye.svg";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setseeConfirmPassword] = useState(false);
  return (
    <form className=" flex justify-start items-center flex-col gap-5 p-6 min-w-[70vw] lg:min-w-[50vw] ">
      <div className=" flex flex-row justify-start w-full items-center gap-3 ">
        <label className=" w-[150px] uppercase text-white"> name</label>
        <input
          required
          placeholder="your name"
          className="  p-2 sm:p-4 rounded-md outline-none bg-white w-full"
        />
      </div>
      <div className=" flex flex-row justify-start w-full items-center gap-3 ">
        <label className=" w-[150px] uppercase text-white"> email</label>
        <input
          required
          placeholder="your email"
          className="  p-2 sm:p-4 rounded-md outline-none bg-white w-full"
          type="email"
        />
      </div>
      <div className=" relative flex flex-row justify-start w-full items-center gap-3 ">
        <label className=" w-[150px] uppercase text-white"> password</label>
        <input
          required
          placeholder="your password"
          type={seePassword ? "text" : "password"}
          className="  p-2 sm:p-4 rounded-md outline-none bg-white w-full"
        />
        {seePassword ? (
          <Image
            src={eye}
            alt="eye"
            width={30}
            height={30}
            onClick={() => setSeePassword(!seePassword)}
            className=" absolute bottom-[50] right-2 top-[50] cursor-pointer"
          />
        ) : (
          <Image
            src={uneye}
            alt="uneye"
            width={30}
            height={30}
            onClick={() => setSeePassword(!seePassword)}
            className=" absolute bottom-[50] right-2 top-[50] cursor-pointer"
          />
        )}
      </div>
      <div className=" relative flex flex-row justify-start w-full items-center gap-3 ">
        <label className=" w-[150px] uppercase text-white">
          confirm password
        </label>
        <input
          required
          placeholder="your password"
          type={seeConfirmPassword ? "text" : "password"}
          className="  p-2 sm:p-4 rounded-md outline-none bg-white w-full"
        />
        {seeConfirmPassword ? (
          <Image
            src={eye}
            alt="eye"
            width={30}
            height={30}
            onClick={() => setseeConfirmPassword(!seeConfirmPassword)}
            className=" absolute bottom-[50] right-2 top-[50] cursor-pointer"
          />
        ) : (
          <Image
            src={uneye}
            alt="uneye"
            width={30}
            height={30}
            onClick={() => setseeConfirmPassword(!seeConfirmPassword)}
            className=" absolute bottom-[50] right-2 top-[50] cursor-pointer"
          />
        )}
      </div>
      <button
        type="submit"
        className=" bg-black w-full hover:rounded-md text-white uppercase font-bold space-x-3 p-5 hover:bg-white hover:text-black"
      >
        REGISTER
      </button>
    </form>
  );
}

export default Register;
