import { GitHub, Twitch, Twitter, Instagram } from "react-feather";

const SocialBlock = (flexClass: any) => {
  const iconSize: number = 48;

  return (
    <nav className="mt-2 mb-2 flex space-x-2 md:space-x-4">
      <span className=" hover:cursor-pointer hover:text-black">
        <a
          className="no-underline"
          href="https://github.com/henrikvtcodes"
          target={"_blank"}
        >
          <GitHub className="sm:w-9 w-6 h-auto" />
        </a>
      </span>
      <span className="hover:cursor-pointer hover:text-blue-twitter ">
        <a
          className="no-underline"
          href="https://twitter.com/henrikvtcodes"
          target={"_blank"}
        >
          <Twitter className="sm:w-9 w-6 h-auto" />
        </a>
      </span>
    </nav>
  );
};

export default SocialBlock;
