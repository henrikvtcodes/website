import { createClient } from "@urql/core";

export const hashnodeClient = createClient({
  url: "https://api.hashnode.com/",
});

export type Query = {
  operation: object;
  data: object;
};

export type Post = {
  title: string;
  slug: string;
  coverImage: string;
  contentMarkdown: any;
};

export type PostProps = {
  title: string;
  dateAdded: string | Date;
  slug: string;
};

export type NestedPostProps = {
  user: {
    publication: {
      posts: PostProps[];
    };
  };
};

export interface PostQuery extends Query {
  data: {
    post: Post;
  };
}
