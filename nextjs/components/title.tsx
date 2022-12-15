import Link from "next/link";
import { usePlausible } from "next-plausible";

export const Title = () => {
  const plausible = usePlausible();
  return (
    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" passHref>
      <a className="no-underline" target={"_blank"}>
        <h1 className="lg:text-7xl md:text-6xl text-5xl mt-2 mb-4 font-extrabold text-white hover:cursor-pointer">
          Henrik VT
        </h1>
      </a>
    </Link>
  );
};
