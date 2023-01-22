import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  justify-content: center;

  background: linear-gradient(
    90deg,
    var(--secondary-color) 0%,
    var(--primary-color) 100%
  );

  color: var(--negative-color);
`;

export const Content = styled.div`
  width: var(--desktop-sm-w);
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-section-y) var(--spacing-section-x);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  width: 50%;
  margin-right: var(--spacing-xxxl);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TextContent = styled.div`
  margin-bottom: var(--spacing-xxxl);
`;

export const ArtContainer = styled.div`
  width: 90%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
