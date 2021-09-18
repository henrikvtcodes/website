

import Header from '~component/header';
import Footer from '~component/footer';
import SocialBanner from "~component/banner";
import { HomePageWave } from '~component/shapes';

const StdLayout = ({children}) =>{
    return (
      <main className=" page-layerwave ">
        
        <SocialBanner />
        <Header />
        <section className=" svgbg-blue ">{children}</section>
        <Footer />
      </main>
    );
}

export default StdLayout;