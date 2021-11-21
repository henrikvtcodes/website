import Header from "~component/header";
import Footer from "~component/footer";
import SocialBanner from "~component/socials"
import StdLayout from "./std";

const StdPostLayout = ({ children }) => {
  return (
    <StdLayout>
      <article className=" mx-2 "> {children} </article>
    </StdLayout>
  );
};

export default StdPostLayout;
