import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-4 items-end ml-4">
      <Link href="/">Home</Link>
      <Link href="/tools/aventurine-calc">Aventurine Calc</Link>
      <Link href="/tools/tingyun-calc">Tingyun Calc</Link>
    </nav>
  );
}
