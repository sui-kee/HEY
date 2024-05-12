"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import eye from "./eye.svg";
import Cookies from "js-cookie";
import uneye from "./uneye.svg";
import { fjalla } from "@/app/font";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { auth } from "@/app/firebase-config";
import axios from "axios";
import { useUser } from "@/app/store";
import SpinLoading from "../pending/loading";
import { User } from "@/types/userTypes";

const getUser = async (email: string) => {
  const response = await axios.get(
    `http://localhost:3001/users/email/${email}`
  );
  if (response.status === 201) {
    return response.data;
  } else {
    return alert("errror in fetching user:)");
  }
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const setUser = useUser((state) => state.setUser);
  const [myUser, setMyUser] = useState<User | null>(null);
  const [logging, setLogging] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectPath = searchParams.get("redirectTo");
  const mustRefresh = searchParams.get("refresh");
  const lognIn = async (email: string, password: string) => {
    setLogging(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // toastSuccess();
          // document.cookie = `loginWithFireBase=true;`;
          // Cookies.set("firebase-auth", "true");
          // router.push("/");
        })
        .catch((error: any) => {
          alert("error login");
          console.log(error);
        });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onSubmit = async () => {
    try {
      await lognIn(email, password);
      const user = await getUser(email);
      console.log("user from login:", user);

      if (user) {
        Cookies.set("userToken", user.id);
        Cookies.set("firebase-auth", "true");
        setUser(user);
        setMyUser(user);
        return console.log("redirect work?...");

        // return redirectPath ? router.push(redirectPath) : router.refresh();
      } else {
        Cookies.set("firebase-auth", "false");
        setLogging(false);
        return alert("user not found please try again");
      }
    } catch (error: any) {
      return alert(error.message);
    }
  };
  useEffect(() => {
    if (myUser && myUser?.role !== "GUEST") {
      //alert(`it shoould work tho ${redirectPath}`);
      if (!mustRefresh) {
        ///if the authentication part has no refresh path or redirect path
        return router.push("/home");
      }

      return redirectPath ? router.push(redirectPath) : router.refresh();
    }
  }, [myUser]);
  console.log("user from login state user: ", myUser);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className=" relative flex justify-start items-center flex-col gap-5 p-6 min-w-[70vw] lg:min-w-[50vw] "
    >
      <div className=" flex justify-center items-center gap-3">
        <h3 className={` ${fjalla.className} text-4xl uppercase`}>
          login and grap yours now
        </h3>
        <Image
          src={"/shoppingwhite.svg"}
          width={70}
          height={70}
          className=""
          alt="shopping"
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

      <button
        type="submit"
        className=" bg-black w-full hover:rounded-md text-white uppercase font-bold space-x-3 p-5 hover:bg-white hover:text-black"
      >
        login
      </button>
      <h4 className=" text-sm italic text-white">
        {`haven't account yet?`}
        <Link
          href={"authentication/register"}
          className=" text-blue-800 text-lg uppercase font-bold"
          style={{ fontStyle: "normal" }}
        >
          signup
        </Link>
      </h4>
      {logging ? <SpinLoading loadingText="Logging" /> : null}
    </form>
  );
}

export default Login;
