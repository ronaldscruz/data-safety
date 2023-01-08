import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.section`
  padding: 0 var(--spacing-section-x) 64px;
  display: flex;
  justify-content: center;
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

export const News = styled.p`
  text-align: center;
  margin-bottom: var(--spacing-section-y);
`;

export const ReasonsList = styled.ol``;

export const ReasonItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
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
`;

export const ReasonImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: auto;
`;
