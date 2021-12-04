import type { Url } from "url";
import {FiGithub, FiTwitch, FiTwitter, FiInstagram, FiYoutube, FiLinkedin, FiLink} from "react-icons/fi";

type SocialButtonsProps = {
  social:
    | "github"
    | "twitter"
    | "instagram"
    | "youtube"
    | "linkedin"
    | "twitch";
  tag: string | undefined;
  youtube?: "c/" | "channel/" | "user/"| "";
}

const SocialButtons = ({ social, tag, youtube}: SocialButtonsProps) => {
  
  switch (social) {
    default:
      return (
        <a href={`https://${tag}`}>
          <button className="w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all">
            <FiLink />
          </button>
        </a>
      );
    case "github":
      return (
        <a href={`https://github.com/${tag}`}>
          <button className="w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all">
            <FiGithub size={20} />
          </button>
        </a>
      );
    case "twitter":
      return (
        <a href={`https://twitter.com/${tag}`}>
          <button className="w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all">
            <FiTwitter size={20} />
          </button>
        </a>
      );
    case "instagram":
      return (
        <a href={`https://instagram.com/${tag}`}>
          <button className="w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all">
            <FiInstagram size={20} />
          </button>
        </a>
      );
    case "youtube":
      return (
        <a href={`https://youtube.com/${youtube}`}>
          <button className="w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all">
            <FiYoutube size={20} />
          </button>
        </a>
      );
    case "linkedin":
      return (
        <a href={`https://linkedin.com/in/${tag}`}>
          <button className="w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all">
            <FiLinkedin size={20} />
          </button>
        </a>
      );
    case "twitch":
      return (
        <a href={`https://twitch.tv${tag}`}>
          <button className="w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all">
            <FiTwitch size={20} />
          </button>
        </a>
      );
  }
};

export default SocialButtons;