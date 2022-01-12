import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import cn from "classnames";

const NavItem = ({ href, text }: any) => {
  const router = useRouter();
  const currentPage = router.asPath;
  let isHome: boolean = currentPage === ("/" || "");
  let isActive = currentPage.includes(href) && (href !== "" || isHome);

  return (
    <Link href={`/${href}`} passHref>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className="w-full flex justify-around">
      <nav className="flex flex-row justify-center flex-nowrap gap-4 py-2 z-50 fixed w-content backdrop-blur-lg">
        <NavItem href="" text="Home" />
        <NavItem href="about" text="About" />
        <NavItem href="projects" text="Projects" />
        <NavItem href="blog" text="Blog" />
      </nav>
    </div>
  );
};

export default NavBar;
