import { Language, isLanguage } from "@/types/I18n";
import { usePathname } from "next/navigation";

const useLanguage = (): Language => {
  const path = usePathname();
  const splitPathRaw = path.split("/").filter((key) => key !== "");
  if (splitPathRaw.length === 0) {
    return "ko";
  }
  const [language] = splitPathRaw;
  if (!isLanguage(language)) {
    return "ko";
  }
  return language;
};

export default useLanguage;
