import Link from "next/link";
import useEffect from "react";

import SocialBlock from "~component/socials";
import NavBar from "~component/navlinks";
import { InfoCard } from "~component/infocard";
import DefaultMeta from "~component/meta";
import { HomePageWave, HakeiBlurryGradient1 } from "~component/shapes";
import { ProfilePicture } from "~component/pfp";

function Home(props) {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-tr from-orange-500 via-blue-400 to-purple-400 flex justify-center items-center">
      <DefaultMeta />
      <InfoCard>
        <ProfilePicture />
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" passHref>
          <h1 className="lg:text-7xl md:text-6xl text-5xl mt-2 mb-4 font-extrabold text-white hover:cursor-pointer">
            Henrik VT
          </h1>
        </Link>
        <p className=" max-w-md px-4">
          Hi! I&apos;m Henrik VT, a teenage software developer and general
          technology enthusiast. I&apos;m interested in high/low level
          programming, distributed systems, robotics, AV, and 🚆 TRAINS. You
          should check out my blog and links below. 😄
        </p>
        <NavBar />
        <SocialBlock />
      </InfoCard>
    </main>
  );
}

export default Home;
