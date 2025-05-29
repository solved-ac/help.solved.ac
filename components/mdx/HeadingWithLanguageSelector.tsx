"use client";

import { PostFrontmatter } from "@/utils/post";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Typo } from "@solved-ac/ui-react";
import { IconCalendar, IconMessageLanguage } from "@tabler/icons-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface Language {
  language: string;
  link: string;
}

interface Props {
  meta: PostFrontmatter;
  current: string;
  languages: Language[];
}

const LANGUAGE_DISPLAY: Record<string, string> = {
  en: "English",
  ko: "한국어",
};

const ContentHeading1Background = styled.div`
  padding-top: 64px;
  border-bottom: ${({ theme }) => theme.styles.border()};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const ContentTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const LanguagesRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const LanguageLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid;
`;

const HeadingWithLanguageSelector = ({
  meta,
  languages,
  current,
}: PropsWithChildren<Props>) => {
  const theme = useTheme();
  const { title, date } = meta;

  return (
    <ContentHeading1Background>
      <ContentTitleContainer>
        <Typo h1 no-margin>
          {title}
        </Typo>
        {date && (
          <Typo
            description
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <IconCalendar />{" "}
            {date.toLocaleDateString(current, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typo>
        )}
      </ContentTitleContainer>
      <div style={{ flexGrow: 1 }} />
      {languages.length > 1 && (
        <LanguagesRow>
          <IconMessageLanguage />
          {languages.map(({ language, link }) => (
            <LanguageLink
              key={language}
              href={link}
              style={{
                color:
                  language === current
                    ? theme.color.text.primary.main
                    : theme.color.text.secondary.main,
                borderBottomColor:
                  language === current
                    ? theme.color.text.primary.main
                    : "transparent",
              }}
            >
              {LANGUAGE_DISPLAY[language] || language}
            </LanguageLink>
          ))}
        </LanguagesRow>
      )}
    </ContentHeading1Background>
  );
};

export default HeadingWithLanguageSelector;
