import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import NextLink from "next/link";

import StdLayout from "layouts/standard";
import markdownCss from "styles/markdown.module.css";
import * as Hashnode from "utils/hashnode/getHNPost";
import type { Post } from "utils/hashnode";

type PageProps = {
  post: PostType;
  children?: React.ReactNode;
};

type PostType = {
  slug: string;
  title: string;
  date: string;
  client: string;
  coverImage: string;
  excerpt: string;
  desc: string;
  content: any;
  published?: boolean;
};

const Page = ({ post }: { post: Post }) => {
  const components = { Image, NextLink };

  return (
    <StdLayout title={`${post.title} | henrik's shitty blog`} desc={post.title}>
      <div className="flex">
        <div className={markdownCss["markdown"]}>
          <MDXRemote {...post.contentMarkdown} />
        </div>
      </div>
    </StdLayout>
  );
};

async function getStaticPaths() {
  let posts = await Hashnode.getAllPosts();

  const paths = posts?.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

async function getStaticProps({ params: { slug } }: any) {
  let post = await Hashnode.getPostBySlug(slug);

  // @ts-ignore
  post.contentMarkdown = await serialize(post?.contentMarkdown || "");

  return {
    props: {
      post,
    },
  };
}

export default Page;
export { getStaticPaths, getStaticProps };
