import * as S from "./styles";

import FacebookIcon from "./icons/facebook.svg";
import InstagramIcon from "./icons/instagram.svg";
import LinkedinIcon from "./icons/linkedin.svg";

import GradientSVG from "../../../../components/GradientSVG";

import { socialMediaLinks } from "./data";
import { menuOptions } from "../Menu/data";
import Link from "next/link";

const Footer = () => {
  const renderMenuOptions = (menuOptions = []) => {
    return menuOptions.map((menuOption) => (
      <S.MenuLinkItem key={menuOption.url} href={menuOption.url}>
        <Link href={menuOption.url}>{menuOption.label}</Link>
      </S.MenuLinkItem>
    ));
  };

  return (
    <>
      <GradientSVG />
      <S.Container>
        <S.Content>
          <S.SocialMedia>
            <S.SocialLink href={socialMediaLinks.linkedin}>
              <LinkedinIcon />
            </S.SocialLink>
            <S.SocialLink href={socialMediaLinks.instagram}>
              <InstagramIcon />
            </S.SocialLink>
            <S.SocialLink href={socialMediaLinks.facebook}>
              <FacebookIcon />
            </S.SocialLink>
          </S.SocialMedia>
          <S.MenuLinks>{renderMenuOptions(menuOptions)}</S.MenuLinks>
          <S.CopyrightText>
            Data Safety © 2023. Todos os direitos reservados
          </S.CopyrightText>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Footer;
