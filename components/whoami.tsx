import Image from 'next/image';

import SocialButtons from './socialButtons';

type WhoAmIProps = {
  props:{
    name:string;
    userName:string;
    imageURL:string;
    tagline:string;
    shortBio:string;
    longBio:string;
    socials:{
      twitter?:string;
      github?:string;
      linkedin?:string;
      instagram?:string;
      twitch?:string;
      youtube?:{
        urlType:"c/" | "channel/" | "user/"| "";
        url:string;
      }
    }
    type: "short" | "about" | "author";
  }
}

const WhoAmI = ({props}:WhoAmIProps) => {
  switch (props.type) {
    case "short":
      return (
        <div className="whoami-short-container w-full pt-8">
          <div className="whoami-short-pic aspect-w-1 aspect-h-1 ">
            <Image
              src={props.imageURL}
              layout="fill"
              className="rounded-3xl"
              alt="henrik bio pic"
            />
          </div>
          <h1 className="whoami-short-name CalSans text-4xl self-center dark:text-white">
            {props.name}
          </h1>
          <h1 className="whoami-short-username CascadiaCode text-xl self-center dark:text-white">
            {props.userName}
          </h1>
          <p className="whoami-short-bio">{props.shortBio}</p>
          <div className="whoami-short-socials flex flex-row flex-nowrap gap-4 px-4">
            {props.socials.instagram && (
              <SocialButtons social="instagram" tag={props.socials.instagram} />
            )}
            {props.socials.twitter && (
              <SocialButtons social="twitter" tag={props.socials.twitter} />
            )}
            {props.socials.github && (
              <SocialButtons social="github" tag={props.socials.github} />
            )}
            {props.socials.linkedin && (
              <SocialButtons social="linkedin" tag={props.socials.linkedin} />
            )}
            {props.socials.twitch && (
              <SocialButtons social="twitch" tag={props.socials.twitch} />
            )}
            {props.socials.youtube && (
              <SocialButtons
                social="youtube"
                youtube={props.socials.youtube.urlType}
                tag={props.socials.youtube.url}
              />
            )}
          </div>
        </div>
      );
    case "about":
      return null;
    case "author":
      return (
        <div className="grid">

        </div>
      );
  }
}

export default WhoAmI;