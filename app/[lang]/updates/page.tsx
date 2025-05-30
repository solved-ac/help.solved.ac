import { getAllPostSlugs, getFrontmatterBySlug } from "@/utils/post";
import ClientPage from "./ClientPage";
import { generateUpdatesList } from "@/scripts/generate_updates_list";

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

export async function generateStaticParams() {
  // XXX: Workaround to achieve similar behavior to `instrumentation`
  // without using Next 15, since it will break the current
  // implementation of MDX parsing.
  // https://nextjs.org/docs/app/guides/instrumentation
  await generateUpdatesList();

  const langs = ["en", "ko"];
  return langs.map((lang) => ({ lang }));
}

export default Page;
