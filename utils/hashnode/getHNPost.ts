import { hashnodeClient, Post, PostProps, NestedPostProps } from ".";
import { hashnodeQueries } from "./queries";

async function getAllPosts(page: number = 0) {
  let query = await hashnodeClient
    .query<NestedPostProps>(hashnodeQueries.getPosts, {
      page,
      user: "henrik",
    })
    .toPromise();

  let posts = query.data?.user?.publication?.posts.map((post) => {
    return {
      title: post.title,
      dateAdded: new Date(post.dateAdded),
      slug: post.slug,
    };
  });

  if (!posts) {
    return null;
  }

  posts.sort((post1, post2) => (post1.dateAdded > post2.dateAdded ? -1 : 1));
  return posts;
}

async function getPostBySlug(slug: string) {
  let query = await hashnodeClient
    .query<{ post: Post }>(hashnodeQueries.getPost, {
      slug,
      baseurl: "blog.henriktech.com",
    })
    .toPromise();

  return query.data?.post;
}

export { getAllPosts, getPostBySlug };
