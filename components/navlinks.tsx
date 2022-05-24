import Link from "next/link";
import Icon from "supercons";

const NavBar = () => {
  const navIconSize: number = 64;

  return (
    <nav className="w-full flex justify-center content-center my-4">
      <Link href={"https://blog.henriktech.com"} passHref>
        <a className="no-underline">
          <span className="h-6 min-h-max px-6 py-2 align-middle font-semibold text-sm text-white rounded bg-white bg-opacity-10 hover:bg-opacity-20">
            Blog
          </span>
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
