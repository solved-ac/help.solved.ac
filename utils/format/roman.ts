const ROMAN_KEYS = [
  "",
  "C",
  "CC",
  "CCC",
  "CD",
  "D",
  "DC",
  "DCC",
  "DCCC",
  "CM",
  "",
  "X",
  "XX",
  "XXX",
  "XL",
  "L",
  "LX",
  "LXX",
  "LXXX",
  "XC",
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
];

export const roman = (value: number): string => {
  if (isNaN(value)) return "NaN";
  const digits = String(+value).split("");

  let roman = "";
  let i = 3;
  while (i--) roman = (ROMAN_KEYS[+(digits.pop() ?? 0) + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
};
