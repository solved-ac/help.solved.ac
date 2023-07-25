"use client";

import { helpTheme } from "@/style/theme";
import { Global, ThemeProvider, css } from "@emotion/react";
import { Container, SolvedGlobalStyles, Space } from "@solved-ac/ui-react";
import SolvedMDXProvider from "../components/mdx/SolvedMDXProvider";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import Header from "./Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={helpTheme}>
        <SolvedGlobalStyles />
        <Global
          styles={css`
            .katex .hangul_fallback {
              font-family: "Pretendard", "Inter", "Noto Sans JP", -apple-system,
                BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
                sans-serif, "Apple string Emoji", "Segoe UI Emoji",
                "Segoe UI Symbol";
              font-size: 0.8264em;
            }
            .tabler-icon {
              vertical-align: middle;
              width: 1.2em;
              height: 1.2em;
            }
          `}
        />
        {/* TODO: fix language */}
        <SolvedMDXProvider>
          <html lang="ko">
            <head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Oxanium:wght@400;700&display=swap"
                rel="stylesheet"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&amp;display=swap"
              />
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
              />
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
                crossOrigin="anonymous"
              />
            </head>
            <body>
              <Header />
              <Container topBarPadding>
                <Space h={32} />
                <Breadcrumbs />
                {children}
              </Container>
              <Footer />
            </body>
          </html>
        </SolvedMDXProvider>
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
