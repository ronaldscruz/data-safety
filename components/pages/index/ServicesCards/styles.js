import styled from "@emotion/styled";

const TWO_COLS_BREAKPOINT = "1420px";
const SINGLE_COL_BREAKPOINT = "730px";

const HORIZONTAL_SECTION_PADDING = "var(--spacing-section-x)";
const MAX_CARDS_PER_LINE = 4;

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
  display: grid;
  grid-template-columns: repeat(4, 319px);
  grid-template-rows: 520px;
  grid-gap: var(--spacing-lg);
  margin: 0 auto;
  max-width: 100%;
  justify-content: center;

  @media (max-width: 1430px) {
    grid-template-columns: repeat(2, 319px);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 319px);
  }

  @media (max-width: 380px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

export const ServiceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 319px;
  height: 520px;

  padding: var(--spacing-xxxl) var(--spacing-xxl);
  background: var(--negative-color);
  border-radius: 12px;

  @media (max-width: 380px) {
    width: 100%;
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
