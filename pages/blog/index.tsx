import StdLayout from "layouts/standard";
import PostCard from "components/postCard";
import { getPostSlugs, getPostBySlug, Items } from "utils/getLocalPost";

type PostProps = {
  title: string;
  desc: string;
  slug: string;
};

const Page = ({ posts }: { posts: PostProps[] }) => {
  return (
    <StdLayout title="henrik's shitty blog" desc="just my blog lol">
      <h1 className="text-3xl my-4 CalSans">Blog</h1>
      <p className="text-lg">
        Blog posts I&apos;ve written about various tech things that interest me.
        Some learning experiences, tips and tricks, and other random stuff.
      </p>

      <hr className="my-4 border-zinc-900 dark:border-gray-50 border-t-4 rounded-sm" />

      <div className="flex flex-row flex-wrap justify-around content-center items-center gap-2">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            desc={post.desc}
            slug={post.slug}
          />
        ))}
      </div>
    </StdLayout>
  );
};

async function getStaticProps() {
  const postSlugs = getPostSlugs("blog");

  let posts: PostProps[] = postSlugs.map((slug) => {
    let post = getPostBySlug("blog", slug, [
      "title",
      "slug",
      "desc",
      "content",
      "author",
      "published",
    ]);
    return {
      title: post["title"],
      desc: post["desc"],
      slug: post["slug"],
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Page;
export { getStaticProps };
