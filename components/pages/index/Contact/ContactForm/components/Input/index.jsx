import * as S from "./styles";

const Input = ({ type = "text", name = "", label = "", placeholder = "" }) => {
  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.StyledInput
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </S.Container>
  );
};

export default Input;
