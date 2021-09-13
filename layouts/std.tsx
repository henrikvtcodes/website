

import Header from '~component/header';
import Footer from '~component/footer';
import SocialBanner from "~component/banner";



const StdLayout = ({children}) =>{
    return (
      <main className="bg-gradient-to-t from-orange-dark to-spanishViolet">
        <SocialBanner />
        <Header />

        <section>{children}</section>

        <Footer />
      </main>
    );
}

export default StdLayout;