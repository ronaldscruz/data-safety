import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: var(--desktop-sm-w);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-xxl) var(--spacing-section-x);
`;

export const SocialMedia = styled.div`
  display: flex;
  margin-bottom: var(--spacing-xxxl);
`;

export const SocialLink = styled.a`
  margin-right: var(--spacing-lg);

  &:last-child {
    margin-right: 0;
  }

  svg {
    path:nth-child(1) {
      fill: url(#brand-gradient);
    }
    width: 38px;
    height: 38px;
  }

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const MenuLinks = styled.ul`
  display: flex;
  margin-bottom: var(--spacing-xl);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    list-style-type: disc;
  }
`;

export const MenuLinkItem = styled.li`
  @media screen and (max-width: 768px) {
    margin-bottom: var(--spacing-md);
  }

  @media screen and (min-width: 769px) {
    margin-right: var(--spacing-sm);

    a {
      &:after {
        margin-left: var(--spacing-sm);
        content: "•";
      }
    }

    &:last-child {
      a {
        &:after {
          margin-left: 0;
          content: "";
        }
      }
    }
  }
`;

export const CopyrightText = styled.span`
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  font-size: 14px;
`;
