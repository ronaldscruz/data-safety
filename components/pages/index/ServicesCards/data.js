import { BsShieldLock, BsCloudArrowUp } from "react-icons/bs";

import {
  FaShieldVirus,
  FaServer,
  FaLaptopCode,
  FaCloudDownloadAlt,
} from "react-icons/fa";

const createServiceCard = ({
  iconComponent = <></>,
  title = "",
  description = "",
}) => ({
  iconComponent,
  title,
  description,
});

const serviceCards = [
  createServiceCard({
    iconComponent: BsShieldLock,
    title: "Segurança e proteção",
    description:
      "Os serviços de segurança da informação garantem a proteção dos dados e sistemas contra ameaças virtuais. Técnicas de criptografia, controle de acesso e monitoramento são usadas para garantir a privacidade e a integridade dos dados.",
  }),
  createServiceCard({
    iconComponent: BsCloudArrowUp,
    title: "Nuvem",
    description:
      "Serviços de nuvem permitem armazenamento, processamento e acesso a dados e aplicações através de internet, sem a necessidade de hardware próprio, usando serviços como AWS e AZURE.",
  }),
  createServiceCard({
    iconComponent: FaShieldVirus,
    title: "Pentest",
    description:
      "Pentest (penetration testing) é uma avaliação de segurança de sistemas, aplicações e redes, realizada por profissionais qualificados para identificar vulnerabilidades e simular ataques de ameaças reais. O objetivo é avaliar a eficiência dos controles de segurança e fornecer recomendações para melhorar a defesa contra ameaças.",
  }),
  createServiceCard({
    iconComponent: FaLaptopCode,
    title: "Workspace",
    description:
      "O Workspace é a solução perfeita para equipes colaborarem de forma eficiente. Com recursos de comunicação, compartilhamento de arquivos e tarefas, você pode trabalhar juntos em um só lugar. Seja na nuvem do Google ou no Microsoft 365, escolha o que melhor atenda às suas necessidades e transforme sua equipe em uma máquina de trabalho em equipe.",
  }),
  createServiceCard({
    iconComponent: FaServer,
    title: "Infraestrutura",
    description:
      "O serviço de infraestrutura de rede garante a conectividade e disponibilidade dos recursos da rede, fornecendo suporte a aplicativos críticos e garantindo a segurança da informação. Otimize sua rede com um serviço confiável.",
  }),
  createServiceCard({
    iconComponent: FaCloudDownloadAlt,
    title: "Backup",
    description:
      "Acronis Backup é uma solução de backup e recuperação de dados para empresas e usuários finais. Ele protege seus arquivos, aplicativos, fotos e sistemas operacionais, permitindo recuperar seus dados rapidamente em caso de desastres. Além disso, oferece backup na nuvem, para backup local e até mesmo para backup de máquinas virtuais.",
  }),
];

export default serviceCards;
