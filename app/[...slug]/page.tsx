import ContentHeading1 from "@/components/mdx/ContentHeading1";
import MDXRenderer from "@/components/mdx/MDXRenderer";
import { getAllPostSlugs, getPostBySlug } from "@/utils/post";
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
    const { meta, serialized } = await getPostBySlug(slug.join("/"));
    return (
      <>
        <ContentHeading1>{meta.title}</ContentHeading1>
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

export async function generateMetadata({ params }: Props) {
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
