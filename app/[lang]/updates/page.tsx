import {
  getAllPostSlugs,
  getAllPostSlugsInDirectory,
  getFrontmatterBySlug,
  POSTS_FOLDER_PATH,
} from "@/utils/post";
import path from "path";
import ClientPage from "./ClientPage";

const Page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = params;

  const perPage = 10;

  const allPosts = await getAllPostSlugs();
  const UPDATES_SUBDIR_REGEX = new RegExp(`^/${lang}/updates(/.*)?$`);
  const slugs = allPosts.filter((slug) => UPDATES_SUBDIR_REGEX.test(slug));
  const posts = await Promise.all(
    slugs
      .filter((x) => x !== `/${lang}/updates`)
      .map((slug) => getFrontmatterBySlug(slug))
  );
  const current = await getFrontmatterBySlug(`/${lang}/updates`);
  const sortedPosts = posts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });

  return (
    <ClientPage
      current={current}
      lang={lang}
      posts={sortedPosts}
      total={Math.ceil(posts.length / perPage)}
    />
  );
};

export function generateStaticParams() {
  const langs = ["en", "ko"];
  return langs.map((lang) => ({ lang }));
}

export default Page;
