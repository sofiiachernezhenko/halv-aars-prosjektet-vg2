import pageLinks from "@/lib/PageLinks.json";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Accessibility } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col w-full mt-20 bg-secondary text-light-text p-4 px-5">
      <div className="flex">
        <div className="flex flex-col gap-4 w-1/2">
          <p className="text-xl font-bold">LOGO</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com">
              <Button className="text-light-text" variant="link">
                Facebook
              </Button>
            </Link>
            <Link href="https://www.instagram.com">
              <Button className="text-light-text" variant="link">
                Instagram
              </Button>
            </Link>
            <Link href="https://www.youtube.com">
              <Button className="text-light-text" variant="link">
                YouTube
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-end gap-4 w-1/2">
          {pageLinks && (
            <div className="flex flex-col gap-2 pr-5">
              <p className="text-xl font-bold">Links</p>
              {Object.entries(pageLinks).map(([key, value]) => (
                <Link key={key} href={value}>
                  <Button className="text-light-text" variant="link">
                    {key}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Separator />
      <div className="flex justify-between mt-4">
        <p className="text-md">Mot Voksenlivet &copy; 2026</p>
        <p className="text-md">
          Laget av Sofiia og Eivind ved{" "}
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
            Tilgjengelighetserklæring
          </Button>
        </Link>
        <Link href="/adminLogin">
          <Button className="text-light-text" variant="link">
            Admin Logg inn
          </Button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
