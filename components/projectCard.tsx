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
      <a
        className={cn(
          "transform hover:scale-[1.01] transition-all",
          "rounded-xl w-full md:w-48 bg-gradient-to-r p-1",
          "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
        )}
      >
        <div className="flex flex-col justify-start sm:h-60 rounded-lg p-4 dark:bg-zinc-900">
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
