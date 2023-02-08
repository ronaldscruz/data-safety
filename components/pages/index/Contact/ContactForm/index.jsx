import * as S from "./styles";

import Input from "./components/Input";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import Button from "./components/Button";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    contactReason: "Consultoria",
    additionalInfo: "",
  });

  const submitContact = (e) => {
    e.preventDefault();

    const { firstName, contactReason, additionalInfo } = formData;

    const contactPhone = "5511944031024";

    const textContent = `Olá! Me chamo ${firstName}, gostaria de falar sobre "${contactReason}", pode me ajudar? ${additionalInfo}`;
    const encodedTextContent = encodeURI(textContent);

    const contactUrl = `https://wa.me/${contactPhone}?text=${encodedTextContent}`;

    window.open(contactUrl, "_blank");
  };

  return (
    <S.Container onSubmit={submitContact}>
      <S.Row>
        <Input
          name="firstName"
          label="Primeiro nome *"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
      </S.Row>
      <S.Row>
        <Select
          name="contactReason"
          label="Motivo do contato *"
          options={[
            { label: "Consultoria", value: "Consultoria" },
            { label: "Orçamento", value: "Orçamento" },
            { label: "Dúvidas", value: "Dúvidas" },
            { label: "Sugestões", value: "Sugestões" },
          ]}
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
      </S.Row>
      <S.Row>
        <TextArea
          name="additionalInfo"
          label="Informações adicionais"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          placeholder="Ex: Gostaria de saber mais sobre o serviço X"
        />
      </S.Row>
      <S.Row>
        <Button>Enviar mensagem</Button>
      </S.Row>
    </S.Container>
  );
};

export default ContactForm;
