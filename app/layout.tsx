/* eslint-disable @next/next/no-page-custom-font */
import Navigation from "@/components/navigation/Navigation";
import { getGuidemap } from "@/utils/post";
import Breadcrumbs from "./Breadcrumbs";
import ClientLayout from "./ClientLayout";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const guidemap = await getGuidemap();

  return (
    <>
      {/* TODO: fix language */}
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
          <ClientLayout
            breadcrumbsComponent={<Breadcrumbs guidemap={guidemap} />}
            navigationComponent={<Navigation guidemap={guidemap} />}
          >
            {children}
          </ClientLayout>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
