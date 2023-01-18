import * as S from "./styles";

const WhyChoose = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Por que escolher a Data Safety?</S.Title>

        <S.ReasonWrapper>
          <S.ReasonMedia>
            <video autoPlay loop muted>
              <source src="/assets/planet.mp4" type="video/mp4" />
              Seu navegador não suporta esse tipo de mídia.
            </video>
            <S.ReasonBoxShadow />
          </S.ReasonMedia>
          <S.ReasonText>
            <h2>Excelência em serviço</h2>
            <p>
              A Data Safety é a escolha certa para garantir a segurança de TI de
              sua empresa. Com soluções avançadas e uma equipe altamente
              qualificada, oferecemos a excelência no serviço para proteger seus
              dados e sistemas contra ameaças cibernéticas. Nós entendemos a
              importância da segurança de sua informação e trabalhamos
              constantemente para garantir a satisfação do cliente. Confie em
              nós para manter sua empresa segura e protegida. Faça agora uma
              avaliação gratuita de segurança de TI e descubra como podemos
              ajudar a proteger sua empresa.
            </p>
          </S.ReasonText>
        </S.ReasonWrapper>

        <S.ReasonWrapper $reverse={true}>
          <S.ReasonMedia>
            <video autoPlay loop muted>
              <source src="/assets/parallax.mp4" type="video/mp4" />
              Seu navegador não suporta esse tipo de mídia.
            </video>
            <S.ReasonBoxShadow />
          </S.ReasonMedia>
          <S.ReasonText>
            <h2>Excelência em serviço</h2>
            <p>
              A Data Safety é a escolha certa para garantir a segurança de TI de
              sua empresa. Com soluções avançadas e uma equipe altamente
              qualificada, oferecemos a excelência no serviço para proteger seus
              dados e sistemas contra ameaças cibernéticas. Nós entendemos a
              importância da segurança de sua informação e trabalhamos
              constantemente para garantir a satisfação do cliente. Confie em
              nós para manter sua empresa segura e protegida. Faça agora uma
              avaliação gratuita de segurança de TI e descubra como podemos
              ajudar a proteger sua empresa.
            </p>
          </S.ReasonText>
        </S.ReasonWrapper>
      </S.Content>
    </S.Container>
  );
};

export default WhyChoose;
