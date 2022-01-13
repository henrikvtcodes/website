import Favicon, { DefaultMeta } from "../components/meta";
import NavBar from "../components/navbar";
import DVDLogo from "components/dvdlogo";

const StdLayout = ({ children, className }: any) => {
  return (
    <main className="flex flex-col justify-start content-center h-screen">
      <Favicon />
      <DefaultMeta />

      <DVDLogo />

      <NavBar />

      <div
        className={`z-20 pt-16 px-2 backdrop-blur-lg rounded-lg sm:w-content self-center h-full ${className}`}
      >
        {children}
      </div>
    </main>
  );
};

export default StdLayout;
