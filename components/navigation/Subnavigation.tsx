"use client";

import { Guide, GuideCategory } from "@/types/Guide";
import { isPrefixPath } from "@/utils/path";
import styled from "@emotion/styled";
import { Collapse } from "@solved-ac/ui-react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SubnavigationItem from "./SubnavigationItem";

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
  item: Guide | GuideCategory;
  path: string;
}

const Subnavigation = (props: SubnavigationProps) => {
  const path = usePathname();

  const [open, setOpen] = useState(false);
  const active = isPrefixPath(props.path, path);
  const activeOrOpen = active || open;

  if (props.item.type === "guide") {
    return <SubnavigationItem item={props.item} path={props.item.key} />;
  }

  return (
    <li>
      <SubnavigationTitle
        active={activeOrOpen}
        role="button"
        tabIndex={0}
        onClick={() => setOpen((o) => !o)}
      >
        {props.item.title}
        {activeOrOpen ? <IconChevronUp /> : <IconChevronDown />}
      </SubnavigationTitle>
      <Collapse shown={activeOrOpen}>
        <ul>
          {props.item.guides.map((item) =>
            item.type === "guide" ? (
              <SubnavigationItem item={item} key={item.key} path={item.key} />
            ) : (
              <Subnavigation item={item} key={item.key} path={item.key} />
            )
          )}
        </ul>
      </Collapse>
    </li>
  );
};

export default Subnavigation;
