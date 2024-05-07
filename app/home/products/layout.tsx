import ProductNavigation from "@/components/productNavigation";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={` bg-[#04BFBF] p-2`}>
      <ProductNavigation locationLink="home" />
      <AntdRegistry>{children}</AntdRegistry>
    </div>
  );
}
