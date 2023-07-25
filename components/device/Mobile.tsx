import styled from "@emotion/styled";

export const HideOnMobile = styled.span`
  @media (max-width: 720px) {
    display: none;
  }
`;

export const ShowOnMobile = styled.span`
  display: none;
  @media (max-width: 720px) {
    display: block;
  }
`;
