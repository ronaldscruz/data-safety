import styled from "@emotion/styled";

export const Container = styled.section`
  position: relative;

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
      height: 480px;
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
`;

export const Controller = styled.button`
  border: none;
  background: transparent;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0 var(--padding-m);
`;

export const SlidesProgressContainer = styled.div`
  position: absolute;
  bottom: var(--margin-s);
  left: 50%;
  transform: translate(-50%, -50%);
`;
