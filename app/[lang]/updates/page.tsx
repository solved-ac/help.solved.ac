import {
  getAllPostSlugsInDirectory,
  getFrontmatterBySlug,
  POSTS_FOLDER_PATH,
} from "@/utils/post";
import path from "path";
import ClientPage from "./ClientPage";

const Page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = params;

  const perPage = 10;

  const slugs = await getAllPostSlugsInDirectory(
    path.join(POSTS_FOLDER_PATH, lang, "updates"),
    `/${lang}/updates`
  );
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

export default Page;
