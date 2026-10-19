"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import pageLinks from "@/lib/PageLinks.json";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-secondary text-light-text">
      <div>
        <p>Logo</p>
      </div>
      <div>
        <ul className="flex space-x-8 text-2xl font-bold">
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
