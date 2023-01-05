import styled from "@emotion/styled";

export const Container = styled.section`
  padding: 72px var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--desktop-md-w);
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 86px;
`;

export const ServicesList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ServiceItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 400px;
  padding: 0 var(--spacing-xl);
`;

export const ServiceIconWrapper = styled.div`
  margin-bottom: var(--spacing-lg);
  height: 72px;
`;

export const ServiceTitle = styled.h1`
  margin-bottom: var(--spacing-lg);
`;

export const ServiceDescription = styled.p`
  max-width: 100%;
`;
