import Header from "~component/old/header";
import Footer from "~component/old/footer";
import SocialBanner from "~component/old/socials"
import StdLayout from "./std";

const StdPostLayout = ({ children }) => {
  return (
    <StdLayout>
      <article className=" mx-2 "> {children} </article>
    </StdLayout>
  );
};

export default StdPostLayout;
