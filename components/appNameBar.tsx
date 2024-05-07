import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import MyButton from "./MyButton";
import { User } from "@/types/userTypes";

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

export default async function AppNameBar() {
  const user: User = await getUser(Cookies.get("userToken") as string);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  // });
  return (
    <div className="fixed cursor-pointer z-30 top-2 left-2 flex justify-start items-center gap-2">
      <Link href={"/"} className=" uppercase text-4xl text-white font-bold">
        HEY
      </Link>
      {user ? (
        <div className=" flex gap-1 items-center bg-white rounded-full p-1 pr-2">
          <Image
            src={user.image}
            alt="profile"
            width={100}
            height={100}
            className=" rounded-full w-[40px] h-[40px]"
          />
          <div className=" uppercase italic text-sm sm:text-lg">
            {user?.name}
          </div>
        </div>
      ) : (
        <Link
          className="p-1 px-2 sm:p-2 sm:px-3 rounded-xl text-sm sm:text-sm md:text-lg hover:bg-[#038C8C] bg-[#025159] text-white"
          href={{
            pathname: "/authentication",
            query: {
              redirectTo: "/",
            },
          }}
        >
          Login
        </Link>
      )}
    </div>
  );
}
