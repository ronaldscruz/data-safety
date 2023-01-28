import * as S from "./styles";

const TextArea = ({
  type = "text",
  name = "",
  label = "",
  placeholder = "",
  ...props
}) => {
  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.StyledTextArea
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        rows={4}
        {...props}
      />
    </S.Container>
  );
};

export default TextArea;
