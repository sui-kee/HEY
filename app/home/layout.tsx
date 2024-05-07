import Navigation from "@/components/navigation";
import SmallNavigation from "@/components/smallNavigation";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Suspense } from "react";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={` bg-[#04BFBF]`}>
      <Navigation />
      <Suspense fallback={<div>...</div>}>
        <SmallNavigation />
      </Suspense>
      <AntdRegistry>{children}</AntdRegistry>
    </div>
  );
}
