import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  color: var(--negative-color);
  background-color: var(--primary-text-color);
  padding: var(--spacing-section-y) var(--spacing-section-x);

  width: 100%;
`;

export const Content = styled.article`
  width: var(--desktop-sm-w);
  max-width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: var(--spacing-section-y);
`;

export const ReasonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-section-y);

  ${({ $reverse = false }) =>
    $reverse
      ? css`
          flex-direction: row-reverse;
        `
      : ""};
`;

export const ReasonMedia = styled.div`
  width: 50%;
  position: relative;
`;

export const ReasonBoxShadow = styled.div`
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 0px 50px 40px rgb(0 0 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ReasonText = styled.div`
  width: 50%;
  padding: 0 var(--spacing-section-x);
`;
