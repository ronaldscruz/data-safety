import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
`;

export const StyledTextArea = styled.textarea`
  border: none;
  border-radius: 8px;
  padding: var(--spacing-md);
`;
