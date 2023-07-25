import { levelColor } from "@/utils/color/tier";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const MasterGradientText = styled.span`
  background-color: #b491ff;
  background-image: linear-gradient(0deg, #ff7ca8, #b491ff, #7cf9ff);
  background-size: 80%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

interface Props {
  t: number | "sprout";
}

const LevelColorTextComponent = (props: PropsWithChildren<Props>) => {
  const { t, children } = props;
  if (t === 31) return <MasterGradientText>{children}</MasterGradientText>;

  const color = levelColor(t);
  return <span style={{ color: color }}>{children}</span>;
};

const LevelColorText = (props: PropsWithChildren<Props>) => {
  return <LevelColorTextComponent {...props} />;
};

export default LevelColorText;
