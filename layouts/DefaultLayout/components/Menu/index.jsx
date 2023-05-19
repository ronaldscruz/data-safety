import Image from "next/image";
import * as S from "./styles";
import Link from "next/link";
import { menuOptions } from "./data";
import MobileMenu from "./components/MobileMenu";
import navigateTo from "../../../../utils/navigateTo";

const Menu = () => {
  const renderDesktopOptions = (options = []) => {
    const optionsJSX = options.map((option) => (
      <S.Option $highlighted={option.highlighted} key={option.url}>
        <Link
          href={option.url}
          onClick={(e) => {
            e.preventDefault();

            navigateTo(option.url);
          }}
        >
          {option.label}
        </Link>
      </S.Option>
    ));

    return <S.Options>{optionsJSX}</S.Options>;
  };

  return (
    <S.Container>
      <Link href="/">
        <Image
          src="/brand.png"
          alt="Logomarca da Data Safety"
          width={128}
          height={32}
          priority={true}
        />
      </Link>
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
