import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  justify-content: center;
`;

export const Content = styled.article`
  width: var(--desktop-sm-w);
  padding: var(--spacing-section-y) var(--spacing-section-x);
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: var(--spacing-lg);
`;

export const Subtitle = styled.h2`
  font-weight: normal;
  margin-bottom: var(--spacing-section-y);
`;
