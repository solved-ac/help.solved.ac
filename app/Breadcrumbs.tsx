"use client";

import useLanguage from "@/hooks/useLanguage";
import { Guide, GuideCategory } from "@/types/Guide";
import { isPrefixPath } from "@/utils/path";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";

const BreadcrumbContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${({ theme }) => theme.color.text.secondary.main};
`;

const BreadcrumbEntry = styled.li`
  display: inline-block;
  margin-right: 8px;
`;

interface Props {
  guidemap: GuideCategory;
}

const Breadcrumbs = (props: Props) => {
  const { guidemap } = props;
  const lang = useLanguage();
  const path = usePathname();

  const breadcrumbs = useMemo(() => {
    const ret: (Guide | GuideCategory)[] = [];
    const dfs = (item: Guide | GuideCategory) => {
      const isCurrent = isPrefixPath(item.key, path);
      if (!isCurrent) return;
      ret.push(item);
      if (item.type === "guide") return;
      for (const guide of item.guides) {
        dfs(guide);
      }
    };
    dfs(guidemap);
    return ret.filter((x) => x.title);
  }, [guidemap, path]);

  return (
    <BreadcrumbContainer>
      {breadcrumbs.map((p, i) => (
        <Fragment key={i}>
          <BreadcrumbEntry>{p.title}</BreadcrumbEntry>
          {i !== breadcrumbs.length - 1 && <BreadcrumbEntry>/</BreadcrumbEntry>}
        </Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;
