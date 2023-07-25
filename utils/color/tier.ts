export const levelColor = (value: number | "sprout"): string => {
  if (value === "sprout") return "#96cc00";

  // bronze
  if (value == 1) return "#9d4900";
  if (value == 2) return "#a54f00";
  if (value == 3) return "#ad5600";
  if (value == 4) return "#b55d0a";
  if (value == 5) return "#c67739";
  // silver
  if (value == 6) return "#38546e";
  if (value == 7) return "#3d5a74";
  if (value == 8) return "#435f7a";
  if (value == 9) return "#496580";
  if (value == 10) return "#4e6a86";
  // gold
  if (value == 11) return "#d28500";
  if (value == 12) return "#df8f00";
  if (value == 13) return "#ec9a00";
  if (value == 14) return "#f9a518";
  if (value == 15) return "#ffb028";
  // platinum
  if (value == 16) return "#00c78b";
  if (value == 17) return "#00d497";
  if (value == 18) return "#27e2a4";
  if (value == 19) return "#3ef0b1";
  if (value == 20) return "#51fdbd";
  // diamond
  if (value == 21) return "#009ee5";
  if (value == 22) return "#00a9f0";
  if (value == 23) return "#00b4fc";
  if (value == 24) return "#2bbfff";
  if (value == 25) return "#41caff";
  // ruby
  if (value == 26) return "#e0004c";
  if (value == 27) return "#ea0053";
  if (value == 28) return "#f5005a";
  if (value == 29) return "#ff0062";
  if (value == 30) return "#ff3071";
  // master
  if (value == 31) return "#b300e0";
  // else
  return "#2d2d2d";
};
