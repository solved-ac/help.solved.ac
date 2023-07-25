export interface Guide {
  title: string | null;
  key: string;
  type: "guide";
}

export interface GuideCategory {
  title: string | null;
  key: string;
  guides: (Guide | GuideCategory)[];
  type: "category";
}
