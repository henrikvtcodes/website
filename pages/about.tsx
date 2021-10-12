
import Header from "~component/header";
import Footer from "~component/footer";
import SocialBanner from "~component/banner";
import { HomePageWave } from "~component/shapes";
import StdLayout from "layouts/std";

const About = () => {
  return (
    <main className=" svgbg-blue pagefill">
      <div className=" home-bg-gradient bg-cover bg-blue-pacific rounded-b-2xl ">
        <SocialBanner />
        <Header />
      </div>
    </main>
  );
};

export default About;