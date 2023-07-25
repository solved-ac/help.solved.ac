export interface Guide {
  title: string | null;
  index: number;
  key: string;
  type: "guide";
}

export interface GuideCategory {
  title: string | null;
  index: number;
  key: string;
  guides: (Guide | GuideCategory)[];
  type: "category";
}
