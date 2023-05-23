import styled from "@emotion/styled";

import { MAX_MOBILE_BREAKPOINT } from "../../constants/menuSwapBreakpoints";

export const Container = styled.section`
  position: relative;
  overflow: hidden;

  .embla {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;

    img {
      width: 100%;
      height: 620px;
      max-height: calc(100vh - (var(--menu-height) * 2));
      object-fit: cover;
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;

  @media only screen and (max-width: ${MAX_MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

export const Controller = styled.button`
  border: none;
  background: transparent;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0 var(--spacing-xl);
`;

export const SlidesProgressContainer = styled.div`
  position: absolute;
  bottom: var(--spacing-sm);
  left: 50%;
  transform: translateX(-50%);
`;
