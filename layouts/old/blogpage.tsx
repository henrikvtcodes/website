import Image from "next/image";

import Header from "~component/old/header";
import Footer from "~component/old/footer";
import SocialBanner from "~component/old/banner";
import { HomePageWave } from "~component/old/shapes";

const BlogLayout = ({ children }) => {
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

export default BlogLayout;
