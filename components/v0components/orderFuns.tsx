"use client";

import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { UserContext } from "../warpers/userProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import SpinLoading from "../pending/loading";
import AlertBox from "../component/alet-box";

export default function DeleteOrder({ orderId }: { orderId: string }) {
  const [deleting, setDeleting] = useState(false);
  const [tryToDelete, setTryToDelete] = useState(false);
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
  const confirmDeleting = () => {
    setDeleting(!deleting);
    onDelete(orderId);
  };
  return (
    <>
      <Button onClick={() => setTryToDelete(!tryToDelete)}>delete order</Button>
      {deleting ? <SpinLoading loadingText="deleting" /> : null}
      {tryToDelete ? (
        <AlertBox
          message="Are you sure to delete this order"
          confirmFunction={() => onDelete(orderId)}
          backFunction={() => setTryToDelete(!tryToDelete)}
        />
      ) : null}
    </>
  );
}
