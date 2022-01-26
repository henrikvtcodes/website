import NextLink from "next/link";
import cn from "classnames";
import dayjs from "dayjs";

export type PostCardProps = {
  title: string;
  desc?: string;
  slug: string;
  publishedAt: string | Date;
};

const PostCard = ({ title, desc, slug, publishedAt }: PostCardProps) => {
  let cardclass =
    "transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-48 bg-gradient-to-r p-1 via-[#FCA5A5] to-[#FECACA]";

  const date = dayjs(publishedAt);

  return (
    <NextLink href={`/blog/${slug}`}>
      <a className="transform hover:scale-95 transition-all duration-150 ease-in rounded-xl w-full md:w-full bg-gradient-to-tr hover:bg-gradient-to-br p-1 from-purple-300 to-sky-300 dark:from-purple-700 dark:to-sky-700">
        <div className="flex flex-col justify-start sm:h-30 rounded-lg p-4 z-40 bg-gray-50 dark:bg-zinc-900">
          <h4 className="text-lg md:text-lg font-medium w-full tracking-tight">
            {title}
          </h4>
          <p className="text-sm md:text-sm font-medium w-full tracking-tight">
            {date.format("MM-DD-YYYY")}
          </p>
          {desc && <p>{desc}</p>}
        </div>
      </a>
    </NextLink>
  );
};

export default PostCard;
