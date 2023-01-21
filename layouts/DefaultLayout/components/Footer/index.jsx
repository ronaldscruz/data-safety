import * as S from "./styles";

import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import GradientSVG from "../../../../components/GradientSVG";

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.CompanyInfo>Data Safety © 2023</S.CompanyInfo>
        <S.SocialMedia>
          <GradientSVG />
          <S.SocialLink>
            <FaLinkedin />
          </S.SocialLink>
          <S.SocialLink>
            <FaInstagramSquare />
          </S.SocialLink>
        </S.SocialMedia>
      </S.Content>
    </S.Container>
  );
};

export default Footer;
