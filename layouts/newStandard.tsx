import NextLink from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import { isMobile } from "react-device-detect";

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
    <div className="flex flex-col justify-start items-center content-center h-screen content">
      <Favicon />
      <CustomMeta
        title={title ? title : meta.title}
        desc={desc ? desc : meta.desc}
      />

      {/* {!isMobile && <DVDLogo />} */}

      <NavBar />

      <main className="pt-14 md:w-content md:backdrop-blur mx-2 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default StdLayout;
