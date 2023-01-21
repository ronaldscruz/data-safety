import * as S from "./styles";
import serviceCards from "./data";
import GradientSvg from "../../../GradientSVG";

const ServicesCards = () => {
  const renderServiceCards = (serviceCards = []) => {
    const iconSize = 86;

    const serviceCardsJSX = serviceCards.map((serviceCard) => (
      <S.ServiceItem key={serviceCard.title}>
        <S.ServiceIconWrapper $iconSize={iconSize}>
          <serviceCard.iconComponent
            size={iconSize}
            style={{ fill: "url(#brand-gradient)" }}
          />
        </S.ServiceIconWrapper>
        <S.ServiceTitle>{serviceCard.title}</S.ServiceTitle>
        <S.ServiceDescription>{serviceCard.description}</S.ServiceDescription>
      </S.ServiceItem>
    ));

    return (
      <>
        <GradientSvg />
        <S.ServicesList>{serviceCardsJSX}</S.ServicesList>
      </>
    );
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Conheça nossos serviços</S.Title>
        <S.Description>
          Sua empresa não precisa correr mais <b>riscos</b>. Temos as soluções
          ideais para <b>modernizar</b> e <b>proteger</b> seu negócio.
        </S.Description>
        {renderServiceCards(serviceCards)}
      </S.Content>
    </S.Container>
  );
};

export default ServicesCards;
