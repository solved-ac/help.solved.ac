"use client";

import { PostFrontmatter } from "@/utils/post";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import MDXComponents from "./MDXComponents";

const MDXRenderer = (
  props: MDXRemoteSerializeResult<Record<string, unknown>, PostFrontmatter>
) => {
  return (
    <MDXRemote<Record<string, unknown>, PostFrontmatter>
      {...props}
      components={MDXComponents}
    />
  );
};

export default MDXRenderer;
