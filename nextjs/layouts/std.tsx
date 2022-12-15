import Image from "next/image";
import { useEffect } from "react";


import Header from "~component/header";
import Footer from "~component/footer";
import SocialBanner from "~component/banner";
import { HomePageWave } from "~component/shapes";

const StdLayout = ({ children }) => {
  return (
    <main className=" svgbg-blue pagefill z-0">
      <div className=" home-bg-gradient bg-cover bg-blue-pacific rounded-b-2xl z-50">
        <SocialBanner />
        <Header />
      </div>
      {/* <span className="z-10">
        <Image src={"/images/henrik-forest.jpg"} width={908} height={908} alt=""/>
      </span> */}

      {children}
    </main>
  );
};

export default StdLayout;
