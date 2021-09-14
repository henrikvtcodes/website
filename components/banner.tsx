import Link from 'next/link';
import * as Feather from 'react-feather';




const SocialBanner = () =>{
    const iconColor: string = "white"
    const iconSize: number = 24

    return (
      <main className=" flex flex-row flex-nowrap justify-end content-center bg-opacity-0">
        <span className=" hover:cursor-pointer my-1 ">
          <Link href="https://github.com/henrikvtcodes" passHref>
            <Feather.GitHub color={iconColor} size={iconSize} />
          </Link>
        </span>
        <span className=" hover:cursor-pointer my-1 ">
          <Link href="https://twitter.com/henrik_tech" passHref>
            <Feather.Twitter color={iconColor} size={iconSize} />
          </Link>
        </span>
        <span className=" hover:cursor-pointer my-1 ">
          <Link href="https://instagram.com/henrik_tech" passHref>
            <Feather.Instagram color={iconColor} size={iconSize} />
          </Link>
        </span>
        <span className=" hover:cursor-pointer my-1 ">
          <Link href="https://twitch.tv/henriktech" passHref>
            <Feather.Twitch color={iconColor} size={iconSize} />
          </Link>
        </span>
      </main>
    );
};

export default SocialBanner