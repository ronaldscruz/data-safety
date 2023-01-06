import * as S from "./styles";
import serviceCards from "./data";

const ServicesCards = () => {
  const renderServiceCards = (serviceCards = []) => {
    const gradientSvgJSX = (
      <svg width="0" height="0">
        <linearGradient id="brand-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="var(--primary-color)" offset="0%" />
          <stop stopColor="var(--secondary-color)" offset="100%" />
        </linearGradient>
      </svg>
    );

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
        {gradientSvgJSX}
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
