import { ProductItem } from "@/types/productTypes";

export   const itemDiscount = (item:ProductItem) => {
    let discount = (item.discountPercent / 100) * item.price;
    let totalDiscount = discount * item.quantity!;
    let total = item.price * item.quantity! - totalDiscount;
    return { total, totalDiscount };
  };

export const calculateTotal = (items:ProductItem[])=>{
  const allPrices = items.map((item) => {
    const { total, totalDiscount } = itemDiscount(item);
    return total;
  });
  const totalPrices = allPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return totalPrices
}