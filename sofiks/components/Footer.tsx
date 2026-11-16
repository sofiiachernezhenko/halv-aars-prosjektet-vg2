import pageLinks from "@/lib/PageLinks.json";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Accessibility } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col w-full bg-[#411981]  text-white md:p-8">
      <div className="flex">
        <div className="flex flex-col gap-4 w-1/2">
          <p className="mb-2 text-xl font-semibold">LOGO</p>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com">
              <Button className="text-light-text" variant="link">
                GitHub
              </Button>
            </Link>
            <Link href="https://www.instagram.com">
              <Button className="text-light-text" variant="link">
                LinkedIn
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Separator />
      <div className="flex justify-between mt-4">
        <p className="text-md">SoFiks &copy; 2026</p>
        <p className="text-md">
          Laget av Sofiia ved{" "}
          <Link
            className="text-light-text underline hover:text-primary"
            href="https://www.tiller.vgs.no"
            target="_blank"
          >
            Tiller vgs
          </Link>
        </p>
        <Link href="/accessibility">
          <Button className="text-light-text" variant="link">
            <Accessibility />
            Accessibility
          </Button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
