import { useCallback } from "react";
import * as S from "./styles";

const SlidesProgress = ({
  totalCount = 0,
  currentIndex = 0,
  onNavigate = () => {},
}) => {
  const renderProgressDots = useCallback(
    (totalCount, currentIndex, onNavigate) => {
      return Array(totalCount)
        .fill(<></>)
        .map((_, dotIndex) => {
          return (
            <S.SlideDot
              key={dotIndex}
              onClick={() => onNavigate(dotIndex)}
              $selected={currentIndex === dotIndex}
              aria-label={`Pular para o slide ${dotIndex + 1}`}
            ></S.SlideDot>
          );
        });
    },
    []
  );

  return (
    <S.Container>
      {renderProgressDots(totalCount, currentIndex, onNavigate)}
    </S.Container>
  );
};

export default SlidesProgress;
