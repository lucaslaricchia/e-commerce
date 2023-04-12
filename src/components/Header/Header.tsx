import Logo from "@/modules/ui/icons/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "@/modules/ui/icons/CartIcon";
import { SearchBar } from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <header className="w-full flex justify-center px-3 bg-blue-600 shadow-stone-400 shadow-sm items-center py-2 z-10 relative">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div className="cursor-pointer">
          <Link href="/">
            <Image alt="Company Logo" src={Logo} width={100} />
          </Link>
        </div>
        <SearchBar />
        <ul className="flex justify-center items-center gap-5 text-white drop-shadow-lg font-bold">
          <li className="hover:text-black transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-black transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-black transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
          <CartIcon className="w-5 h-5 stroke-white stroke-[3px] drop-shadow-lg hover:stroke-black transition-colors cursor-pointer" />
        </ul>
      </div>
    </header>
  );
}
