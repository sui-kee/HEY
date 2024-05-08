import EditProduct from "@/components/adminDashboard/editProduct";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className=" fixed top-0 left-0 w-full h-full p-2 bg-black z-[1000] overflow-auto">
      <EditProduct id={params.id} />
    </div>
  );
}
