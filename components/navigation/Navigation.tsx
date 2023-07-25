"use client";

import useLanguage from "@/hooks/useLanguage";
import { Guide, GuideCategory } from "@/types/Guide";
import Subnavigation from "./Subnavigation";

interface Props {
  guidemap: Guide | GuideCategory;
}

const Navigation = (props: Props) => {
  const lang = useLanguage();
  const { guidemap } = props;

  if (guidemap.type !== "category") return null;

  const languageGuidemap = guidemap.guides.find((g) => g.key === `/${lang}`);

  if (!languageGuidemap) return null;
  if (languageGuidemap.type !== "category") return null;

  return (
    <nav>
      <ul>
        {languageGuidemap.guides.map((item) => (
          <Subnavigation item={item} key={item.key} path={item.key} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
