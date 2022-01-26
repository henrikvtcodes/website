import Favicon, { DefaultMeta, CustomMeta } from "components/meta";
import NavBar from "components/navbar";
import DVDLogo from "components/dvdlogo";
import { SearchModal } from "components/search";
import NextLink from "next/link";

const meta = {
  title: "henrik's shitty website",
  desc: "hi, im henrik. i've spent to much time on this project.",
  author: "henrik",
  icon: "/images/henriklogo.png",
  image: "/images/henrik-forest.jpg",
  twitterSite: "@henrik_tech",
};

const StdLayout = ({
  children,
  className,
  title,
  desc,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  desc?: string;
}) => {
  return (
    <main className="flex flex-col justify-start items-center content-center h-screen content">
      <Favicon />
      <CustomMeta
        title={title ? title : meta.title}
        desc={desc ? desc : meta.desc}
      />

      <DVDLogo />

      <NavBar />

      <SearchModal />

      <div
        className={`pt-16 px-2 backdrop-blur-lg rounded-lg sm:w-content self-center h-full overflow-y-auto ${className} `}
      >
        {children}
      </div>

      <hr className="my-4 border-zinc-200 dark:border-gray-500 border-t-1 rounded-sm md:w-content" />

      <footer className="md:w-content grid grid-cols-2 px-4">
        <div className="col-span-1 col-start-1 flex flex-col justify-start items-start gap-y-4">
          <NextLink href={"/"}>
            <a className="text-gray-600 dark:text-gray-400 ">Home</a>
          </NextLink>
          <NextLink href={"/about"}>
            <a className="text-gray-600 dark:text-gray-400">About</a>
          </NextLink>
          <NextLink href={"/blog"}>
            <a className="text-gray-600 dark:text-gray-400">Blog</a>
          </NextLink>
        </div>
        <div className="col-span-1 col-start-2 flex flex-col justify-start items-start">
          <NextLink href={"/"}>
            <a className="text-gray-600 dark:text-gray-400">Home</a>
          </NextLink>
        </div>
      </footer>
    </main>
  );
};

export default StdLayout;
