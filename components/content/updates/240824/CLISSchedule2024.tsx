import {
  Cell,
  Paragraph,
  Row,
  Space,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typo,
} from "@solved-ac/ui-react";
import { IconCalendar, IconClock, IconMap } from "@tabler/icons-react";

const CfLink = ({ handle }: { handle: string }) => {
  return (
    <Typo description>
      <a href={`https://codeforces.com/profile/${handle}`}>@{handle}</a>
    </Typo>
  );
};

const CLISSchedule2024 = () => {
  return (
    <>
      <Typo h3>ICPC Library Track</Typo>
      <Typo description>
        <IconMap /> Rixos 호텔 D홀 &middot; <IconCalendar /> 2024년 9월 15일{" "}
        <br />
        <IconClock /> (현지) 20:00 &ndash; 21:30, (한국) 16일 00:00 &ndash;
        01:30
      </Typo>
      <Paragraph>
        이 트랙에서는 ICPC의 역사에 대한 살아 있는 도서관을 다룹니다. 여기에는
        뉴스, 분석, 문제, 해답, 저지 아카이브, 대회 아카이브, 수상 및 기타 ICPC
        역사와 관련된 유물이 포함됩니다.
      </Paragraph>
      <TableContainer>
        <Table padding="dense" fullWidth>
          <TableHead>
            <Row>
              <Cell style={{ width: "40%" }}>발표자</Cell>
              <Cell style={{ width: "60%" }}>주제</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>
                Nikolay Kalinin <CfLink handle="KAN" />
                <br />
                <Typo description small>
                  Max Planck Institute for the Science of Light / Codeforces
                </Typo>
              </Cell>
              <Cell>
                CodeForces: Contests by the Community, for the Community
              </Cell>
            </Row>
            <Row>
              <Cell>
                Riku Kawasaki <CfLink handle="maroonrk" />
                <br />
                <Typo description small>
                  The University of Tokyo
                </Typo>
              </Cell>
              <Cell>Fun Facts about AtCoder</Cell>
            </Row>
            <Row>
              <Cell>
                <b>
                  <a href="https://shiftpsh.com" target="_blank">
                    Suhyun Park
                  </a>{" "}
                  <CfLink handle="shiftpsh" />
                </b>
                <br />
                <Typo description small>
                  Sogang University / Solved Company
                </Typo>
              </Cell>
              <Cell>
                <b>solved.ac – Community Guide for Programming Challenges</b>
              </Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>

      <Space h={32} />

      <Typo h3>ICPC Compete Track</Typo>
      <Typo description>
        <IconMap /> Rixos 호텔 D홀 &middot; <IconCalendar /> 2024년 9월 16일{" "}
        <br />
        <IconClock /> (현지) 20:00 &ndash; 21:30, (한국) 17일 00:00 &ndash;
        01:30
      </Typo>
      <Paragraph>
        이 트랙에서는 다양한 수준의 경쟁 프로그래밍 대회에 대해 논의합니다.
        여기에는 ICPC 대회 참가를 위한 뉴스, 지침 및 도구, ICPC가 공인하는 대회
        및 연습 대회에 대한 내용이 포함됩니다.
      </Paragraph>
      <TableContainer>
        <Table padding="dense" fullWidth>
          <TableHead>
            <Row>
              <Cell style={{ width: "40%" }}>발표자</Cell>
              <Cell style={{ width: "60%" }}>주제</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>
                <a
                  href="https://www.cs.helsinki.fi/u/ahslaaks/"
                  target="_blank"
                >
                  Antti Laaksonen
                </a>{" "}
                <CfLink handle="pllk" />
                <br />
                <Typo description small>
                  University of Helsinki
                </Typo>
              </Cell>
              <Cell>Creating Competitive Programming Material</Cell>
            </Row>
            <Row>
              <Cell>
                Gennady Korotkevich <CfLink handle="tourist" />
              </Cell>
              <Cell>Training tips</Cell>
            </Row>
            <Row>
              <Cell>
                <a href="http://youtube.com/andrewzta" target="_blank">
                  Andrey Stankevich
                </a>{" "}
                <CfLink handle="andrewzta" />
                <br />
                <Typo description small>
                  ITMO University
                </Typo>
              </Cell>
              <Cell>
                Evolving of training tips: from beginners to world champions
              </Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>

      <Space h={32} />

      <Typo h3>ICPC Educate Track</Typo>
      <Typo description>
        <IconMap /> EXPO - Spotlight Stage &middot; <IconCalendar /> 2024년 9월
        18일 <br />
        <IconClock /> (현지) 16:30 &ndash; 18:30, (한국) 18일 20:30 &ndash;
        22:30
      </Typo>
      <Paragraph>
        이 트랙에서는 경쟁 프로그래밍에 대해 학습할 수 있는 도구와 자원에 대해
        논의합니다. 여기에는 학술 자료, 튜토리얼, 이론에서 응용까지의 알고리즘,
        전략, 코칭 방법 및 빠른 개발을 위한 프로그램이 포함됩니다.
      </Paragraph>
      <TableContainer>
        <Table padding="dense" fullWidth>
          <TableHead>
            <Row>
              <Cell style={{ width: "40%" }}>발표자</Cell>
              <Cell style={{ width: "60%" }}>주제</Cell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <Cell>
                Erich Baker
                <br />
                <Typo description small>
                  Belmont University
                </Typo>
              </Cell>
              <Cell>Creating Competitive Programming Material</Cell>
            </Row>
            <Row>
              <Cell>
                Miguel Revilla Rodriguez
                <br />
                <Typo description small>
                  <a href="https://ojbooks.com/" target="_blank">
                    OJBooks
                  </a>
                </Typo>
              </Cell>
              <Cell>ICPC Archive</Cell>
            </Row>
            <Row>
              <Cell>
                Joshua Andersson <CfLink handle="Matistjati" />
                <br />
                <Typo description small>
                  Chalmers University of Technology
                </Typo>
              </Cell>
              <Cell>Enhancements to the Problem Package Format</Cell>
            </Row>
            <Row>
              <Cell>
                <a href="https://www.jetbrains.com/icpc/" target="_blank">
                  Matthew Ellis
                </a>
                <br />
                <Typo description small>
                  JetBrains
                </Typo>
              </Cell>
              <Cell>JetBrains for ICPC</Cell>
            </Row>
            <Row>
              <Cell>
                <a href="http://youtube.com/andrewzta" target="_blank">
                  Christian Yongwhan Lim
                </a>{" "}
                <CfLink handle="yongwoods" />
                <br />
                <Typo description small>
                  Fun.xyz / Columbia University
                </Typo>
              </Cell>
              <Cell>ICPC Curriculum Committee</Cell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CLISSchedule2024;
