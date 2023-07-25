"use client";

import styled from "@emotion/styled";
import { Footer as AcFooter, Container, Space } from "@solved-ac/ui-react";
import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandTwitter,
} from "@tabler/icons-react";

export const FooterSiteInfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`;

export const FooterSnsIcon = styled.a`
  font-size: 1.5em;
`;

export const FooterSiteTitle = styled.span`
  display: block;
  font-size: 1.2em;
`;

const Footer = () => {
  return (
    <AcFooter>
      <Container>
        <Space h={16} />
        <FooterSiteInfoRow>
          <FooterSiteTitle>
            <b>solved.ac</b> Help
          </FooterSiteTitle>{" "}
          <div style={{ flex: "1 0 0" }} />
          <FooterSnsIcon
            href="https://twitter.com/solved_ac"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandTwitter />
          </FooterSnsIcon>
          <FooterSnsIcon
            href="https://facebook.com/solvedac"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandFacebook />
          </FooterSnsIcon>
          <FooterSnsIcon
            href="https://github.com/solved-ac"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandGithub />
          </FooterSnsIcon>
        </FooterSiteInfoRow>
        © 2019 - {new Date().getFullYear()}.
        <Space h={64} />
      </Container>
    </AcFooter>
  );
};

export default Footer;
