import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <a className="text-2xl font-bold text-primary">Mehmet</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/projects">Projeler</Link>
            </li>
            <li>
              <Link href="/contact">İletişim</Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
