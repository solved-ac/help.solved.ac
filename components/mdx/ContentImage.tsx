import styled from "@emotion/styled";
import { usePathname } from "next/navigation";

const ContentImageComponent = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.styles.shadow(undefined, "16px")};
`;

const ContentImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { src, ...rest } = props;
  const pathname = usePathname();
  const resolvedSrc = src?.startsWith(".")
    ? `${pathname}/${src.slice(1)}`
    : src;
  return <ContentImageComponent src={resolvedSrc} {...rest} />;
};

export default ContentImage;
