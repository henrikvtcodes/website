import SocialBlock from "~component/socials";
import NavBar from "~component/navlinks";
import { InfoCard } from "~component/infocard";
import DefaultMeta from "~component/meta";
import { ProfilePicture } from "~component/pfp";
import { Title } from "~component/title";

function Home() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-tr from-orange-500 via-blue-400 to-purple-400 flex justify-center items-center">
      <DefaultMeta />
      <InfoCard>
        <ProfilePicture />
        <Title />
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
