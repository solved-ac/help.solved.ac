"use client";

import { HideOnMobile } from "@/components/device/Mobile";
import GlobalStyles from "@/style/GlobalStyles";
import { helpTheme } from "@/style/theme";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { Container, Space } from "@solved-ac/ui-react";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const RootLayoutContainer = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 210px;
  gap: 32px;
  & > * {
    min-width: 0;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const NavigationContainer = styled(HideOnMobile)`
  position: sticky;
  top: -96px;
  align-self: flex-start;
  max-height: 100vh;
  overflow-y: auto;
`;

interface ClientLayoutProps {
  navigationComponent: React.ReactNode;
  breadcrumbsComponent: React.ReactNode;
}

const ClientLayout = (props: PropsWithChildren<ClientLayoutProps>) => {
  const { children, navigationComponent, breadcrumbsComponent } = props;
  return (
    <ThemeProvider theme={helpTheme}>
      <GlobalStyles />
      <Header navigationComponent={navigationComponent} />
      <Container>
        <RootLayoutContainer>
          <div>
            <Space h={32} />
            <Container topBarPadding />
            {breadcrumbsComponent}
            {children}
          </div>
          <NavigationContainer>
            <Space h={192} />
            {navigationComponent}
            <Space h={32} />
          </NavigationContainer>
        </RootLayoutContainer>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default ClientLayout;
