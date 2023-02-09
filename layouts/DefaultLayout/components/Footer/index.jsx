import * as S from "./styles";

import FacebookIcon from "./icons/facebook.svg";
import InstagramIcon from "./icons/instagram.svg";
import LinkedinIcon from "./icons/linkedin.svg";

import GradientSVG from "../../../../components/GradientSVG";

import { socialMediaLinks } from "./data";
import { menuOptions } from "../Menu/data";
import Link from "next/link";
import smoothScrollTo from "../../../../utils/smoothScrollTo";

const Footer = () => {
  const renderSocialMediaLinks = (socialMediaLinks) => {
    const iconsMap = {
      linkedin: <LinkedinIcon />,
      instagram: <InstagramIcon />,
      facebook: <FacebookIcon />,
    };

    return Object.keys(socialMediaLinks).map((socialMedia) => (
      <S.SocialLink
        key={socialMedia}
        href={socialMediaLinks[socialMedia]}
        target="_blank"
        rel="noreferrer"
      >
        {iconsMap[socialMedia]}
      </S.SocialLink>
    ));
  };

  const renderMenuOptions = (menuOptions = []) => {
    return menuOptions.map((menuOption) => (
      <S.MenuLinkItem key={menuOption.url} href={menuOption.url}>
        <Link
          href={menuOption.url}
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo(menuOption.url);
          }}
        >
          {menuOption.label}
        </Link>
      </S.MenuLinkItem>
    ));
  };

  return (
    <>
      <GradientSVG />
      <S.Container>
        <S.Content>
          <S.SocialMedia>
            {renderSocialMediaLinks(socialMediaLinks)}
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
