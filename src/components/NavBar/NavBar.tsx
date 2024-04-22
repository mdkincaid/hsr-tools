"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  function getIsActiveLink(href: string): boolean {
    return pathname === href;
  }

  return (
    <nav className="flex gap-4 ml-4 w-auto items-end">
      <Link
        className={getIsActiveLink("/") ? "active-nav-tab" : "border-b"}
        href="/"
      >
        Home
      </Link>
      <Link
        className={getIsActiveLink("/game-data") ? "active-nav-tab" : "border-b"}
        href="/game-data"
      >
        Data
      </Link>
      <Link
        className={
          getIsActiveLink("/tools/aventurine-calc") ? "active-nav-tab" : "border-b"
        }
        href="/tools/aventurine-calc"
      >
        Aventurine Calc
      </Link>
      <Link
        className={
          getIsActiveLink("/tools/tingyun-calc") ? "active-nav-tab" : "border-b"
        }
        href="/tools/tingyun-calc"
      >
        Tingyun Calc
      </Link>
    </nav>
  );
}
