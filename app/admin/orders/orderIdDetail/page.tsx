import MyButton from "@/components/MyButton";
import OrderDetailItem from "@/components/adminDashboard/orderDetailBox";
import Link from "next/link";

export default function OrderDetail() {
  return (
    <div className="flex flex-col ">
      <section className=" flex p-2 bg-gray-100/40 justify-between w-full ">
        <Link href={"/admin/orders"}>
          <MyButton text="back" className=" text-white " />
        </Link>
        <div className=" flex justify-between w-[500px]">
          <MyButton text="decline " className=" bg-red-300 hover:bg-red-500" />
          <MyButton
            text="approve"
            className=" bg-green-300 hover:bg-green-500"
          />
        </div>
      </section>
      <section className="w-full px-5 h-full gap-3 overflow-auto flex flex-col items-center justify-start">
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
        <OrderDetailItem />
      </section>
      <footer className=" text-2xl text-white p-2 flex gap-2 justify-start">
        <h3>Total :</h3>
        <h4>$400</h4>
      </footer>
    </div>
  );
}
