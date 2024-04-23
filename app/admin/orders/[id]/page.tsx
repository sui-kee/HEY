import { OrderDetail } from "@/components/v0components/order-detail";

const getOrderById = async (id: string) => {
  const response = await fetch(`http://localhost:3001/orders/${id}`);
  if (response.ok) {
    // console.log("response is :", response.json());

    return await response.json();
  } else {
    return console.log(
      "is response error order detail:",
      await response.json()
    );
  }
};

export default async function Page({ params }: { params: { id: string } }) {
  const order = await getOrderById(params.id);
  console.log("order detail in admin: ", order);

  return (
    <div className="flex flex-col ">
      <OrderDetail order={order} />
    </div>
  );
}
