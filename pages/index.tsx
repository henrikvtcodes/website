import  Link  from 'next/link';


import SocialBlock  from '~component/socials';
import NavBar from '~component/navlinks';
import DefaultMeta from '~component/meta';



function Home() {
  return (
    <main className="home-container UniSansHeavy bg-gray-jet pagefill bg-gradient-to-t from-black to-orange-dark ">
      <DefaultMeta />
      <h1 className=" home-title m-8 "> Henrik VT </h1>
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