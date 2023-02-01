import ContactForm from "./ContactForm";
import * as S from "./styles";

import ContactArt from "./assets/contact-art.svg";

const Contact = () => {
  return (
    <S.Container id="contact">
      <S.Content>
        <S.LeftContent>
          <S.TextContent>
            <h1>Entre em contato</h1>
            <h2>
              Fale com nossa equipe de especialistas em segurança da informação
            </h2>
          </S.TextContent>
          <S.ArtContainer>
            <ContactArt />
          </S.ArtContainer>
        </S.LeftContent>
        <S.FormContainer>
          <ContactForm />
        </S.FormContainer>
      </S.Content>
    </S.Container>
  );
};

export default Contact;
