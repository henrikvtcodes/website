import StdLayout from "layouts/newStandard";
import PostCard, { PostCardProps } from "components/postCard";
import { getPostSlugs, getPostBySlug, Items } from "utils/getLocalPost";
import { getAllPosts } from "utils/hashnode/getHNPost";

type PostPageProps = {
  title: string;
  desc?: string;
  slug: string;
  publishedAt: string;
};

const Page = ({ posts }: { posts: PostPageProps[] }) => {
  return (
    <StdLayout title="henrik's shitty blog" desc="just my blog lol">
      <h1 className="text-3xl my-4 CalSans">Blog</h1>
      <p className="text-lg">
        Blog posts I&apos;ve written about various tech things that interest me.
        Some learning experiences, tips and tricks, and other random stuff.
      </p>

      <hr className="my-4 border-zinc-900 dark:border-gray-50 border-t-4 rounded-sm" />

      <div className="flex flex-col flex-nowrap justify-around content-center items-center gap-2">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            slug={`${post.slug}`}
            publishedAt={post.publishedAt}
          />
        ))}
      </div>
    </StdLayout>
  );
};

async function getStaticProps() {
  // const postSlugs = getPostSlugs("blog");

  // let localPosts: PostCardProps[] = postSlugs.map((slug) => {
  //   // Get all MDX blog posts
  //   let post = getPostBySlug("blog", slug, [
  //     "title",
  //     "slug",
  //     "desc",
  //     "content",
  //     "author",
  //     "published",
  //     "publishedAt",
  //   ]);
  //   return {
  //     title: post["title"],
  //     desc: post["desc"],
  //     slug: `mdx/${post["slug"]}`,
  //     publishedAt: new Date(post["publishedAt"]),
  //   };
  // });

  let hashnodePosts = await getAllPosts(); // get all posts from Hashnode

  if (hashnodePosts === null) {
    // dismiss ts2532 error
    return {
      props: {
        posts: [],
      },
    };
  }

  let convertedHashnodePosts: PostCardProps[] = hashnodePosts.map((post) => {
    return {
      title: post.title,
      slug: `hn/${post.slug}`,
      publishedAt: new Date(post.dateAdded),
    };
  });

  let fullPosts: PostCardProps[] = [...convertedHashnodePosts];

  fullPosts.sort((post1, post2) =>
    post1.publishedAt > post2.publishedAt ? -1 : 1
  );

  let sortedFullPosts = fullPosts.map((post) => {
    if (typeof post.publishedAt !== "string") {
      return {
        title: post.title,
        slug: post.slug,
        publishedAt: post.publishedAt.toISOString(),
      };
    } else {
      return {
        title: post.title,
        slug: post.slug,
        publishedAt: post.publishedAt,
      };
    }
  });

  return {
    props: {
      posts: sortedFullPosts,
    },
  };
}

export default Page;
export { getStaticProps };
