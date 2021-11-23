import  Link  from 'next/link';
import useEffect from 'react';

import SocialBlock  from '~component/old/socials';
import NavBar from '~component/old/navlinks';
import DefaultMeta from '~component/old/meta';
import { HomePageWave, HakeiBlurryGradient1 } from '~component/old/shapes';

function Home(props) {

  return (
    <main className="home-container pagefill home-bg-wave bg-fixed bg-center bg-cover">
      <DefaultMeta />
      <HomePageWave />
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" passHref>
        <h1 className=" home-title m-8 text-7xl UniSansHeavy text-white hover:cursor-pointer">
          Henrik VT
        </h1>
      </Link>
      <div className="flex-child-socials ">
        <SocialBlock />
      </div>
    </main>
  );
}

export default Home;