import * as S from "./styles";
import Image from "next/image";
import reasons from "./data";

const WhyYouNeed = () => {
  const renderReasons = (reasons = []) => {
    return reasons.map((reason, reasonIndex) => {
      const { title, description, imageFile, imageAlt } = reason;

      return (
        <S.ReasonItem key={title}>
          <S.ReasonTextWrapper>
            <S.ReasonTitle>
              {reasonIndex + 1}. {title}
            </S.ReasonTitle>
            <S.ReasonDescription>{description}</S.ReasonDescription>
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
    <S.Container>
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
