import styled from "@emotion/styled";

export const Container = styled.nav`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  padding: var(--padding-m) var(--padding-m);
`;

export const Options = styled.ul`
  list-style-type: none;
  display: inline-flex;
  align-items: center;
`;

export const Option = styled.li`
  margin: 0 var(--margin-s);
  font-size: 18px;

  &:last-child {
    margin-right: 0;
  }
`;
