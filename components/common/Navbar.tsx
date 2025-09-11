"use client";
import { motion } from "motion/react";
import { LinkNav } from "@/types";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "../ui/button";
import { TextAlignStart, X } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  console.log(isDesktop);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const links: LinkNav[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Resume", path: "/#resume" },
    { name: "Work", path: "/#work" },
    { name: "Sent me", path: "/#sent-me" },
  ];

  return (
    <nav
      role="navigation"
      className="flex justify-between items-center flex-wrap h-16 px-4"
    >
      <Link href="/">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Karim<span className="text-(--main)">.</span>
        </h1>
      </Link>

      <motion.div
        initial={{ opacity: 0, x: isDesktop ? 0 : "-100%" }}
        animate={{
          x: isDesktop ? 0 : open ? 0 : "-100%",
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={
          "md:static fixed inset-0 md:bg-transparent bg-primary-foreground/20 z-10 backdrop-blur-sm md:backdrop-blur-none"
        }
        aria-hidden={!open}
      >
        <div className="md:hidden p-4 text-end">
          <Button
            variant="secondary"
            onClick={toggleMenu}
            aria-label="Close navigation menu"
          >
            <X />
          </Button>
        </div>
        <ul className="flex items-center gap-6 md:gap-4 md:justify-center flex-col md:flex-row overflow-y-auto text-2xl md:text-lg">
          {links.map((link) => (
            <li key={link.path}>
              <Link onClick={toggleMenu} href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="flex justify-center items-center gap-4">
        <ModeToggle />
        <Button
          onClick={toggleMenu}
          variant="secondary"
          className="block md:hidden"
          aria-label="Open navigation menu"
        >
          <TextAlignStart />
        </Button>
      </div>
    </nav>
  );
}
