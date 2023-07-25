"use client";

import { ShowOnMobile } from "@/components/device/Mobile";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Container, NavBar, Space } from "@solved-ac/ui-react";
import { IconBook, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { transparentize } from "polished";
import { useState } from "react";
import Navigation from "./Navigation";

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

const Fader = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    transparentize(0.2, theme.color.background.page)};
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 22000;
`;

const TopDrawer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.page};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  z-index: 24000;
`;

const TopDrawerHeader = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
`;

const TopDrawerNavigationContainer = styled.div`
  padding: 0 16px;
  font-size: 1.2em;
`;

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    const html = document.querySelector("html");
    if (html !== null) html.style.overflowY = "hidden";
  };

  const handleClose = () => {
    setOpen(false);
    const html = document.querySelector("html");
    if (html !== null) html.style.overflowY = "auto";
  };

  return (
    <NavBarContainer>
      <NavBar backgroundColor="white">
        <NavBarContents>
          <ShowOnMobile>
            <Button
              circle
              transparent
              onClick={() => (open ? handleClose : handleOpen)()}
            >
              <IconBook color={theme.color.text.primary.main} />
            </Button>
          </ShowOnMobile>
          <Link href="/">
            <Logo />
          </Link>
          <Space w={8} />
          <Version>solved.ac</Version>
          <Space w={8} />
          Help
        </NavBarContents>
      </NavBar>
      <ShowOnMobile>
        <AnimatePresence>
          {open && (
            <Fader
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            >
              <TopDrawer
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
              >
                <Container>
                  <TopDrawerHeader>
                    <Button onClick={handleClose} circle transparent>
                      <IconX color={theme.color.text.primary.main} />
                    </Button>
                  </TopDrawerHeader>
                  <TopDrawerNavigationContainer>
                    <Navigation />
                  </TopDrawerNavigationContainer>
                  <Space h={32} />
                </Container>
              </TopDrawer>
            </Fader>
          )}
        </AnimatePresence>
      </ShowOnMobile>
    </NavBarContainer>
  );
};

export default Header;
