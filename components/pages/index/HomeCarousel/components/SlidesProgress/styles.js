import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.menu`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
`;

export const SlideDot = styled.li`
  display: inline-flex;
  margin-right: var(--spacing-xxxl);

  &:last-child {
    margin-right: 0;
  }
`;

export const SlideDotButton = styled.button`
  padding: 8px;
  border-radius: 50%;
  background: white;
  border: none;

  cursor: pointer;

  background: rgba(255, 255, 255, 0.5);

  &:hover {
    background: rgba(255, 255, 255, 0.75);
  }

  ${({ $selected }) =>
    $selected
      ? css`
          background: rgba(255, 255, 255, 1);
        `
      : ""};
`;
