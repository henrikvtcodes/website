import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import path from "path";

const projectDirectory = join(process.cwd(), "content/projects");

export function getPostSlugs(dir:string) {
  const directory = join(process.cwd(),`content/${dir}`);
  return fs.readdirSync(directory);
}

export function getPostBySlug(dir:string, slug: string, fields: string[]) {
  const directory = join(process.cwd(), `content/${dir}`);
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(directory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
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

export function getAllPosts(dir:string,fields: string[] = []) {
  const files = fs.readdirSync(path.join(`content/${dir}`));

  const slugs:string[] = files.map((filename) => (
    filename.replace('.mdx','')
  ));

  const posts = slugs
    .map((slug) => getPostBySlug(dir, slug, fields))
    // sort posts by index in descending order
    .sort((post1, post2) => (post1.index > post2.index ? -1 : 1));
  return posts;
}
