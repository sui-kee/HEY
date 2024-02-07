"use client";
import { poppin } from "@/app/font";
import MyButton from "@/components/MyButton";
import { DatePicker, DatePickerProps, Input } from "antd";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const onMonthChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <main
      className={` ${poppin.className}  flex justify-center items-center w-full h-[80vh]`}
    >
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
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
    </main>
  );
}
