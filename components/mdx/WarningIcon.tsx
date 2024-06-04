import styled from "@emotion/styled";

const TierBadgeStyle = styled.img`
  line-height: inherit;
  width: 1.2em;
  height: 1.2em;
  vertical-align: middle;
`;

const WarningIcon = () => (
  <TierBadgeStyle
    src="https://static.solved.ac/tier_small/warn.svg"
    alt="Warning"
  />
);

export default WarningIcon;
