import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AppNameBar from "@/components/appNameBar";
import UserStateManager from "@/components/warpers/userStateManager";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HEY",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#04BFBF]`}>
        <Suspense>
          <AppNameBar />
        </Suspense>
        <UserStateManager />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
