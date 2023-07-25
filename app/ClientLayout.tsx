"use client";

import { HideOnMobile } from "@/components/device/Mobile";
import GlobalStyles from "@/style/GlobalStyles";
import { helpTheme } from "@/style/theme";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { Container, Footer, Space } from "@solved-ac/ui-react";
import { PropsWithChildren } from "react";
import Header from "./Header";

interface ClientLayoutProps {
  navigationComponent: React.ReactNode;
  breadcrumbsComponent: React.ReactNode;
}

const RootLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 210px;
  gap: 32px;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ClientLayout = (props: PropsWithChildren<ClientLayoutProps>) => {
  const { children, navigationComponent, breadcrumbsComponent } = props;
  return (
    <ThemeProvider theme={helpTheme}>
      <GlobalStyles />
      <Header navigationComponent={navigationComponent} />
      <Container topBarPadding>
        <Space h={32} />
        <RootLayoutContainer>
          <div>
            {breadcrumbsComponent}
            {children}
          </div>
          <HideOnMobile>
            <Space h={108} />
            {navigationComponent}
            <Space h={32} />
          </HideOnMobile>
        </RootLayoutContainer>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default ClientLayout;
