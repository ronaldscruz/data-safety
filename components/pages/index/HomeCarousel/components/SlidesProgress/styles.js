import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.menu`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--spacing-lg);
`;

export const SlideDot = styled.li`
  display: inline-flex;
  margin-right: var(--spacing-xxxl);
`;

export const SlideDotButton = styled.button`
  width: 12px;
  height: 12px;
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
