import { css } from "@emotion/react";

export const highlightedLinkCss = css`
  a {
    height: 42px;
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-xl);
    border-radius: 6px;
    color: var(--negative-color);
    font-weight: 600;

    background: linear-gradient(
      90deg,
      var(--secondary-color) 0%,
      var(--primary-color) 100%
    );

    transition: all 0.3s ease;

    &:hover {
      filter: brightness(120%);
    }
  }
`;
