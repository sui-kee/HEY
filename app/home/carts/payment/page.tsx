"use client";
import { poppin } from "@/app/font";
import { itemDiscount } from "@/app/libs/cartFunctions";
import { useCarts } from "@/app/store";
import MyButton from "@/components/MyButton";
import { UserContext } from "@/components/warpers/userProvider";
import { User } from "@/types/userTypes";
import { DatePicker, DatePickerProps, Input } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const createNewOrder = async (
  newOrder: {
    total: number;
    status: string;
    customer: any;
    products: any;
    customerId: string;
  },
  clearCartFun: () => void
) => {
  const response = await axios.post(
    "http://localhost:3001/orders/newOrder",
    newOrder
  );
  if (response.status === 201) {
    clearCartFun();
    return alert(" ordered successfully....");
  } else {
    return alert(" something went wrong in ordering!!!");
  }
};

type UserTypes = {
  user: null | User;
};

export default function Page() {
  const carts = useCarts((state) => state.carts);
  console.log("carts////", carts);

  const removeCarts = useCarts((state) => state.removeAllItems);
  const user: any = useContext(UserContext);
  console.log("user for customer:", user);

  const router = useRouter();
  const allPrices = carts.map((cart) => {
    const { total, totalDiscount } = itemDiscount(cart);
    return total;
  });
  const totalPrices = allPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const onMonthChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  console.log(
    {
      total: totalPrices,
      status: "shipped",
      customer: user?.[0],
      products: carts,
    },
    "is order!!!!!!!!!!"
  );
  return (
    <main
      className={` ${poppin.className}  flex justify-center flex-col gap-4 items-center w-full h-[80vh]`}
    >
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden p-5">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold">Complete Your Purchase</h2>
          <p className="text-gray-600 text-sm mt-1">
            Enter your payment information below.
          </p>
        </div>
        <div className="px-6 py-4 space-y-4">
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name on Card
            </label>
            <Input placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="number"
            >
              Card Number
            </label>
            <Input placeholder="Enter your card number" type="number" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="year"
              >
                Expiration Year
              </label>
              <DatePicker onChange={onMonthChange} picker="month" />
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="year"
              >
                Expiration date
              </label>
              <DatePicker onChange={onDateChange} picker="date" />
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="cvc"
              >
                CVV
              </label>
              <Input placeholder="CVC" variant="filled" />
            </div>
          </div>
        </div>
        <footer className="p-2 flex justify-between w-full">
          <MyButton text="submit payment" />
          <MyButton
            text="back"
            className=" bg-red-500 hover:bg-red-600 "
            onClick={() => router.back()}
          />
        </footer>
      </div>
      <button
        onClick={() =>
          createNewOrder(
            {
              total: totalPrices,
              status: "shipped",
              customer: user,
              products: carts,
              customerId: user.id,
            },
            removeCarts
          )
        }
        className=" hover:text-black text-xl font-extrabold space-x-3 uppercase text-white"
      >
        Pay in other way? just order first
      </button>
    </main>
  );
}
