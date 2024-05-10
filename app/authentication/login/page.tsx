import Login from "@/components/authentication/loginFrom";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className=" flex h-[100vh] justify-center items-center">
      <Suspense>
        <Login />
      </Suspense>
    </main>
  );
}
