import Navigation from "@/components/navigation";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={` bg-[#04BFBF]`}>
      <Navigation />
      <AntdRegistry>{children}</AntdRegistry>
    </div>
  );
}
