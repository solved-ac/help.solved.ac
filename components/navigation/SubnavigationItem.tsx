"use client";

import { Guide, GuideCategory } from "@/types/Guide";
import { isPrefixPath } from "@/utils/path";
import styled from "@emotion/styled";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  path: string;
}

const SubnavigationItem = (props: SubnavigationItemProps) => {
  const { item } = props;
  const path = usePathname();
  const active = isPrefixPath(props.path, path);

  return (
    <li>
      <SubnavigationItemLink href={item.key} active={active}>
        {item.title}
      </SubnavigationItemLink>
    </li>
  );
};

export default SubnavigationItem;
