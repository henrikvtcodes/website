import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full flex sm:flex-row flex-col justify-center content-center my-4 sm:gap-x-2 gap-y-2">
      <Link href={"https://blog.henriktech.com"} passHref>
        <a className="no-underline grow" target={"_blank"}>
          <div className="w-full px-6 py-2 text-center align-middle font-semibold text-sm text-white rounded bg-white bg-opacity-10 hover:bg-opacity-20">
            Blog
          </div>
        </a>
      </Link>
      <Link
        href={
          "https://consulting.henrikvt.com?utm_campaign=links&utm_source=portfolio&utm_medium=web"
        }
        passHref
      >
        <a className="no-underline grow" target={"_blank"}>
          <div className="w-full px-6 py-2 text-center align-middle font-semibold text-sm text-white rounded bg-white bg-opacity-10 hover:bg-opacity-20">
            Consulting
          </div>
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
