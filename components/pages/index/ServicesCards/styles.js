import styled from "@emotion/styled";

const TWO_COLS_BREAKPOINT = "1380px";
const SINGLE_COL_BREAKPOINT = "730px";
const TITLE_BREAK_BREAKPOINT = "432px";

const HORIZONTAL_SECTION_PADDING = "var(--spacing-xl)";

export const Container = styled.section`
  padding: 64px ${HORIZONTAL_SECTION_PADDING};
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
  font-size: 48px;
  margin-bottom: var(--spacing-xl);

  @media only screen and (max-width: ${TITLE_BREAK_BREAKPOINT}) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  margin-bottom: 86px;
  text-align: center;
  width: 768px;
  max-width: 100%;
`;

export const ServicesList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  flex-flow: row wrap;

  @media only screen and (max-width: ${TWO_COLS_BREAKPOINT}) {
    width: 700px;
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
  height: 400px;
  padding: 0 ${HORIZONTAL_SECTION_PADDING};
  margin-right: var(--spacing-xl);

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

export const ServiceTitle = styled.h2`
  margin-bottom: var(--spacing-xl);
`;

export const ServiceDescription = styled.p`
  max-width: 100%;
`;
