"use client";

import useResolvePath from "@/hooks/useResolvePath";
import { Guide, GuideCategory } from "@/types/Guide";
import { isPrefixArray } from "@/utils/array";
import styled from "@emotion/styled";
import { Collapse } from "@solved-ac/ui-react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import guidemap from "./guidemap";

const SubnavigationItemLink = styled(Link)<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0 8px;
  color: ${({ theme, active }) =>
    active ? theme.color.text.primary.main : theme.color.text.secondary.main};
  font-weight: ${({ active }) => (active ? 800 : "normal")};
  user-select: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

interface SubnavigationItemProps {
  item: GuideCategory | Guide;
  path: string[];
}

const SubnavigationItem = (props: SubnavigationItemProps) => {
  const { lang, path } = useResolvePath();
  const active = isPrefixArray(
    props.path,
    path.map((p) => p.key)
  );
  const url = `/${lang}/${props.path.join("/")}`;

  return (
    <li>
      <SubnavigationItemLink href={url} active={active}>
        {props.item.title[lang]}
      </SubnavigationItemLink>
    </li>
  );
};

const SubnavigationTitle = styled.span<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0 8px;
  padding: 16px 0;
  color: ${({ theme, active }) =>
    active ? theme.color.text.primary.main : theme.color.text.secondary.main};
  font-weight: ${({ active }) => (active ? 800 : "normal")};
  user-select: none;
  cursor: pointer;
`;

interface SubnavigationProps {
  item: GuideCategory;
  path: string[];
}

const Subnavigation = (props: SubnavigationProps) => {
  const { lang, path } = useResolvePath();

  const [open, setOpen] = useState(false);
  const active = isPrefixArray(
    props.path,
    path.map((p) => p.key)
  );
  const activeOrOpen = active || open;

  return (
    <li>
      <SubnavigationTitle
        active={activeOrOpen}
        role="button"
        tabIndex={0}
        onClick={() => setOpen((o) => !o)}
      >
        {props.item.title[lang]}
        {activeOrOpen ? <IconChevronUp /> : <IconChevronDown />}
      </SubnavigationTitle>
      <Collapse shown={activeOrOpen}>
        <ul>
          {props.item.guides.map((item) => (
            <SubnavigationItem
              item={item}
              key={item.key}
              path={[...props.path, item.key]}
            />
          ))}
        </ul>
      </Collapse>
    </li>
  );
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        {guidemap.guides.map((item) => (
          <Subnavigation item={item} key={item.key} path={["", item.key]} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
