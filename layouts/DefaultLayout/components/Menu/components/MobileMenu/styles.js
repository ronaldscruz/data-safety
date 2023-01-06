import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { highlightedLinkCss } from "../../highlightedLinkCss";

export const Container = styled.div``;

export const HamburgerButton = styled.button`
  border: none;

  background: transparent;
  color: var(--text-color);

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const OptionsList = styled.ul`
  position: absolute;
  left: 0;
  width: 100vw;
  background: #fff;
  z-index: 2;
  box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.2);
  top: var(--menu-height);

  ${({ $visible = false }) =>
    $visible
      ? css`
          padding-top: var(--spacing-xs);
        `
      : css`
          padding-top: 0;
        `};
`;

export const HamburguerButtonLabel = styled.label`
  position: absolute;
  color: rgba(0, 0, 0, 0);
`;

export const Option = styled.li`
  transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1);

  a {
    display: flex;
    align-items: center;
  }

  ${({ $visible = false, $highlighted = false }) =>
    $visible
      ? css`
          display: flex;
          align-items: center;
          height: 47px;
          margin: 0 var(--spacing-xl);
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          font-size: 15px;

          &:last-child {
            border-bottom: none;
          }

          ${$highlighted
            ? css`
                ${highlightedLinkCss};

                padding: var(--spacing-xxxl) 0;
              `
            : css`
                a {
                  transition: all 0.2s ease;

                  &:active,
                  &:hover {
                    color: var(--primary-color);
                  }
                }
              `};
        `
      : css`
          opacity: 0;
          height: 0;
        `}
`;
