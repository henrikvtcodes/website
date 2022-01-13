import type { Url } from "url";
import {
  FiGithub,
  FiTwitch,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiLink,
} from "react-icons/fi";
import { SiPolywork } from "react-icons/si";

type SocialButtonsProps = {
  social?:
    | "github"
    | "twitter"
    | "instagram"
    | "youtube"
    | "linkedin"
    | "twitch"
    | "polywork";
  tag: string | undefined;
  youtube?: "c/" | "channel/" | "user/" | "";
};

const SocialButtons = ({ social, tag, youtube }: SocialButtonsProps) => {
  const style: string =
    "w-10 h-10 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white flex items-center justify-center rounded-lg hover:ring-2 ring-gray-300  transition-all";

  switch (social) {
    default:
      return (
        <a href={`https://${tag}`}>
          <button className={style}>
            <FiLink />
          </button>
        </a>
      );
    case "github":
      return (
        <a href={`https://github.com/${tag}`}>
          <button className={style}>
            <FiGithub size={20} />
          </button>
        </a>
      );
    case "twitter":
      return (
        <a href={`https://twitter.com/${tag}`}>
          <button className={style}>
            <FiTwitter size={20} />
          </button>
        </a>
      );
    case "instagram":
      return (
        <a href={`https://instagram.com/${tag}`}>
          <button className={style}>
            <FiInstagram size={20} />
          </button>
        </a>
      );
    case "youtube":
      return (
        <a href={`https://youtube.com/${youtube}`}>
          <button className={style}>
            <FiYoutube size={20} />
          </button>
        </a>
      );
    case "linkedin":
      return (
        <a href={`https://linkedin.com/in/${tag}`}>
          <button className={style}>
            <FiLinkedin size={20} />
          </button>
        </a>
      );
    case "twitch":
      return (
        <a href={`https://twitch.tv/${tag}`}>
          <button className={style}>
            <FiTwitch size={20} />
          </button>
        </a>
      );
    case "polywork":
      return (
        <a href={`https://twitch.tv/${tag}`}>
          <button className={style}>
            <SiPolywork size={20} />
          </button>
        </a>
      );
  }
};

export default SocialButtons;
