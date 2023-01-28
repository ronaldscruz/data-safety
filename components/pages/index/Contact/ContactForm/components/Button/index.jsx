import * as S from "./styles";

const Button = ({ children, ...props }) => (
  <S.StyledButton {...props}>
    <S.ChildWrapper>{children}</S.ChildWrapper>
  </S.StyledButton>
);

export default Button;
