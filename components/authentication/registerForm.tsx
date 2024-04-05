"use client";
import Image from "next/image";
import React, { useState } from "react";
import eye from "./eye.svg";
import uneye from "./uneye.svg";
import { fjalla } from "@/app/font";
import { auth } from "@/app/firebase-config";
import axios from "axios";
import Cookies from "js-cookie";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setseeConfirmPassword] = useState(false);
  const [registering, setRegistering] = useState(false);
  const router = useRouter();

  const registerUser = async (
    userName: string,
    email: string,
    password: string
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (res) => {
          updateProfile(res.user, {
            displayName: userName,
            photoURL: "https://github.com/shadcn.png",
          }).catch((error) => alert(error.message));
          Cookies.set("firebase-auth", "true");
        }
      );
      await axios.post("https://isong-rose.vercel.app/api/user", {
        username: userName,
        email: email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    setRegistering(true);
    await registerUser(name, email, password)
      .then(() => {
        alert("registering complete");
        document.cookie = `loginWithFireBase=false;`;
        router.push("/songs");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className=" relative flex justify-start items-center flex-col gap-5 p-6 min-w-[70vw] lg:min-w-[50vw] "
    >
      {registering ? (
        <div className=" z-[100] w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
          <h4 className=" text-4xl uppercase font-bold ">Registering</h4>
        </div>
      ) : null}
      <div className=" flex justify-center items-center gap-3">
        <h3 className={` ${fjalla.className} text-4xl uppercase`}>
          Sign up and grap yours now
        </h3>
        <Image
          src={"/shoppingwhite.svg"}
          width={70}
          height={70}
          className=""
          alt="shopping"
        />
      </div>
      {/* <Image
        fill
        src={"/shopping.png"}
        alt="shopping"
        className=" absolute z-0 bg-center object-cover"
      /> */}
      <div className="flex flex-row justify-start w-full items-center gap-3">
        <label className="w-[150px] uppercase text-white">Name</label>
        <input
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="at least 5 characters"
          pattern=".{5,}" // At least 5 characters
          title="Name must be at least 5 characters long"
          className="p-2 sm:p-4 rounded-md outline-none bg-white w-full"
        />
      </div>

      <div className="flex flex-row justify-start w-full items-center gap-3">
        <label className="w-[150px] uppercase text-white">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@gmail.com"
          className="p-2 sm:p-4 rounded-md outline-none bg-white w-full"
          type="email"
        />
      </div>

      <div className="relative flex flex-row justify-start w-full items-center gap-3">
        <label className="w-[150px] uppercase text-white">Password</label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="at least 6 characters"
          type={seePassword ? "text" : "password"}
          pattern=".{6,}" // At least 8 characters
          title="Password must be at least 6 characters long"
          className="p-2 sm:p-4 rounded-md outline-none bg-white w-full"
        />
        {seePassword ? (
          <Image
            src={eye}
            alt="eye"
            width={30}
            height={30}
            onClick={() => setSeePassword(!seePassword)}
            className="absolute bottom-[50] right-2 top-[50] cursor-pointer"
          />
        ) : (
          <Image
            src={uneye}
            alt="uneye"
            width={30}
            height={30}
            onClick={() => setSeePassword(!seePassword)}
            className="absolute bottom-[50] right-2 top-[50] cursor-pointer"
          />
        )}
      </div>

      <div className="relative flex flex-row justify-start w-full items-center gap-3">
        <label className="w-[150px] uppercase text-white">
          Confirm Password
        </label>
        <input
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="at least 6 character"
          type={seeConfirmPassword ? "text" : "password"}
          pattern=".{6,}" // At least 8 characters
          title="Password must be at least 6 characters long"
          className="p-2 sm:p-4 rounded-md outline-none bg-white w-full"
        />
        {seeConfirmPassword ? (
          <Image
            src={eye}
            alt="eye"
            width={30}
            height={30}
            onClick={() => setseeConfirmPassword(!seeConfirmPassword)}
            className="absolute bottom-[50] right-2 top-[50] cursor-pointer"
          />
        ) : (
          <Image
            src={uneye}
            alt="uneye"
            width={30}
            height={30}
            onClick={() => setseeConfirmPassword(!seeConfirmPassword)}
            className="absolute bottom-[50] right-2 top-[50] cursor-pointer"
          />
        )}
      </div>

      <button
        type="submit"
        className=" bg-black w-full hover:rounded-md text-white uppercase font-bold space-x-3 p-5 hover:bg-white hover:text-black"
      >
        sign up
      </button>
    </form>
  );
}

export default Register;
