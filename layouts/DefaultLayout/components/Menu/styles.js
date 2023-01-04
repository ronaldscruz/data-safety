import styled from "@emotion/styled";

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
`;

export const DesktopMenuWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
