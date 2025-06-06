"use client";

import HeadingWithLanguageSelector from "@/components/mdx/HeadingWithLanguageSelector";
import { PostMeta } from "@/utils/post";
import styled from "@emotion/styled";
import { PaginationItem, Space, Typo } from "@solved-ac/ui-react";
import { IconCalendar } from "@tabler/icons-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Updates = styled.ul``;

const UpdateItem = styled.li`
  border-bottom: ${({ theme }) => theme.styles.border()};
`;

const Title = styled.span`
  flex: 1;
`;

const UpdateLink = styled(Link)`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  text-decoration: none;
  cursor: pointer;
  gap: 8px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
`;

const DateDisplay = styled(Typo)`
  display: flex;
  align-items: center;
  gap: 4px;
  @media (max-width: 768px) {
    font-size: 90%;
  }
`;

interface Props {
  current: PostMeta;
  posts: PostMeta[];
  lang: string;
  total: number;
}

const ClientPage = ({ current, lang, posts, total }: Props) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const slicedPosts = posts.slice((page - 1) * 10, page * 10);

  return (
    <>
      <HeadingWithLanguageSelector
        meta={current}
        languages={["en", "ko"].map((language) => ({
          language,
          link: `/${language}/updates`,
        }))}
        current={lang}
      />
      <Updates>
        {slicedPosts.map((post) => (
          <UpdateItem key={post.slug}>
            <UpdateLink href={post.slug}>
              <Title>{post.title}</Title>
              {post.date !== null && (
                <DateDisplay description tabular>
                  <IconCalendar />
                  {post.date.toLocaleDateString(lang, {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </DateDisplay>
              )}
            </UpdateLink>
          </UpdateItem>
        ))}
      </Updates>
      <Space h={16} />
      <div style={{ textAlign: "center" }}>
        {new Array(total).fill(null).map((_, index) => (
          <PaginationItem
            as={Link}
            key={index}
            href={`?page=${index + 1}`}
            current={index + 1 === page}
            style={{ display: "inline-block" }}
          >
            {index + 1}
          </PaginationItem>
        ))}
      </div>
      <Space h={64} />
    </>
  );
};

export default ClientPage;
