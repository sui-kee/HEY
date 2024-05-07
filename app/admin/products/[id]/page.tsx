import EditProduct from "@/components/adminDashboard/editProduct";

export default function Page({ params }: { params: { id: string } }) {
  return <EditProduct id={params.id} />;
}
