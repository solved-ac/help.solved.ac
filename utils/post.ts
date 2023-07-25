import { Guide, GuideCategory } from "@/types/Guide";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

// https://github.com/vercel/next.js/discussions/50897

export const POSTS_FOLDER_PATH = path.join(process.cwd(), "posts");

export const readPostFileContent = async (slug: string) => {
  const filenameCandidates = [
    `${POSTS_FOLDER_PATH}/${slug}.mdx`,
    `${POSTS_FOLDER_PATH}/${slug}/index.mdx`,
  ];

  const filename = filenameCandidates.find((filename) =>
    fs.existsSync(filename)
  );

  if (!filename)
    throw new Error(`No such file: ${JSON.stringify(filenameCandidates)}`);

  const fileContent = fs.readFileSync(filename, {
    encoding: "utf-8",
  });
  return fileContent;
};

export const getPostBySlug = async (slug: string) => {
  const fileSlug = slug.replace(/\.mdx$/, "");
  const fileContent = await readPostFileContent(fileSlug);
  const serialized = await serialize(fileContent, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkMath, remarkGfm],
      rehypePlugins: [rehypeKatex],
    },
  });
  const { frontmatter } = serialized;

  return {
    meta: { title: "solved.ac Help", index: 0, ...frontmatter, slug: fileSlug },
    serialized,
  };
};

export const getFrontmatterBySlug = async (slug: string) => {
  try {
    const post = await getPostBySlug(slug);
    return post.meta;
  } catch (e) {
    return {
      slug,
      title: null,
      index: 0,
    };
  }
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
    .map((file) => file.replace(/^index$/, ""))
    .map((file) => `${replacedPrefix}/${file}`)
    .map((file) => file.replace(/\/$/, ""));

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
  return getAllPostSlugsInDirectory(POSTS_FOLDER_PATH, "");
};

export const getAllPosts = async () => {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts;
};

export const getGuidemapInDirectory = async (
  path: string,
  prefix: string
): Promise<Guide | GuideCategory> => {
  const replacedPrefix = prefix.replace(/\/$/, "");

  // first extract .mdx files in the directory
  const files = await fs.promises.readdir(path);
  const slugs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .map((file) => file.replace(/^index$/, ""))
    .map((file) => `${replacedPrefix}/${file}`)
    .map((file) => file.replace(/\/$/, ""));

  const frontmatters = await Promise.all(
    slugs.map(async (slug) => getFrontmatterBySlug(slug))
  );
  const guides = frontmatters.map((fm) => ({
    key: fm.slug,
    title: fm.title,
    index: fm.index ?? 0,
    type: "guide" as const,
  }));

  const indexGuide = guides.find((guide) => guide.key === prefix);
  const nonIndexGuides = guides.filter((guide) => guide.key !== prefix);

  // then extract subdirectories
  const subdirectories = files.filter((file) =>
    fs.lstatSync(`${path}/${file}`).isDirectory()
  );
  const subdirectoryGuides = await Promise.all(
    subdirectories.map((subdirectory) =>
      getGuidemapInDirectory(
        `${path}/${subdirectory}`,
        `${replacedPrefix}/${subdirectory}`
      )
    )
  );

  // if only index.mdx exists, return it
  if (
    indexGuide &&
    nonIndexGuides.length === 0 &&
    subdirectoryGuides.length === 0
  ) {
    return indexGuide;
  }

  const sortedGuides = [...nonIndexGuides, ...subdirectoryGuides].sort(
    (a, b) => {
      if (a.index !== b.index) return a.index - b.index;
      return (a.title || a.key).localeCompare(b.title || b.key);
    }
  );

  return {
    key: prefix,
    title: indexGuide?.title ?? null,
    index: indexGuide?.index ?? 0,
    guides: sortedGuides,
    type: "category" as const,
  };
};

export const getGuidemap = async (): Promise<Guide | GuideCategory> => {
  return getGuidemapInDirectory(POSTS_FOLDER_PATH, "");
};
