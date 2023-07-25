import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

// https://github.com/vercel/next.js/discussions/50897

export const POSTS_FOLDER_PATH = path.join(process.cwd(), "posts");

export const readPostFileContent = async (slug: string) => {
  const fileContent = fs.readFileSync(`${POSTS_FOLDER_PATH}/${slug}.mdx`, {
    encoding: "utf-8",
  });
  return fileContent;
};

export const getPostBySlug = async (slug: string) => {
  const fileSlug = slug.replace(/\.mdx$/, "");
  const fileContent = await readPostFileContent(fileSlug);
  const serialized = await serialize(fileContent, {
    parseFrontmatter: true,
  });
  const { frontmatter } = serialized;

  return {
    meta: { ...frontmatter, slug: fileSlug },
    serialized,
  };
};

export const getAllPostSlugsInDirectory = async (
  path: string,
  prefix: string
): Promise<string[]> => {
  const replacedPrefix = prefix.replace(/\/$/, "");

  // first extract .mdx files in the directory
  const files = await fs.promises.readdir(path);
  const slugs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .map((file) => `${replacedPrefix}/${file}`);

  // then extract subdirectories
  const subdirectories = files.filter((file) =>
    fs.lstatSync(`${path}/${file}`).isDirectory()
  );
  const subdirectorySlugs = await Promise.all(
    subdirectories.map((subdirectory) =>
      getAllPostSlugsInDirectory(
        `${path}/${subdirectory}`,
        `${replacedPrefix}/${subdirectory}`
      )
    )
  );

  return [
    ...slugs,
    ...subdirectorySlugs.reduce((acc, cur) => [...acc, ...cur], []),
  ];
};

export const getAllPostSlugs = async (): Promise<string[]> => {
  return getAllPostSlugsInDirectory(POSTS_FOLDER_PATH, "/posts");
};
