import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  margin-bottom: var(--menu-height);
`;

export const Main = styled.main`
  background: var(--base-bg-color);
`;
