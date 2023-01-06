import styled from "@emotion/styled";
import { highlightedLinkCss } from "./highlightedLinkCss";
import {
  MAX_MOBILE_BREAKPOINT,
  MIN_DESKTOP_BREAKPOINT,
} from "../../../../constants/menuSwapBreakpoints";

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
  margin-right: var(--spacing-xxl);

  &:last-child {
    margin-right: 0;
  }

  ${({ $highlighted }) => ($highlighted ? highlightedLinkCss : "")};
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
