import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
`;

export const StyledInput = styled.input`
  height: 42px;
  border: none;
  border-radius: 8px;
  padding: 0 var(--spacing-md);
`;
