import { Language } from "@/types/I18n";

interface StreakColorGroup {
  label: Record<Language, string>;
  probability: string;
  colors: StreakColor[];
}

interface StreakColor {
  name: string;
  values: string[];
}

const streakColorChipData: StreakColorGroup[] = [
  {
    label: { ko: "레어", en: "Rare" },
    probability: "90%",
    colors: [
      {
        name: "red",
        values: ["#dddfe0", "#FBB4B4", "#EA8686", "#DA5858", "#C92A2A"],
      },
      {
        name: "orange",
        values: ["#dddfe0", "#FBC694", "#F09C68", "#E4723B", "#D9480F"],
      },
      {
        name: "yellow",
        values: ["#dddfe0", "#F9DF8C", "#F3BC5D", "#EC9A2F", "#E67700"],
      },
      {
        name: "lime",
        values: ["#dddfe0", "#C7E996", "#A3CD68", "#80B03B", "#5C940D"],
      },
      {
        name: "green",
        values: ["#dddfe0", "#A6E4B1", "#7DC68B", "#54A864", "#2B8A3E"],
      },
      {
        name: "teal",
        values: ["#dddfe0", "#8EE1CA", "#61C0A5", "#35A080", "#087F5B"],
      },
      {
        name: "cyan",
        values: ["#dddfe0", "#8FD9E5", "#63B7C5", "#3794A5", "#0B7285"],
      },
      {
        name: "blue",
        values: ["#dddfe0", "#97CAF5", "#6DA8DC", "#4286C4", "#1864AB"],
      },
      {
        name: "indigo",
        values: ["#dddfe0", "#ACBBFA", "#8597E9", "#5D73D8", "#364FC7"],
      },
      {
        name: "violet",
        values: ["#dddfe0", "#BFADF8", "#9F88E7", "#7F62D5", "#5F3DC4"],
      },
      {
        name: "purple",
        values: ["#dddfe0", "#E2ADF1", "#C383D5", "#A558B8", "#862E9C"],
      },
      {
        name: "wine",
        values: ["#dddfe0", "#F4B0C8", "#DA7F9F", "#C04F76", "#A61E4D"],
      },
    ],
  },
  {
    label: { ko: "에픽", en: "Epic" },
    probability: "9%",
    colors: [
      {
        name: "bronze",
        values: ["#dddfe0", "#DDBEA0", "#CD9B6B", "#BD7935", "#AD5600"],
      },
      {
        name: "silver",
        values: ["#dddfe0", "#B6C1CB", "#90A0B0", "#698095", "#435F7A"],
      },
      {
        name: "gold",
        values: ["#dddfe0", "#F3D6A0", "#F1C26B", "#EEAE35", "#D38200"],
      },
      {
        name: "platinum",
        values: ["#dddfe0", "#ACF0DA", "#80EBC8", "#52DBA9", "#23C188"],
      },
      {
        name: "diamond",
        values: ["#dddfe0", "#9EDFFA", "#69D1FB", "#35C1ED", "#00A5D8"],
      },
      {
        name: "ruby",
        values: ["#dddfe0", "#FA9FC2", "#FC6AA2", "#FD3582", "#DB0059"],
      },
      {
        name: "solvedac",
        values: ["#dddfe0", "#A7E9B4", "#77E08B", "#46CC5C", "#15AF2F"],
      },
      {
        name: "baekjoon",
        values: ["#dddfe0", "#8CD2EA", "#5FB4DE", "#3197D3", "#0479C7"],
      },
    ],
  },
  {
    label: { ko: "레전더리", en: "Legendary" },
    probability: "1%",
    colors: [
      {
        name: "master",
        values: ["#dddfe0", "#7DF7FF", "#95CAFF", "#C38DEE", "#FD7DAB"],
      },
      {
        name: "hanbyeol",
        values: ["#dddfe0", "#FFD459", "#FFAA69", "#FF7C79", "#FF5F84"],
      },
    ],
  },
];

export default streakColorChipData;
