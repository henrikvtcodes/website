import  Link  from 'next/link';


import SocialBlock  from '~component/socials';
import NavBar from '~component/navlinks';
import DefaultMeta from '~component/meta';
import { HomePageWave, HakeiBlurryGradient1 } from '~component/shapes';


function Home(props) {
  return (
    <main className="home-container UniSansHeavy pagefill home-bg-wave bg-fixed bg-center bg-cover">
      <DefaultMeta />
      <HomePageWave />
      <h1 className=" home-title m-8 text-7xl text-white "> Henrik VT </h1>
      <div className="flex-child-nav ">
        <NavBar />
      </div>
      <div className="flex-child-socials ">
        <SocialBlock />
      </div>
    </main>
  );
}

export default Home;