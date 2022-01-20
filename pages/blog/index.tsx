import StdLayout from "layouts/standard";
import PostCard, { PostCardProps } from "components/postCard";
import { getPostSlugs, getPostBySlug, Items } from "utils/getLocalPost";
import { getAllPosts } from "utils/hashnode/getHNPost";

const Page = ({ fullPosts }: { fullPosts: PostCardProps[] }) => {
  return (
    <StdLayout title="henrik's shitty blog" desc="just my blog lol">
      <h1 className="text-3xl my-4 CalSans">Blog</h1>
      <p className="text-lg">
        Blog posts I&apos;ve written about various tech things that interest me.
        Some learning experiences, tips and tricks, and other random stuff.
      </p>

      <hr className="my-4 border-zinc-900 dark:border-gray-50 border-t-4 rounded-sm" />

      <div className="flex flex-row flex-wrap justify-around content-center items-center gap-2">
        {fullPosts.map((post) => (
          <PostCard key={post.slug} title={post.title} slug={`${post.slug}`} />
        ))}
      </div>
    </StdLayout>
  );
};

async function getStaticProps() {
  const postSlugs = getPostSlugs("blog");

  let localPosts: PostCardProps[] = postSlugs.map((slug) => {
    // Get all MDX blog posts
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
      slug: `mdx/${post["slug"]}`,
    };
  });

  let hashnodePosts = await getAllPosts(); // get all posts from Hashnode

  if (hashnodePosts === undefined) {
    // dismiss ts2532 error
    return {
      props: {
        localPosts,
      },
    };
  }

  let convertedHashnodePosts: PostCardProps[] = hashnodePosts.map((post) => {
    return {
      title: post.title,
      slug: `hn/${post.slug}`,
    };
  });

  let fullPosts: PostCardProps[] = [...localPosts, ...convertedHashnodePosts];

  return {
    props: {
      fullPosts,
    },
  };
}

export default Page;
export { getStaticProps };
