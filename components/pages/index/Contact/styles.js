import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  justify-content: center;

  background: linear-gradient(
    90deg,
    var(--secondary-color) 0%,
    var(--primary-color) 100%
  );

  height: 400px;
  color: var(--negative-color);
`;

export const Content = styled.div`
  width: var(--desktop-sm-w);
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-section-y) var(--spacing-section-x);
`;

export const LeftContent = styled.div`
  width: 50%;
`;

export const FormContainer = styled.div`
  width: 50%;
`;
