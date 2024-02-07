import { Item } from "../store";

export   const itemDiscount = (item:Item) => {
    let discount = (item.discountPercent / 100) * item.price;
    let totalDiscount = discount * item.quantity;
    let total = item.price * item.quantity - totalDiscount;
    return { total, totalDiscount };
  };