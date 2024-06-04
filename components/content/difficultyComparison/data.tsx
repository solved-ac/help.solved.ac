import { ReactNode } from "react";

interface SectionTitle {
  title: ReactNode;
  type: "section-title";
}

interface DifficultyComparisonData {
  title: ReactNode;
  start: number;
  end: number;
  type: "data";
}

const difficultyComparisonData: (SectionTitle | DifficultyComparisonData)[] = [
  {
    title: "프로그래머스",
    type: "section-title",
  },
  {
    title: "Lv. 0",
    start: 1,
    end: 4,
    type: "data",
  },
  {
    title: "Lv. 1",
    start: 1,
    end: 7,
    type: "data",
  },
  {
    title: "Lv. 2",
    start: 6,
    end: 12,
    type: "data",
  },
  {
    title: "Lv. 3",
    start: 9,
    end: 15,
    type: "data",
  },
  {
    title: "Lv. 4",
    start: 12,
    end: 16,
    type: "data",
  },
  {
    title: "Lv. 5",
    start: 14,
    end: 19,
    type: "data",
  },
  {
    title: "LeetCode",
    type: "section-title",
  },
  {
    title: "Easy",
    start: 1,
    end: 7,
    type: "data",
  },
  {
    title: "Medium",
    start: 6,
    end: 13,
    type: "data",
  },
  {
    title: "Hard",
    start: 10,
    end: 18,
    type: "data",
  },
  {
    title: "Codeforces",
    type: "section-title",
  },
  {
    title: "Div.2 A",
    start: 1,
    end: 8,
    type: "data",
  },
  {
    title: "Div.2 B",
    start: 7,
    end: 14,
    type: "data",
  },
  {
    title: "Div.2 C/D",
    start: 13,
    end: 18,
    type: "data",
  },
  {
    title: "Div.1 A",
    start: 13,
    end: 18,
    type: "data",
  },
  {
    title: "Div.1 B",
    start: 16,
    end: 21,
    type: "data",
  },
  {
    title: "Div.1 C",
    start: 19,
    end: 24,
    type: "data",
  },
  {
    title: "Div.1 D",
    start: 22,
    end: 30,
    type: "data",
  },
];

export default difficultyComparisonData;
