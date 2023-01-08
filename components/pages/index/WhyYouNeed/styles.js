import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.section`
  padding: var(--spacing-section-y) var(--spacing-section-x);
  background: var(--negative-color);
  display: flex;
  justify-content: center;
  border-top-left-radius: 64px;
  border-top-right-radius: 64px;
  /* box-shadow: 0px -7px 9px -12px rgba(0, 0, 0, 0.2); */
`;

export const Content = styled.article`
  width: var(--desktop-sm-w);
  max-width: 100%;
  padding: 0;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

export const TitleIndex = styled.span`
  background: linear-gradient(
    90deg,
    var(--secondary-color) 0%,
    var(--primary-color) 100%
  );

  background-clip: text;
  color: transparent;
  font-weight: 700;
`;

export const News = styled.p`
  text-align: center;
  margin-bottom: var(--spacing-section-y);
  font-size: var(--h2-size);
`;

export const ReasonsList = styled.ol``;

export const ReasonItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-section-y);

  &:last-child {
    margin-bottom: 0;
  }

  ${({ $revert = false }) =>
    $revert
      ? css`
          flex-direction: row-reverse;
        `
      : ""}

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ReasonTextWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ReasonTitle = styled.h2``;

export const ReasonDescription = styled.p``;

export const ReasonImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media only screen and (max-width: 768px) {
    margin-bottom: var(--spacing-xl);
  }
`;

export const ReasonImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: auto;
`;
