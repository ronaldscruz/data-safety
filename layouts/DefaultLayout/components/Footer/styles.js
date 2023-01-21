import styled from "@emotion/styled";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: var(--desktop-sm-w);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-xxl) var(--spacing-section-x);
`;

export const CompanyInfo = styled.div`
  display: flex;
`;

export const SocialMedia = styled.div`
  display: flex;
`;

export const SocialLink = styled.a`
  font-size: 32px;
  margin-right: var(--spacing-sm);

  &:last-child {
    margin-right: 0;
  }

  svg {
    fill: url(#brand-gradient);
  }
`;
