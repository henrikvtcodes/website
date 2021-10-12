import Link from "next/link";
import Image from 'next/image'
import Icon from 'supercons'
import { BooleanValueNode } from "graphql";



type filled = "home" | "about" | "blog" | "projects" |  "contact"
interface iconFill {
  about?: "" | "-filled";
  blog?: "" | "-filled";
  projects?: "" | "-filled";
  contact?: "" | "-filled";
}



const Header = () => {
  const navIconSize: number = 60;
  const logoSize: number = 60;

  // const fillState:iconFill = {
  //   about: "",
  //   blog: "",
  //   projects: "",
  //   contact: "",
  // }
  // switch (fill) {
  //   case "about":
  //     fillState.about = '-filled'
  //   case "blog":
  //     fillState.blog = "-filled";
  //   case "projects":
  //     fillState.projects = "-filled";
  //   case "contact":
  //     fillState.contact = "-filled";
  // }


  return (
    <header className="flex flex-nowrap flex-row flex-1 justify-center gap-x-4 py-1">
      {/* <span className=" justify-start hover:header-hover ">
        <Link href="/" passHref>
          <Image
            src={"/images/henriklogo.png"}
            alt="henrik cartoon logo"
            width={logoSize}
            height={logoSize}
          />
        </Link>
      </span> */}

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 hover:header-hover ">
        <Link href="/" passHref>
          <Icon glyph={`home`} size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 hover:header-hover ">
        <Link href="/about" passHref>
          <Icon glyph={`profile`} size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 hover:header-hover ">
        <Link href="/blog" passHref>
          <Icon glyph={`docs`} size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 hover:header-hover ">
        <Link href="/projects" passHref>
          <Icon glyph={`code`} size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 hover:header-hover ">
        <Link href="/contact" passHref>
          <Icon glyph={`email`} size={navIconSize} />
        </Link>
      </span>
    </header>
  );
};
export default Header;