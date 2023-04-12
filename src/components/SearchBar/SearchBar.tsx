"use client";
import SearchIcon from "@/modules/ui/icons/SearchIcon";
import { useState } from "react";

export function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(search);
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-md w-full mx-3 hidden md:block">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="caret-primary font-semibold w-full pl-11 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <div className="absolute top-0 left-0 px-4 py-2">
        <SearchIcon
          className={`stroke-2 ${
            isFocused ? "stroke-primary" : "stroke-stone-400"
          } transition-colors duration-200`}
        />
      </div>
    </form>
  );
}
