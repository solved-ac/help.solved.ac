import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  gap: 2px;
`;

const Cell = styled.div<{ color: string }>`
  width: 18px;
  height: 18px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
`;

interface StreakPreviewProps {
  colors: string[];
}

const StreakPreview = ({ colors }: StreakPreviewProps) => {
  return (
    <Container>
      {colors.map((color) => (
        <Cell key={color} color={color} />
      ))}
    </Container>
  );
};

export default StreakPreview;
