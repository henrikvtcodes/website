import Image from "next/image";

export const ProfilePicture = () => {
  const dimension = 96;
  return (
    <Image
      src={"/images/henrik-forest.jpg"}
      className={"rounded-full"}
      alt="picture of henrik"
      height={dimension}
      width={dimension}
    />
  );
};
