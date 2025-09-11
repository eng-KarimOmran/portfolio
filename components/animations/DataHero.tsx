"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface DataHeroProps {
  children: ReactNode;
}

export default function DataHero({ children }: DataHeroProps) {
  return (
    <motion.div
      initial={{ x: "-150%" }}
      animate={{ x: "0%" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col items-center md:items-start gap-6 sm:gap-6 md:gap-8"
    >
      {children}
    </motion.div>
  );
}