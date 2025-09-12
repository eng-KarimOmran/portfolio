import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-4 text-center text-sm">
      &lt;Developed By&gt;
      <Button variant="outline" className="mx-2" asChild>
        <Link href="/">Karim Omran</Link>
      </Button>
      &lt;All Copy Rights Reserved @{year}&gt;
    </footer>
  );
}
