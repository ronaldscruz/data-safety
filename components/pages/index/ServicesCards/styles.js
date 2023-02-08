import styled from "@emotion/styled";

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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
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

  // spacing between items
  margin: 0 var(--spacing-md) var(--spacing-xxl);

  @media (max-width: 380px) {
    width: 100%;
  }
`;

export const ServiceIconWrapper = styled.div`
  margin-bottom: var(--spacing-xxxl);
  height: ${({ $iconSize = 86 }) => $iconSize};
`;

export const ServiceTitle = styled.h2`
  text-align: center;
`;

export const ServiceDescription = styled.p`
  max-width: 100%;
`;
