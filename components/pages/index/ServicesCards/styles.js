import styled from "@emotion/styled";

const TWO_COLS_BREAKPOINT = "1380px";
const SINGLE_COL_BREAKPOINT = "730px";

const HORIZONTAL_SECTION_PADDING = "var(--spacing-section-x)";

export const Container = styled.section`
  padding: var(--spacing-section-y) ${HORIZONTAL_SECTION_PADDING};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--desktop-md-w);
  max-width: 100%;
  flex-wrap: nowrap;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

export const Description = styled.p`
  margin-bottom: 86px;
  text-align: center;
  width: 768px;
  max-width: 100%;
  font-size: var(--h2-size);
`;

export const ServicesList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: ${TWO_COLS_BREAKPOINT}) {
    width: 660px;
  }

  @media only screen and (max-width: ${SINGLE_COL_BREAKPOINT}) {
    width: 320px;
  }
`;

export const ServiceItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  max-width: 100%;
  height: 460px;
  padding: var(--spacing-xxxl) var(--spacing-xxl);
  margin-right: var(--spacing-xl);
  background: var(--negative-color);
  border-radius: 12px;

  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: ${TWO_COLS_BREAKPOINT}) {
    margin-right: 0;
    margin-bottom: var(--spacing-xl);
  }
`;

export const ServiceIconWrapper = styled.div`
  margin-bottom: var(--spacing-xxxl);
  height: ${({ $iconSize = 86 }) => $iconSize};
`;

export const ServiceTitle = styled.h2``;

export const ServiceDescription = styled.p`
  max-width: 100%;
`;
