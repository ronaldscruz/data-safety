import Image from "next/image";
import * as S from "./styles";
import Link from "next/link";
import { menuOptions } from "./data";

const Menu = () => {
  const renderDesktopOptions = (options = []) => {
    const optionsJSX = options.map((option) => (
      <S.Options key={option.url}>
        <S.Option>
          <Link href={option.url}>{option.label}</Link>
        </S.Option>
      </S.Options>
    ));

    return <S.Options>{optionsJSX}</S.Options>;
  };

  const renderMobileMenu = () => {
    return <></>;
  };

  return (
    <S.Container>
      <Image
        src="/brand.png"
        alt="Logomarca da Data Safety"
        width={128}
        height={32}
        priority={true}
      />
      {renderDesktopOptions(menuOptions)}
      {renderMobileMenu(menuOptions)}
    </S.Container>
  );
};

export default Menu;
