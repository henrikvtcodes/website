import NextLink from "next/link";
import cn from "classnames";

type PostCardProps = {
  title: string;
  desc: string;
  slug: string;
};

const ProjectCard = ({ title, desc, slug }: PostCardProps) => {
  return (
    <NextLink href={`/projects/${slug}`}>
      <a className="transform hover:scale-95 transition-all rounded-xl w-full md:w-48 bg-gradient-to-tr hover:bg-gradient-to-br p-1 from-emerald-300 to-blue-300 dark:from-emerald-700 dark:to-blue-700">
        <div className="flex flex-col justify-start sm:h-60 rounded-lg p-4 z-40 bg-gray-50 dark:bg-zinc-900">
          <h4 className="text-lg md:text-lg font-medium w-full tracking-tight">
            {title}
          </h4>
          <p>{desc}</p>
        </div>
      </a>
    </NextLink>
  );
};

export default ProjectCard;
