import V0adminNav from "@/components/adminDashboard/adminNav";
import V0adminNavSmall from "@/components/adminDashboard/smallAdminNav";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={` w-full mt-16 flex flex-col lg:flex-row h-[90vh] overflow-auto  `}
    >
      <V0adminNav />
      <V0adminNavSmall />
      <div className=" w-full lg:w-[80vw] overflow-auto flex flex-col">
        {children}
      </div>
    </div>
  );
}
