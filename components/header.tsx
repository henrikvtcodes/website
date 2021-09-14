import Link from "next/link";
import Image from 'next/image'
import Icon from 'supercons'







const Header = () => {
  const navIconSize: number = 60;
  const logoSize: number = 60;

  return (
    <header className="flex flex-nowrap flex-row flex-1 justify-center gap-x-4 py-1 bg-blue-900">
      {/* <span className=" justify-start hover:cursor-pointer ">
        <Link href="/" passHref>
          <Image
            src={"/images/henriklogo.png"}
            alt="henrik cartoon logo"
            width={logoSize}
            height={logoSize}
          />
        </Link>
      </span> */}

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 hover:cursor-pointer ">
        <Link href="/" passHref>
          <Icon glyph="home" size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 hover:cursor-pointer ">
        <Link href="/about" passHref>
          <Icon glyph="person-card" size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 hover:cursor-pointer ">
        <Link href="/blog" passHref>
          <Icon glyph="docs" size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 hover:cursor-pointer ">
        <Link href="/projects" passHref>
          <Icon glyph="code" size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 hover:cursor-pointer ">
        <Link href="/contact" passHref>
          <Icon glyph="email" size={navIconSize} />
        </Link>
      </span>
    </header>
  );
};
export default Header;