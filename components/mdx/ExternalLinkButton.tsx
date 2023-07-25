"use client";

import styled from "@emotion/styled";
import { Button, ButtonProps } from "@solved-ac/ui-react";
import { IconExternalLink } from "@tabler/icons-react";
import { PropsWithChildren } from "react";

const ExternalLinkButtonContainer = styled(Button)`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0 8px;
  & p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const ExternalLinkButton = ({
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ExternalLinkButtonContainer as="a" {...rest}>
      {children} <IconExternalLink />
    </ExternalLinkButtonContainer>
  );
};

export default ExternalLinkButton;
