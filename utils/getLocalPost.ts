import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import path from "path";

export type Items = {
  [key: string]: string;
};

export function getPostSlugs(dir: string) {
  const directory = join(process.cwd(), `content/${dir}`);
  return fs.readdirSync(directory);
}

export function getPostBySlug(dir: string, slug: string, fields: string[]) {
  const directory = join(process.cwd(), `content/${dir}`);
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(directory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  let items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    let published: boolean = data["published"] as boolean;

    if (published !== true) {
      return undefined;
    }

    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(dir: string, fields: string[] = []) {
  const files = fs.readdirSync(path.join(`content/${dir}`));

  const slugs: string[] = files.map((filename) => filename.replace(".mdx", ""));

  const posts = slugs
    .map((slug) => getPostBySlug(dir, slug, fields))
    // sort posts by index in descending order
    .sort((post1, post2) => (post1.index > post2.index ? -1 : 1));

  return posts;
}
