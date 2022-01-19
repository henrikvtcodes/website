import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import NextLink from "next/link";
import fs from "fs";
import path from "path";

import { getPostBySlug, getPostSlugs } from "utils/getLocalPost";
import StdLayout from "layouts/standard";
import markdownCss from "styles/markdown.module.css";

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
  const components = { Image, NextLink };

  return (
    <StdLayout title={`${post.title} | henrik's shitty blog`} desc={post.desc}>
      <div className="flex">
        <div className={markdownCss["markdown"]}>
          <MDXRemote {...post.content} components={components} />
        </div>
      </div>
    </StdLayout>
  );
};

async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/blog"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

async function getStaticProps({ params: { slug } }: any) {
  const post = getPostBySlug("blog", slug, [
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
