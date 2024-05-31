"use client";

import Cookies from "js-cookie";

import axios from "axios";
import { useEffect } from "react";
import { useUser } from "@/app/store";
import { guest } from "@/lib/defaultUser";

const getUser = async (id: string) => {
  const response = await axios.get(
    `http://54.167.15.95:3001/users/getUserById?id=${id}`
  );
  if (response.status === 201) {
    return response.data;
  } else {
    return alert("errror in fetching user:)");
  }
};

export default function UserStateManager() {
  const setUser = useUser((state) => state.setUser);
  useEffect(() => {
    const get_user = async () => {
      if (!Cookies.get("userToken")) {
        return setUser(guest);
      }
      const user = await getUser(Cookies.get("userToken") as string);
      return setUser(user);
    };
    get_user();
  }, []);
  return null;
}
