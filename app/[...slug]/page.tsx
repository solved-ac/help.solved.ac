import ContentHeading1 from "@/components/mdx/ContentHeading1";
import MDXRenderer from "@/components/mdx/MDXRenderer";
import { getAllPostSlugs, getPostBySlug } from "@/utils/post";

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
