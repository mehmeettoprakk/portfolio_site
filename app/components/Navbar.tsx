import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Sol Taraf (Başlık) */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Mehmet's Portfolio
          </Link>
        </div>

        {/* Sağ Taraf (Menü ve Tema Butonu) */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-primary font-medium">
            Ana Sayfa
          </Link>
          <Link href="/projects" className="hover:text-primary font-medium">
            Projeler
          </Link>
          <Link href="/contact" className="hover:text-primary font-medium">
            İletişim
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
