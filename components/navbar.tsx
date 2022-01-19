import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import cn from "classnames";
import { FiSearch } from "react-icons/fi";

import { SearchButton } from "./search";

const NavItem = ({ href, text, alt }: any) => {
  const router = useRouter();
  const currentPage = router.asPath;
  let isHome: boolean = currentPage === ("/" || "");
  let isActive = currentPage.includes(href) && (href !== "" || isHome);

  return (
    <Link href={`/${href}`} passHref>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700"
            : "font-normal text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800 ",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all"
        )}
      >
        <span className="sr-only">{alt}</span>
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className="w-full flex justify-around">
      <nav className="flex flex-row justify-center flex-nowrap gap-4 py-2 z-30 bg-inherit fixed w-content">
        <NavItem href="" text="🏠" alt="home" />
        <NavItem href="about" text="👱" alt="about me" />
        <NavItem href="projects" text="🛠️" alt="projects" />
        <NavItem href="blog" text="📰" alt="blog" />
        <SearchButton />
      </nav>
    </div>
  );
};

export default NavBar;
