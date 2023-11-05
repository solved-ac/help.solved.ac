import styled from "@emotion/styled";

interface ClassIconStyleProps {
  completed?: boolean;
  option?: number | string;
}

const ClassIconStyle = styled.img<ClassIconStyleProps>`
  position: relative;
  line-height: inherit;
  width: 60px;
  height: 60px;
  vertical-align: middle;
  opacity: ${(props) => (props.completed ? 1 : 0.5)};
`;

interface Props extends ClassIconStyleProps {
  c: number;
  d: "gold" | "silver" | "none" | null | undefined;
}

const ClassIcon = (props: Props) => {
  const { c: value, d: decoration, completed = true, ...rest } = props;
  const imageDir = "https://static.solved.ac/class/";
  const imageName = value
    ? "c" +
      value +
      (decoration === "gold" ? "g" : decoration === "silver" ? "s" : "")
    : "c0";
  let option: number | string = value;
  if (decoration !== "none" && decoration) option = decoration;
  if (!completed) option = "";
  return (
    <ClassIconStyle
      completed={completed}
      option={option}
      src={`${imageDir}${imageName}.svg`}
      alt={value.toString()}
      {...rest}
    />
  );
};

export default ClassIcon;
