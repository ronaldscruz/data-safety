import * as S from "./styles";
import serviceCards from "./data";

const ServicesCards = () => {
  const renderServiceCards = (serviceCards = []) => {
    const serviceCardsJSX = serviceCards.map((serviceCard) => (
      <S.ServiceItem key={serviceCard.title}>
        <S.ServiceIconWrapper>
          <serviceCard.iconComponent size={72} />
        </S.ServiceIconWrapper>
        <S.ServiceTitle>{serviceCard.title}</S.ServiceTitle>
        <S.ServiceDescription>{serviceCard.description}</S.ServiceDescription>
      </S.ServiceItem>
    ));

    return <S.ServicesList>{serviceCardsJSX}</S.ServicesList>;
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Conheça nossos serviços</S.Title>
        {renderServiceCards(serviceCards)}
      </S.Content>
    </S.Container>
  );
};

export default ServicesCards;
