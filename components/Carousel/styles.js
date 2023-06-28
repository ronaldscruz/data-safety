import styled from "@emotion/styled";
import Image from "next/image";

import {MAX_MOBILE_BREAKPOINT} from "../../constants/menuSwapBreakpoints";
import {css} from "@emotion/react";

const SLIDE_ARROW_SIZE = "64px";
const SLIDE_X_MARGIN_CSS = css`
  margin: 0 calc(${SLIDE_ARROW_SIZE} + var(--spacing-xl));

  @media only screen and (max-width: 820px) {
    margin: 0 calc(${SLIDE_ARROW_SIZE} - var(--spacing-xl));
  }
`;

export const CarouselButtonContainer = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
`;

export const CarouselContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: var(--desktop-md-w);
  height: 620px;
  max-height: calc(100vh - (var(--menu-height) * 2));
  margin: 0 auto;
`;

export const CarouselTitle = styled.h1`
  z-index: 3;
  color: var(--negative-color);
  font-weight: 800;
  text-align: left;

  ${SLIDE_X_MARGIN_CSS};

  margin-bottom: var(--spacing-lg) !important;
`;

export const CarouselBackground = styled(Image)`
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
`;

export const CarouselText = styled.p`
  width: fit-content;
  font-style: italic;
  font-weight: 600;
  z-index: 3;
  margin-bottom: var(--spacing-sm);
  text-align: left;

  ${SLIDE_X_MARGIN_CSS};

  span {
    background: var(--negative-color);
    padding: var(--spacing-xxs) var(--spacing-sm);
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    line-height: 2;
    border-radius: 6px;
  }
`;

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
    position: relative;
    justify-content: center;
  }
`;

export const IconsContainer = styled.ul`
  width: 100%;
  z-index: 3
`

export const IconContainer = styled.li`
  display: inline-flex;
`;

export const IconContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconTitle = styled.h2`
  color: var(--negative-color);
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
