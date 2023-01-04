import Image from "next/image";
import * as S from "./styles";
import Link from "next/link";

const Menu = () => {
  return (
    <S.Container>
      <Image
        src="/brand.png"
        alt="Logomarca da Data Safety"
        width={128}
        height={32}
        priority={true}
      />
      <S.Options>
        <S.Option>
          <Link href="/servicos">Serviços</Link>
        </S.Option>
        <S.Option>
          <Link href="/quem-somos">Quem somos</Link>
        </S.Option>
        <S.Option>
          <Link href="/midia">Mídia</Link>
        </S.Option>
        <S.Option>
          <Link href="/contato">Contato</Link>
        </S.Option>
      </S.Options>
    </S.Container>
  );
};

export default Menu;
