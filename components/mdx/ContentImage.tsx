import styled from "@emotion/styled";

const ContentImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.styles.shadow(undefined, "16px")};
`;

export default ContentImage;
