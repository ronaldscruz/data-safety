import styled from "@emotion/styled";

export const Container = styled.nav`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-xl) var(--spacing-xl);
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
