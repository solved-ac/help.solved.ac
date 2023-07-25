import guidemap from "@/app/guidemap";
import { Guide, GuideCategory } from "@/types/Guide";
import { Language, isLanguage } from "@/types/I18n";
import { usePathname } from "next/navigation";

const dfs = (
  path: string[],
  subtree: (Guide | GuideCategory)[]
): (Guide | GuideCategory)[] => {
  const [head, ...tail] = path;
  const current = subtree.find((guide) => guide.key === head);
  if (current === undefined) {
    return subtree;
  }
  if (tail.length === 0) {
    return subtree;
  }
  if (current.type === "category") {
    return [current, ...dfs(tail, current.guides)];
  }
  return subtree;
};

interface ResolvedPath {
  lang: Language;
  path: (Guide | GuideCategory)[];
}

const useResolvePath = (): ResolvedPath => {
  const path = usePathname();
  const splitPathRaw = path.split("/").filter((key) => key !== "");
  if (splitPathRaw.length === 0) {
    return { lang: "ko", path: [guidemap] };
  }
  const [language, ...splitPath] = splitPathRaw;
  const keys = ["", ...splitPath.filter((key) => key !== "")];
  if (!isLanguage(language)) {
    return { lang: "ko", path: [guidemap] };
  }
  return { lang: language, path: dfs(keys, [guidemap]) };
};

export default useResolvePath;
