import { formatTierName } from "@/utils/format/tier";
import styled from "@emotion/styled";
import LevelColorText from "./LevelColorText";

const TierBadgeStyle = styled.img`
  line-height: inherit;
  width: 1.2em;
  height: 1.2em;
  vertical-align: middle;
`;

interface TierImageArgs {
  value: number;
  locked?: boolean;
  sprout?: boolean;
}

const levelImageName = ({ value, sprout, locked }: TierImageArgs): string => {
  if (value === 0) {
    return locked ? "nr" : "0";
  }
  if (sprout) {
    return "sprout";
  } else {
    return value.toString();
  }
};

const levelAlt = ({ value, sprout, locked }: TierImageArgs): string => {
  if (value === 0) {
    return formatTierName(value, locked, sprout);
  }
  return formatTierName(value, locked, sprout);
};

interface Props {
  t: number;
  locked?: boolean;
  sprout?: boolean;
  showName?: boolean;
}

const Tier = (props: Props) => {
  const { t, locked, sprout, showName } = props;
  const imageName = levelImageName({
    value: t,
    locked,
    sprout,
  });

  const alt = levelAlt({
    value: t,
    locked,
    sprout,
  });

  return (
    <>
      <TierBadgeStyle
        src={`https://static.solved.ac/tier_small/${imageName}.svg`}
        alt={alt}
      />
      {showName && (
        <>
          &nbsp;
          <LevelColorText t={sprout ? "sprout" : t}>
            {sprout ? "Sprout" : formatTierName(t, !locked)}
          </LevelColorText>
        </>
      )}
    </>
  );
};

export default Tier;
