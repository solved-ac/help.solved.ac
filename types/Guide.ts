export interface Guide {
  title: string | null;
  index: number;
  date: Date | null;
  key: string;
  type: "guide";
}

export interface GuideCategory {
  title: string | null;
  index: number;
  date: Date | null;
  key: string;
  guides: (Guide | GuideCategory)[];
  type: "category";
}
