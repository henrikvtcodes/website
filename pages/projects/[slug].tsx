import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import NextLink from "next/link";
import fs from "fs";
import path from "path";


import { getPostBySlug, getAllPosts } from "utils/getPost";
import StdLayout from "layouts/standard";

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

const Page = ({ post }: PageProps) => {

  const components = {Image, NextLink};

  return (
    <StdLayout>
      <div className="flex">
        <MDXRemote {...post.content} components={components} />
      </div>
    </StdLayout>
  );
};

async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}


async function getStaticProps({ params: { slug } }: any) {
  const post = getPostBySlug('projects', slug, [
    "title",
    "slug",
    "desc",
    "content",
    "author",
    "published",
  ]);

  const content = await serialize(post.content);

  if ((post.published as unknown as boolean) !== true) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export default Page;
export { getStaticPaths, getStaticProps };