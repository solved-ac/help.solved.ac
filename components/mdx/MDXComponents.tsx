"use client";

import {
  Cell,
  Divider,
  Enumerate,
  Item,
  Itemize,
  Paragraph,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typo,
} from "@solved-ac/ui-react";
import DifficultyComparison from "../content/difficultyComparison/DifficultyComparison";
import CLISSchedule2024 from "../content/updates/240824/CLISSchedule2024";
import ClassIcon from "./ClassIcon";
import ContentHeading1 from "./ContentHeading1";
import ContentHeading2 from "./ContentHeading2";
import ContentImage from "./ContentImage";
import ExternalLinkButton from "./ExternalLinkButton";
import LevelColorText from "./LevelColorText";
import Tier from "./Tier";
import WarningIcon from "./WarningIcon";

const MDXComponents = {
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
  table: (props: any) => (
    <TableContainer
      style={{
        wordBreak: "keep-all",
      }}
    >
      <Table {...props} />
    </TableContainer>
  ),
  tr: (props: any) => <Row {...props} />,
  td: (props: any) => (
    <Cell
      style={{
        verticalAlign: "middle",
      }}
      {...props}
    />
  ),
  th: (props: any) => (
    <Cell
      header
      style={{
        verticalAlign: "middle",
      }}
      {...props}
    />
  ),
  thead: (props: any) => <TableHead {...props} />,
  tbody: (props: any) => <TableBody {...props} />,
  hr: (props: any) => <Divider {...props} />,
  ExternalLink: ExternalLinkButton,
  Tier,
  WarningIcon,
  ClassIcon,
  LevelColorText,
  Sprout: (props: any) => <LevelColorText t="sprout" {...props} />,
  Unrated: (props: any) => <LevelColorText t={0} {...props} />,
  Bronze: (props: any) => <LevelColorText t={3} {...props} />,
  Silver: (props: any) => <LevelColorText t={8} {...props} />,
  Gold: (props: any) => <LevelColorText t={13} {...props} />,
  Platinum: (props: any) => <LevelColorText t={18} {...props} />,
  Diamond: (props: any) => <LevelColorText t={23} {...props} />,
  Ruby: (props: any) => <LevelColorText t={28} {...props} />,
  Master: (props: any) => <LevelColorText t={31} {...props} />,

  // Content-specific components
  DifficultyComparison: () => <DifficultyComparison />,
  CLISSchedule2024: () => <CLISSchedule2024 />,
} as const;

export default MDXComponents;
