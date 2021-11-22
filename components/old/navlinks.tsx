import Link from 'next/link'
import Icon from 'supercons';


const NavBar = () => {

  const navIconSize: number = 64


  return (
    <nav className="mt-2 mb-2">
      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 navlinks-hover ">
        <Link href="/about" passHref>
          <Icon glyph={`person-card`} size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 navlinks-hover ">
        <Link href="/blog" passHref >
          <Icon glyph={`docs`} size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 navlinks-hover ">
        <Link href="/projects" passHref>
          <Icon glyph={`code`} size={navIconSize} />
        </Link>
      </span>

      <span className=" xl:px-24 lg:px-20 md:px-12 sm:px-6 navlinks-hover ">
        <Link href="/contact" passHref>
          <Icon glyph={`email`} size={navIconSize} />
        </Link>
      </span>
    </nav>
  );
};

export default NavBar;