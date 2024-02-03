"use client";

import { useIsUp } from "@/app/store";
import { motion } from "framer-motion";
export default function DarkScreen() {
  const isInView = useIsUp((state) => state.isUp);
  console.log("is in view:", isInView);

  if (!isInView) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-[rgba(0,0,0,0.5)] z-10 fixed top-0 left-0 w-full h-full"
    ></motion.div>
  );
}
