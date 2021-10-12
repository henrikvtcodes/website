import Header from "~component/header";
import Footer from "~component/footer";
import SocialBar from "~component/socials"

const PostLayout = ({ children }) => {
  return (
    <main>
      <SocialBar />
      <Header />
      <article>
        {children}
      </article>
      <Footer />
    </main>
  );
};

export default PostLayout;
