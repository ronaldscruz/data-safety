import * as S from "./styles";
import reasons from "./data";

const WhyYouNeed = () => {
  const renderReasons = (reasons = []) => {
    let mustRevert = true;

    return reasons.map((reason, reasonIndex) => {
      const { title, description, imageFile, imageAlt } = reason;

      mustRevert = !mustRevert;

      const descriptionJSX = Array.isArray(description) ? (
        description.map((paragraph, paragraphIndex) => (
          <S.ReasonDescription key={paragraphIndex}>
            {paragraph}
          </S.ReasonDescription>
        ))
      ) : (
        <S.ReasonDescription>{description}</S.ReasonDescription>
      );

      return (
        <S.ReasonItem key={title} $revert={mustRevert}>
          <S.ReasonTextWrapper>
            <S.ReasonTitle>
              <S.TitleIndex>{reasonIndex + 1}. </S.TitleIndex>
              {title}
            </S.ReasonTitle>
            {descriptionJSX}
          </S.ReasonTextWrapper>
          {imageFile ? (
            <S.ReasonImageWrapper>
              <S.ReasonImage src={imageFile} alt={imageAlt} loading="lazy" />
            </S.ReasonImageWrapper>
          ) : (
            <></>
          )}
        </S.ReasonItem>
      );
    });
  };

  return (
    <S.Container id="why-you-need">
      <S.Content>
        <S.Title>
          Por que você precisa de ajuda para proteger seu negócio?
        </S.Title>
        <S.News>
          Um relatório da National Cyber Security Alliance (NCSA) concluiu que{" "}
          <b>60%</b> dos pequenos negócios que sofrem ciberataques vão à{" "}
          <b>falência</b> dentro de 6 meses após o ocorrido.
        </S.News>
        <S.ReasonsList>{renderReasons(reasons)}</S.ReasonsList>
      </S.Content>
    </S.Container>
  );
};

export default WhyYouNeed;
