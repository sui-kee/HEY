"use client";

import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { UserContext } from "../warpers/userProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import SpinLoading from "../pending/loading";

export default function DeleteOrder({ orderId }: { orderId: string }) {
  const [deleting, setDeleting] = useState(false);
  const user: any = useContext(UserContext);
  const router = useRouter();
  const onDelete = async (id: string) => {
    const response = await axios.delete(
      `http://localhost:3001/orders/delete/${id}`
    );
    if (response.status === 201) {
      alert(" deleting order success....");

      return router.back();
    } else {
      console.log("delete order response: ", response.data);
      setDeleting(!deleting);
      return alert("error in deleting order....");
    }
  };
  return (
    <>
      <Button
        onClick={() => {
          setDeleting(!deleting);
          onDelete(orderId);
        }}
      >
        delete order
      </Button>
      {deleting ? <SpinLoading loadingText="deleting" /> : null}
    </>
  );
}
