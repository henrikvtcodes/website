import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import StdLayout from '../layouts/standard';
import WhoAmI from 'components/whoami';

const Home = () => {
  return (
    <StdLayout>
      <div className="flex">
        <WhoAmI
          props={{
            name: "Henrik VT",
            userName: "henrikvtcodes / henrik_tech",
            imageURL: "/images/henrik-forest.jpg",
            shortBio: '"Jack of all trades, master of none, but better than a master of one."',
            longBio: "Hi, I'm Henrik",
            tagline: "I'm a software developer",
            socials: {
              twitter: "/henrik_tech",
              github: "/henrikvtcodes",
              linkedin: "/henrik-van-tassell-68964a216",
              instagram: "/henrik_tech",
              twitch: "/henriktech",
            },
            type: "short",
          }}
        />
      </div>
    </StdLayout>
  );
}

export default Home
