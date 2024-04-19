import { Space } from "@mantine/core";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex basis-4/5 gap-4 w-auto items-end">
      <Link href="/">Home</Link>
      <Link href="/tools/aventurine-calc">Aventurine Calc</Link>
      <Link href="/tools/tingyun-calc">Tingyun Calc</Link>
      <Link className="ml-auto mr-4" href="/game-data">
        Data
      </Link>
    </nav>
  );
}
