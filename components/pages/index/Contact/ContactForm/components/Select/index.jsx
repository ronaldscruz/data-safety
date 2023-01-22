import * as S from "./styles";

const Select = ({ name = "", label = "", options = [] }) => {
  const renderOptions = () => {
    return options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.StyledSelect id={name} name={name}>
        {renderOptions()}
      </S.StyledSelect>
    </S.Container>
  );
};

export default Select;
