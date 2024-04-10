import Navigations from "@/components/adminDashboard/adminNav";
import V0admin from "@/components/adminDashboard/v0dasboard";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={` w-full mt-20 h-[87vh] overflow-auto  `}>
      {/* <Navigations />
      <div className=" col-span-3 border h-[87vh] overflow-auto">
        {children}
      </div> */}
      <V0admin />
    </div>
  );
}
