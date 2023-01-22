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
              A <b>Data Safety</b> é a escolha certa para garantir a segurança
              de TI de sua empresa. Com soluções avançadas e uma equipe{" "}
              <b>altamente qualificada</b>, oferecemos a excelência no serviço
              para proteger seus dados e sistemas contra{" "}
              <b>ameaças cibernéticas</b>. Nós entendemos a importância da
              segurança de sua informação e trabalhamos constantemente para
              garantir a satisfação do cliente. Faça agora uma avaliação{" "}
              <b>gratuita</b>.
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
            <h2>Soluções específicas para seu negócio</h2>
            <p>
              Nós entendemos que cada negócio tem suas necessidades únicas de{" "}
              <b>segurança da informação</b>. É por isso que oferecemos{" "}
              <b>soluções personalizadas</b> para garantir a proteção de suas
              informações sensíveis e a tranquilidade de sua empresa. Nossas
              soluções incluem firewalls avançados, criptografia de dados,
              autenticação de usuários e muito mais. Não importa qual seja o
              tamanho ou segmento de sua empresa, nós podemos ajudá-lo a se
              proteger contra <b>ameaças cibernéticas</b>. Entre em contato
              conosco para uma consultoria <b>gratuita</b> e descubra como
              podemos ajudar a proteger o seu negócio.
            </p>
          </S.ReasonText>
        </S.ReasonWrapper>
      </S.Content>
    </S.Container>
  );
};

export default WhyChoose;
