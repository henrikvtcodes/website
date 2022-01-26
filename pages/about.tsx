import Image from "next/image";

import StdLayout from "../layouts/newStandard";
import ThemeButton from "../components/themeChange";

const Home = () => {
  return (
    <StdLayout
      title="about me | henrik's shitty website"
      desc="a little bit about me"
    >
      <div className="pt-6 pl-3">
        <section className="about-title">
          <h1 className="CalSans text-6xl">Henrik VT</h1>
          <h2 className=" text-base">
            {" "}
            <i className="Inter">a.k.a</i>{" "}
            <code className="CascadiaCode">henrikvtcodes</code>{" "}
            <i className="Inter">or</i>{" "}
            <code className="CascadiaCode">henrik_tech</code>{" "}
          </h2>
        </section>
        <section className="about-image">
          {/* eslint-disable */}

          {/* <Image src={"/images/henrik-forest.jpg"} alt="henrik curled up in ftc sizing tool" layout='fill' className='rounded-lg'/> */}
        </section>
        <p></p>
      </div>
    </StdLayout>
  );
};

export default Home;
