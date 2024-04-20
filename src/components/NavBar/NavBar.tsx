import Link from "next/link";


export default function NavBar() {
  return (
    <nav className="flex gap-4 ml-4 w-auto items-end">
      <Link className="border-b" href="/">Home</Link>
      <Link className="border-b" href="/game-data">Data</Link>
      <Link className="border-b" href="/tools/aventurine-calc">Aventurine Calc</Link>
      <Link className="border-b" href="/tools/tingyun-calc">Tingyun Calc</Link>
    </nav>
  );
}
