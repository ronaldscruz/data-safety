import Link from "next/link";
import * as S from "./styles";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import navigateTo from "../../../../../../utils/navigateTo";

const MobileMenu = ({ options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const renderOptions = (options, isOpen) => {
    return options.map((option) => (
      <S.Option
        key={option.url}
        $visible={isOpen}
        $highlighted={option.highlighted}
      >
        <Link
          href={option.url}
          onClick={(e) => {
            e.preventDefault();
            closeMenu();
            navigateTo(option.url);
          }}
        >
          {option.label}
        </Link>
      </S.Option>
    ));
  };

  useEffect(() => {
    const main = document.querySelector("main");

    main.addEventListener("click", closeMenu);

    return () => {
      main.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <S.Container>
      <S.HamburgerButton
        aria-labelledby="hamburger-button-label"
        onClick={() => toggleMenu(isOpen)}
      >
        <FaBars size={32} />
      </S.HamburgerButton>
      {/* Accessibility purpose */}
      <S.HamburguerButtonLabel id="hamburger-button-label">
        Abrir menu
      </S.HamburguerButtonLabel>
      <S.OptionsList $visible={isOpen}>
        {renderOptions(options, isOpen)}
      </S.OptionsList>
    </S.Container>
  );
};

export default MobileMenu;
