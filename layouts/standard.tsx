import Favicon, { DefaultMeta, CustomMeta } from "components/meta";
import NavBar from "components/navbar";
import DVDLogo from "components/dvdlogo";
import { SearchModal } from "components/search";

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
    <main className="flex flex-col justify-start content-center h-screen content">
      <Favicon />
      <CustomMeta
        title={title ? title : meta.title}
        desc={desc ? desc : meta.desc}
      />

      <DVDLogo />

      <NavBar />

      <SearchModal />

      <div
        className={`z-0 pt-16 px-2 backdrop-blur-lg rounded-lg sm:w-content self-center h-full overflow-y-auto ${className} `}
      >
        {children}
      </div>
    </main>
  );
};

export default StdLayout;
