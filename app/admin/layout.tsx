import V0adminNav from "@/components/adminDashboard/adminNav";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={` w-full mt-16 flex h-[87vh] overflow-auto  `}>
      <V0adminNav />
      <div className=" w-[80vw] overflow-auto flex flex-col">{children}</div>
    </div>
  );
}
