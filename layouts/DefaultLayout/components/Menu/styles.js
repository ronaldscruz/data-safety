import styled from "@emotion/styled";

export const Container = styled.nav`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  padding: var(--padding-m) var(--padding-m);
`;

export const Options = styled.ul`
  display: inline-flex;
  align-items: flex-end;
`;

export const Option = styled.li`
  margin-right: var(--margin-m);

  &:last-child {
    margin-right: 0;
  }
`;
