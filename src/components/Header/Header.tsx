import SearchIcon from "@/modules/ui/icons/SearchIcon";
import Logo from "@/modules/ui/icons/Logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-center px-3 bg-blue-600 shadow-stone-400 shadow-sm items-center py-2">
      <div className="flex justify-between w-full max-w-7xl">
        <div className="">
          <Image alt="Company Logo" src={Logo} width={100} />
        </div>
        <ul className="flex justify-center items-center gap-5 text-white drop-shadow-lg font-bold">
          <li className="hover:text-black transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-black transition-colors">
            <Link href="/cart">About</Link>
          </li>
          <li className="hover:text-black transition-colors">
            <Link href="/cart">Contact</Link>
          </li>
          <SearchIcon className="w-5 h-5 stroke-white stroke-[3px] drop-shadow-lg hover:stroke-black transition-colors cursor-pointer" />
        </ul>
      </div>
    </header>
  );
}
