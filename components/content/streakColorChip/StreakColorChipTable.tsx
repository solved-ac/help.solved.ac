import {
  Cell,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@solved-ac/ui-react";
import { I18n } from "@/types/I18n";
import useLanguage from "../../../hooks/useLanguage";
import StreakPreview from "../../mdx/StreakPreview";
import streakColorChipData from "./data";

const headers: Record<string, I18n> = {
  grade: { ko: "등급", en: "Grade" },
  probability: { ko: "확률", en: "Probability" },
  color: { ko: "색상", en: "Color" },
  streak: { ko: "스트릭 색상", en: "Streak Color" },
};

const StreakColorChipTable = () => {
  const lang = useLanguage();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <Row>
            <Cell>{headers.grade[lang]}</Cell>
            <Cell>{headers.probability[lang]}</Cell>
            <Cell>{headers.color[lang]}</Cell>
            <Cell>{headers.streak[lang]}</Cell>
          </Row>
        </TableHead>
        <TableBody>
          {streakColorChipData.map((group) =>
            group.colors.map((color, i) => (
              <Row key={color.name}>
                {i === 0 && (
                  <>
                    <Cell
                      rowSpan={group.colors.length}
                      style={{ verticalAlign: "middle" }}
                    >
                      {group.label[lang]}
                    </Cell>
                    <Cell
                      rowSpan={group.colors.length}
                      style={{ verticalAlign: "middle" }}
                    >
                      {group.probability}
                    </Cell>
                  </>
                )}
                <Cell style={{ verticalAlign: "middle" }}>{color.name}</Cell>
                <Cell style={{ verticalAlign: "middle" }}>
                  <StreakPreview colors={color.values} />
                </Cell>
              </Row>
            )),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StreakColorChipTable;
