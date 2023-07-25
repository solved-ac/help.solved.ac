import { roman } from "./roman";

export const formatTierName = (
  tier: number,
  votable?: boolean,
  sprout?: boolean
): string => {
  if (sprout) return "Sprout";
  if (tier === 0) return votable ? "Unrated" : "Not ratable";
  if (tier < 6) return `Bronze ${roman(5 - ((tier - 1) % 5))}`;
  if (tier < 11) return `Silver ${roman(5 - ((tier - 1) % 5))}`;
  if (tier < 16) return `Gold ${roman(5 - ((tier - 1) % 5))}`;
  if (tier < 21) return `Platinum ${roman(5 - ((tier - 1) % 5))}`;
  if (tier < 26) return `Diamond ${roman(5 - ((tier - 1) % 5))}`;
  if (tier < 31) return `Ruby ${roman(5 - ((tier - 1) % 5))}`;
  return "Master";
};
