import Link from 'next/link';
import * as Feather from 'react-feather';




const SocialBanner = () =>{
    const iconColor: string = "white"
    const iconSize: number = 24

    return (
      <main className=" flex flex-row flex-nowrap justify-end content-center bg-opacity-0 space-x-2">
        <span className="  hover:cursor-pointer hover:text-black my-1 ">
          <Link href="https://github.com/henrikvtcodes" passHref>
            <Feather.GitHub  size={iconSize} />
          </Link>
        </span>
        <span className=" hover:cursor-pointer hover:text-blue-twitter my-1 ">
          <Link href="https://twitter.com/henrik_tech" passHref>
            <Feather.Twitter  size={iconSize} />
          </Link>
        </span>
        <span className=" hover:cursor-pointer hover:text-purple-instagram my-1 ">
          <Link href="https://instagram.com/henrik_tech" passHref>
            <Feather.Instagram  size={iconSize} />
          </Link>
        </span>
        <span className=" hover:cursor-pointer hover:text-purple-twitch my-1 ">
          <Link href="https://twitch.tv/henriktech" passHref>
            <Feather.Twitch  size={iconSize} />
          </Link>
        </span>
      </main>
    );
};

export default SocialBanner