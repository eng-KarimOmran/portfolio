import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/common/Footer";

import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Karim | Portfolio",
  description: "Personal portfolio of Karim Omran - Full Stack Developer.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Karim Omran",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node",
    "Express",
  ],
  authors: [
    { name: "Karim Omran", url: "https://portfolio-nine-murex-78.vercel.app/" },
  ],
  openGraph: {
    title: "Karim | Portfolio",
    description: "Explore projects, skills, and contact information.",
    url: "https://portfolio-nine-murex-78.vercel.app/",
    siteName: "Karim Omran",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Karim Omran Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Separator />
          <main className="px-4 lg:max-w-11/12 mx-auto">{children}</main>
          <Separator />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
