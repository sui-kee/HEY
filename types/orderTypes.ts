import { ProductItem } from "./productTypes";
import { User } from "./userTypes";

export type Order = {
    _id: {
      $oid: string;
    };
    customer: User;
    total: {
      $numberInt: string;
    };
    status: string;
    products: ProductItem[];
    id: string;
    orderCode: string;
    orderTime: any;
    __v: {
      $numberInt: string;
    };
  };