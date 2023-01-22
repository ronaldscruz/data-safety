import ContactForm from "./ContactForm";
import * as S from "./styles";

const Contact = () => {
  return (
    <S.Container>
      <S.Content>
        <S.LeftContent>
          <h1>Entre em contato</h1>
          <h2>
            Fale com nossa equipe de especialistas em segurança da informação
          </h2>
        </S.LeftContent>
        <S.FormContainer>
          <ContactForm />
        </S.FormContainer>
      </S.Content>
    </S.Container>
  );
};

export default Contact;
