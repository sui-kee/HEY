import Bill from "@/components/carts/bill";
import CartItems from "@/components/carts/cartItems";

export default function Page() {
  return (
    <main className=" w-full h-full p-3 flex justify-start flex-col gap-2">
      <Bill />
      <CartItems />
    </main>
  );
}
