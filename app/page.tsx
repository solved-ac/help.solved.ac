"use client";

import { Item, Itemize, Typo } from "@solved-ac/ui-react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Typo h1>solved.ac Help</Typo>
      <Itemize>
        <Item>
          <Link href="/ko/getting-started/link-account">한국어</Link>
        </Item>
        <Item>
          <Link href="/en/getting-started/link-account">English</Link>
        </Item>
      </Itemize>
    </>
  );
};

export default Home;
