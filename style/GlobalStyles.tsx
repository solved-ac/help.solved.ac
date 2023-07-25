"use client";

import { Global, css } from "@emotion/react";
import { SolvedGlobalStyles } from "@solved-ac/ui-react";

const GlobalStyles = () => (
  <>
    <SolvedGlobalStyles />
    <Global
      styles={css`
        .katex .hangul_fallback {
          font-family: "Pretendard", "Inter", "Noto Sans JP", -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
            "Apple string Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          font-size: 0.8264em;
        }
        .tabler-icon {
          vertical-align: middle;
          width: 1.2em;
          height: 1.2em;
        }
        .math-display {
          display: block;
          max-width: 100%;
          overflow-x: auto;
        }
      `}
    />
  </>
);

export default GlobalStyles;
