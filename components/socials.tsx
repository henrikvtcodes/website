import Link from "next/link";
// import Icon from "supercons";
import { GitHub, Twitch, Twitter, Instagram } from "react-feather";

const SocialBlock = (flexClass: any) => {
  const iconSize: number = 48;

  return (
    <nav className="mt-2 mb-2 flex space-x-2 md:space-x-4">
      <span className=" hover:cursor-pointer hover:text-black">
        <Link
          href="https://github.com/henrikvtcodes"
          passHref
          target={"_blank"}
        >
          <GitHub className="sm:w-9 w-6 h-auto" />
        </Link>
      </span>
      <span className=" hover:cursor-pointer hover:text-blue-twitter ">
        <Link href="https://twitter.com/henrik_tech" passHref target={"_blank"}>
          <Twitter className="sm:w-9 w-6 h-auto" />
        </Link>
      </span>
      {/* <span className=" hover:cursor-pointer hover:text-purple-instagram ">
        <Link href="https://instagram.com/henrik_tech" passHref>
          <Instagram className="md:w-9 w-6 h-auto" />
        </Link>
      </span>
      <span className=" hover:cursor-pointer hover:text-purple-twitch ">
        <Link href="https://twitch.tv/henriktech" passHref>
          <Twitch className="md:w-9 w-6 h-auto text-center" />
        </Link>
      </span> */}
    </nav>
  );
};

export default SocialBlock;
