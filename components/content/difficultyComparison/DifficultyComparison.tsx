import styled from "@emotion/styled";
import {
  Cell,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@solved-ac/ui-react";
import Tier from "../../mdx/Tier";
import difficultyComparisonData from "./data";
import { levelColor } from "@/utils/color/tier";

const LeftStickyCell = styled(Cell)`
  position: sticky;
  left: 0;
  background-color: ${({ theme }) => theme.color.background.page};
  z-index: 1;
`;

const SectionTitleCell = styled(Cell)`
  position: sticky;
  left: 0;
  font-weight: bold;
  background-color: ${({ theme }) => theme.color.background.card.main};
`;

const SectionTitlePadding = styled(Cell)`
  background-color: ${({ theme }) => theme.color.background.card.main};
`;

const DifficultyComparison = () => {
  return (
    <TableContainer>
      <Table padding="dense">
        <TableHead>
          <Row>
            <LeftStickyCell style={{ minWidth: "200px" }}>구분</LeftStickyCell>
            {new Array(30).fill(0).map((_, i) => (
              <Cell key={i}>
                <Tier t={i + 1} />
              </Cell>
            ))}
          </Row>
        </TableHead>
        <TableBody>
          {difficultyComparisonData.map((data, i) => (
            <Row key={i}>
              {data.type === "section-title" && (
                <>
                  <SectionTitleCell>{data.title}</SectionTitleCell>
                  <SectionTitlePadding colSpan={30} />
                </>
              )}
              {data.type === "data" && (
                <>
                  <LeftStickyCell>{data.title}</LeftStickyCell>
                  {new Array(30).fill(0).map((_, i) => (
                    <Cell
                      key={i}
                      style={{
                        backgroundColor:
                          i + 1 >= data.start && i + 1 <= data.end
                            ? levelColor(i + 1)
                            : undefined,
                      }}
                    />
                  ))}
                </>
              )}
            </Row>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DifficultyComparison;
