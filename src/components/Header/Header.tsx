import SearchIcon from "@/modules/ui/icons/SearchIcon";
import CompanyLogo from "@/modules/ui/icons/CompanyLogo";

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center bg-purple-500 py-2">
      <div className="flex justify-between w-full max-w-7xl">
        <div className="">
          <CompanyLogo className="w-10 h-20 stroke-yellow-500 " />
        </div>
        <ul className="flex justify-center items-center gap-5 text-black font-bold">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cart">About</a>
          </li>
          <li>
            <a href="/cart">Contact</a>
          </li>
          <SearchIcon className="w-5 h-5 stroke-black stroke-[3px]" />
        </ul>
      </div>
    </header>
  );
}
