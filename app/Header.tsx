"use client";

import styled from "@emotion/styled";
import { NavBar, Space } from "@solved-ac/ui-react";
import Link from "next/link";

const NavBarContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  user-select: none;
  z-index: 10000;
  word-break: keep-all;
  overflow-x: auto;
  overflow-y: hidden;
`;

const NavBarContents = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 72px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 10000;
`;

const Logo = styled.div`
  background: url("https://static.solved.ac/logo.svg");
  width: 32px;
  height: 32px;
`;

const Version = styled.a`
  font-weight: bold;
  text-decoration: none;
  @media (max-width: 320px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <NavBarContainer>
      <NavBar backgroundColor="white">
        <NavBarContents>
          <Link href="/">
            <Logo />
          </Link>
          <Space w={8} />
          <Version>solved.ac</Version>
          <Space w={8} />
          Help
        </NavBarContents>
      </NavBar>
    </NavBarContainer>
  );
};

export default Header;
