import { OrderDetail } from "@/components/v0components/order-detail";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col ">
      <Suspense fallback={<div> Loading....</div>}>
        <OrderDetail orderId={params.id} />
      </Suspense>
    </div>
  );
}
