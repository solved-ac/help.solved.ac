import { getAllPostSlugs, getFrontmatterBySlug } from "../utils/post";
import fs from "fs";
import path from "path";

export const POSTS_FOLDER_PATH = path.join(process.cwd(), "public");

const updatePostsList = async (lang: string) => {
  const allPosts = await getAllPostSlugs();
  const UPDATES_SUBDIR_REGEX = new RegExp(`^/${lang}/updates(/.*)?$`);
  const slugs = allPosts.filter((slug) => UPDATES_SUBDIR_REGEX.test(slug));
  const posts = await Promise.all(
    slugs
      .filter((x) => x !== `/${lang}/updates`)
      .map((slug) => getFrontmatterBySlug(slug))
  );
  const sortedPosts = posts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
  return sortedPosts;
};

export const generateUpdatesList = async () => {
  const langs = ["en", "ko"];
  const updatesList = await Promise.all(
    langs.map((lang) => updatePostsList(lang))
  );
  const updates = langs.map((lang, index) => ({
    lang,
    posts: updatesList[index],
  }));
  const updatesJson = JSON.stringify(updates, null, 2);
  const updatesFilePath = path.join(POSTS_FOLDER_PATH, "updates.json");
  await fs.promises.writeFile(updatesFilePath, updatesJson, "utf-8");
  console.log(`Updates list generated at ${updatesFilePath}`);
};
