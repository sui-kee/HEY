import AdminOrderBox from "@/components/adminDashboard/adminOrderBox";

export default function Orders() {
  return (
    <div className=" flex justify-center items-center flex-col w-full overflow-auto h-full gap-3 bg-white px-5">
      <AdminOrderBox />
      <AdminOrderBox />
      <AdminOrderBox />
      <AdminOrderBox />
      <AdminOrderBox />
      <AdminOrderBox />
      <AdminOrderBox />
    </div>
  );
}
