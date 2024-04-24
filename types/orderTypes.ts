import { ProductItem } from "./productTypes";
import { User } from "./userTypes";

export type Order = {
    _id:any
    customer: User;
    customerId?:string;
    total: number;
    status: string;
    products: ProductItem[];
    id: string;
    orderCode: string;
    orderTime: any;
    __v: any
  };