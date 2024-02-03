"use client";

import { useIsUp } from "@/app/store";
import clsx from "clsx";

export default function BrightnessProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isInView = useIsUp((state) => state.isUp);
  return (
    <main
      className={clsx(" w-full h-full flex justify-center items-center ", {
        ["bg-[rgba(0,0,0,0.5)]"]: isInView,
      })}
    >
      {children}
    </main>
  );
}
