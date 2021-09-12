import Link from "next/link";
import Icon from "supercons";



const SocialBar = (flexClass:any) => {
    return (
      <nav>
          <span className="">
              <Link href="https://github.com/henrikvtcodes" passHref><Icon glyph="github" size={48} /></Link>
          </span>
          <span className=" ">
              <Link href="https://twitter.com/henrik_tech" passHref><Icon glyph="twitter" size={48} /></Link>
          </span>
          <span className=" ">
              <Link href="https://instagram.com/henrik_tech" passHref><Icon glyph="instagram" size={48} /></Link>
          </span>
          <span className=" ">
              <Link href="https://twitch.tv/henriktech" passHref><Icon glyph="twitch" size={48} /></Link>
          </span>
      </nav>
    );
}


export default SocialBar;