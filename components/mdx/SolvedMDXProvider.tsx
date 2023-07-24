"use client";

import { MDXProvider } from "@mdx-js/react";
import { Components, MergeComponents, ReactNode } from "@mdx-js/react/lib";
import { Enumerate, Item, Itemize, Paragraph, Typo } from "@solved-ac/ui-react";
import ContentHeading1 from "./ContentHeading1";
import ContentHeading2 from "./ContentHeading2";
import ContentImage from "./ContentImage";

export interface MDXProviderProps {
  components?: Components | MergeComponents | null | undefined;
  disableParentContext?: boolean | null | undefined;
  children?: ReactNode | null | undefined;
}

const components = {
  h1: (props: any) => <ContentHeading1 {...props} />,
  h2: (props: any) => <ContentHeading2 {...props} />,
  h3: (props: any) => <Typo h3 {...props} />,
  h4: (props: any) => <Typo h4 {...props} />,
  h5: (props: any) => <Typo h5 {...props} />,
  h6: (props: any) => <Typo h6 {...props} />,
  ul: (props: any) => <Itemize {...props} />,
  ol: (props: any) => <Enumerate {...props} />,
  li: (props: any) => <Item {...props} />,
  p: (props: any) => <Paragraph {...props} />,
  img: (props: any) => <ContentImage {...props} />,
} as const;

const SolvedMDXProvider = (props: MDXProviderProps) => {
  return <MDXProvider {...props} components={components} />;
};

export default SolvedMDXProvider;
