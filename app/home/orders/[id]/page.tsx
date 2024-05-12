import { OrderDetail } from "@/components/home/orderDetail";

export default function Page({ params }: { params: { id: string } }) {
  return <OrderDetail orderId={params.id} />;
}
