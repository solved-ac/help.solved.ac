import { isPrefixArray } from "./array";

export const isPrefixPath = (prefix: string, path: string) =>
  isPrefixArray(
    prefix.split("/").filter((p) => p !== ""),
    path.split("/").filter((p) => p !== "")
  );
