import Image from "next/image";

import SocialButtons from "./socialButtons";

type WhoAmIProps = {
  props: {
    name: string;
    userName: string;
    imageURL: string;
    tagline: string;
    shortBio: string;
    longBio: string;
    socials: {
      twitter?: string;
      github?: string;
      linkedin?: string;
      instagram?: string;
      twitch?: string;
      youtube?: {
        urlType: "c/" | "channel/" | "user/" | "";
        url: string;
      };
    };
    type: "short" | "about" | "author";
  };
};

const WhoAmI = ({ props }: WhoAmIProps) => {
  switch (props.type) {
    case "short":
      return (
        <div className="grid grid-cols-5 grid-rows-5 w-full pt-8">
          <div className="whoami-short-pic">
            {/* eslint-disable */}
            <img
              className="col-start-1 object-cover shadow-lg rounded-xl"
              src={"/"}
              alt=""
            />

            {/* <Image
              src={props.imageURL}
              layout="fill"
              className="rounded-3xl"
              alt="henrik bio pic"
            /> */}
          </div>

          <h1 className="col-start-3 col-span-3 row-start-1 row-span-1 CalSans text-4xl self-center mx-auto">
            {props.name}
          </h1>
          <h1 className="col-start-3 col-span-3 row-start-2 row-span-1 CascadiaCode text-xl self-center mx-auto">
            {props.userName}
          </h1>
          <p className="col-start-3 col-span-3 row-start-3 row-span-2 mx-auto px-4">
            {props.shortBio}
          </p>
          <div className="col-start-3 col-span-3 row-start-5 row-span-1 flex flex-row flex-nowrap gap-4 mx-auto">
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
      return <div className="grid"></div>;
  }
};

export default WhoAmI;
