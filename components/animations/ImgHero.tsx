"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";

export default function ImgHero({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative aspect-[3/4] w-10/12 sm:w-9/12 md:w-6/12 lg:w-3/12 rounded-2xl border-2 border-primary"
    >
      {children}
    </motion.div>
  );
}
