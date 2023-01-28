import styled from "@emotion/styled";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  border: none;
  border-radius: 8px;
  padding: 0 var(--spacing-md);
  cursor: pointer;
  background: var(--negative-color);
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

export const ChildWrapper = styled.span`
  background: linear-gradient(
    90deg,
    var(--secondary-color) 0%,
    var(--primary-color) 100%
  );

  background-clip: text;
  color: transparent;
  font-weight: 600;
`;
