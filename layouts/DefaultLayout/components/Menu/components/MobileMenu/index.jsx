import Link from "next/link";
import * as S from "./styles";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const MobileMenu = ({ options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderOptions = (options, isOpen) => {
    return options.map((option) => (
      <S.Option key={option.url} $visible={isOpen}>
        <Link href={option.url}>{option.label}</Link>
      </S.Option>
    ));
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = (isOpen) => {
    if (isOpen) closeMenu();
    else openMenu();
  };

  return (
    <S.Container>
      <S.HamburgerButton onClick={() => toggleMenu(isOpen)}>
        <FaBars />
      </S.HamburgerButton>
      <S.OptionsList $visible={isOpen}>
        {renderOptions(options, isOpen)}
      </S.OptionsList>
    </S.Container>
  );
};

export default MobileMenu;
