import * as S from "./styles";

import Input from "./components/Input";
import Select from "./components/Select";

const ContactForm = () => {
  return (
    <S.Container>
      <S.Row>
        <Input name="first-name" label="Primeiro nome" placeholder="Arthur" />
      </S.Row>
      <S.Row>
        <Input name="last-name" label="Último nome" placeholder="Pereira" />
      </S.Row>
      <S.Row>
        <Input
          type="email"
          name="email"
          label="E-mail"
          placeholder="comercial@datasafety.tec.br"
        />
      </S.Row>
      <S.Row>
        <Select
          label="Motivo do contato"
          options={[
            { label: "Agendar consultoria", value: "schedule_consulting" },
          ]}
        />
      </S.Row>
    </S.Container>
  );
};

export default ContactForm;
