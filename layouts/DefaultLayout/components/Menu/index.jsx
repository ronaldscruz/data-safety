import Image from "next/image";
import * as S from "./styles";
import Link from "next/link";
import { menuOptions } from "./data";
import MobileMenu from "./components/MobileMenu";

const Menu = () => {
  const renderDesktopOptions = (options = []) => {
    const optionsJSX = options.map((option) => (
      <S.Option key={option.url}>
        <Link href={option.url}>{option.label}</Link>
      </S.Option>
    ));

    return <S.Options>{optionsJSX}</S.Options>;
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
      <S.DesktopMenuWrapper>
        {renderDesktopOptions(menuOptions)}
      </S.DesktopMenuWrapper>
      <S.MobileMenuWrapper>
        <MobileMenu options={menuOptions} />
      </S.MobileMenuWrapper>
    </S.Container>
  );
};

export default Menu;
