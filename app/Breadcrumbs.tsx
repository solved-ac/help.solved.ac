"use client";

import useResolvePath from "@/hooks/useResolvePath";
import styled from "@emotion/styled";
import { Fragment } from "react";

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

const Breadcrumbs = () => {
  const { lang, path } = useResolvePath();

  return (
    <BreadcrumbContainer>
      {path.map((p, i) => (
        <Fragment key={i}>
          <BreadcrumbEntry>{p.title[lang]}</BreadcrumbEntry>
          {i !== path.length - 1 && <BreadcrumbEntry>/</BreadcrumbEntry>}
        </Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;
