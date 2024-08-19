import ContentHeading1 from "@/components/mdx/ContentHeading1";
import HeadingWithLanguageSelector from "@/components/mdx/HeadingWithLanguageSelector";
import MDXRenderer from "@/components/mdx/MDXRenderer";
import { getAllPostSlugs, getPostBySlug } from "@/utils/post";
import { Metadata } from "next";
import { title } from "process";

interface Params {
  slug: string[];
}

interface Props {
  params: Params;
}

const Page = async ({ params }: Props) => {
  const { slug } = params;

  try {
    const allPosts = await getAllPostSlugs();
    const { meta, serialized } = await getPostBySlug(slug.join("/"));

    const currentSlugWithoutLanguage = slug.slice(1).join("/");
    const slugRegex = new RegExp(`^/([a-z]{2})/${currentSlugWithoutLanguage}$`);
    const postAllLanguages = allPosts
      .filter((post) => post.match(slugRegex))
      .map((post) => ({
        language: slugRegex.exec(post)![1],
        link: post,
      }));

    return (
      <>
        <HeadingWithLanguageSelector
          languages={postAllLanguages}
          current={slug[0]}
        >
          {meta.title}
        </HeadingWithLanguageSelector>
        <MDXRenderer {...serialized} />
      </>
    );
  } catch (e) {
    if (slug.length === 1) {
      if (slug[0] === "ko") {
        return <>오른쪽에서 도움말 항목을 선택해 주세요</>;
      }
      if (slug[0] === "en") {
        return <>Please select a help topic on the right</>;
      }
    }
    console.error(e);
    return <div>404</div>;
  }
};

export default Page;

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.split("/").filter((s) => s !== ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  try {
    const { meta, serialized } = await getPostBySlug(slug.join("/"));
    return {
      title: meta.title,
    };
  } catch (e) {
    return {
      title: "solved.ac Help",
    };
  }
}
