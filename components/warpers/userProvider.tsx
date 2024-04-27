"use client";
import axios from "axios";
import Cookie from "js-cookie";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);
const getUser = async (userToken: string) => {
  console.log("user token:", userToken);

  const user = await axios.get(
    `http://localhost:3001/users/getUserById?id=${userToken}`
  );
  if (user.status === 201) {
    return user.data;
  } else {
    return console.log("from user provider error:", user);
  }
};

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  console.log("current user from user provider:", currentUser);
  const [userToken, setUserToken] = useState(Cookie.get("userToken") as string);
  useEffect(() => {
    const get_user = async () => {
      const user = await getUser(userToken);
      setCurrentUser(user);
    };
    get_user();
  }, []);
  console.log("current user: ", currentUser);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}
