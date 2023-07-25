"use client";

import { MDXProvider } from "@mdx-js/react";
import { Components, MergeComponents, ReactNode } from "@mdx-js/react/lib";
import MDXComponents from "./MDXComponents";

export interface MDXProviderProps {
  components?: Components | MergeComponents | null | undefined;
  disableParentContext?: boolean | null | undefined;
  children?: ReactNode | null | undefined;
}

const SolvedMDXProvider = (props: MDXProviderProps) => {
  return <MDXProvider {...props} components={MDXComponents} />;
};

export default SolvedMDXProvider;
