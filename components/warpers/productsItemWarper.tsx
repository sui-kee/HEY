import React, { ReactNode } from "react";

export default function ProductItemsWarper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 border-2 w-full gap-3 border-white rounded-lg p-3">
      {children}
    </main>
  );
}
