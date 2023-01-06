import styled from "@emotion/styled";
import { highlightedLinkCss } from "./highlightedLinkCss";
import {
  MAX_MOBILE_BREAKPOINT,
  MIN_DESKTOP_BREAKPOINT,
} from "../../../../constants/menuSwapBreakpoints";
import { css } from "@emotion/react";

export const Container = styled.nav`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--menu-height);
  padding: 0 var(--spacing-xl);
`;

export const Options = styled.ul`
  display: flex;
  align-items: center;
`;

export const Option = styled.li`
  display: inline-flex;
  margin-right: var(--spacing-xxxl);
  height: 100%;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }

  a {
    align-items: center;
    height: 100%;
  }

  ${({ $highlighted }) =>
    $highlighted
      ? highlightedLinkCss
      : css`
          a {
            position: relative;
            transition: all 0.2s ease;

            &::before {
              content: "";
              position: absolute;
              bottom: 6px;
              height: 2px;
              width: 0;
              background: var(--primary-color);
              transition: all 0.2s ease;
            }

            &:hover {
              text-shadow: 0px 0px 1px black;

              &::before {
                width: 100%;
              }
            }
          }
        `};
`;

export const DesktopMenuWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: ${MAX_MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;

  @media only screen and (min-width: ${MIN_DESKTOP_BREAKPOINT}) {
    display: none;
  }
`;
