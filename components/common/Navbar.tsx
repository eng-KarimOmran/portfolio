"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "../ui/button";
import { TextAlignStart, X } from "lucide-react";

type LinkNav = {
  path: string;
  name: string;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
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

      <div
        className={`md:static fixed inset-0 md:bg-transparent bg-primary-foreground/20 z-10 backdrop-blur-sm md:backdrop-blur-none transition-transform duration-800 -translate-x-full md:translate-x-0 ease-in-out ${
          open && "translate-x-0"
        }`}
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
      </div>
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
