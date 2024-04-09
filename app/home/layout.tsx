import Navigation from "@/components/navigation";
import SmallNavigation from "@/components/smallNavigation";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={` bg-[#04BFBF]`}>
      <Navigation />
      <SmallNavigation />
      <AntdRegistry>{children}</AntdRegistry>
    </div>
  );
}
