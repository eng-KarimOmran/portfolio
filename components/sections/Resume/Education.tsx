"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { TbCertificate } from "react-icons/tb";
import Image from "next/image";

type card = {
  date: string;
  title: string;
  side: string;
  img?: string;
};

export default function Education() {
  const [openCertificate, setOpenCertificate] = useState("");
  const educations: card[] = [
    {
      date: "2025 - March",
      side: "Route Academy",
      title: "Front-End Developer",
      img: "https://res.cloudinary.com/djh0tsi3i/image/upload/v1757630584/certificate-front-end-route_ntf9aa.jpg",
    },
  ];

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {educations.map((education, index) => (
          <li
            key={index}
            className="h-40 p-2 bg-background rounded-lg flex flex-col justify-between items-start shadow-sm"
          >
            <span className="text-(--main)">{education.date}</span>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {education.title}
            </h3>
            <div className="flex justify-between items-center text-(--main) w-full">
              <span className="text-muted-foreground">
                <span className="text-(--main)">.</span>
                {education.side}
              </span>
              {education?.img && (
                <Button
                  onClick={() => {
                    setOpenCertificate(education.img || "");
                  }}
                  variant="secondary"
                  size="icon"
                  className="shadow-sm"
                >
                  <TbCertificate className="text-(--main)" />
                </Button>
              )}
            </div>
          </li>
        ))}
      </ul>
      {openCertificate && (
        <section
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName !== "IMG") {
              setOpenCertificate("");
            }
          }}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm flex justify-center items-center p-5"
        >
          <div className="relative flex justify-center items-center p-2 w-full max-w-3xl">
            <Image
              src={openCertificate}
              alt="certificate"
              width={1778}
              height={1264}
              className="object-contain w-full h-auto"
            />
            <button
              onClick={() => setOpenCertificate("")}
              className="absolute top-0 end-0 p-1 rounded-lg m-3 bg-zinc-800 text-white"
            >
              <X />
            </button>
          </div>
        </section>
      )}
    </>
  );
}
