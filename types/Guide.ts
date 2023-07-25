import { I18n } from "./I18n";

export interface Guide {
  title: I18n;
  key: string;
  type: "guide";
}

export interface GuideCategory {
  title: I18n;
  key: string;
  guides: (Guide | GuideCategory)[];
  type: "category";
}
