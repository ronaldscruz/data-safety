import {
  BsShieldLock,
  BsCloudArrowUp,
  BsHddStack,
  BsTools,
} from "react-icons/bs";

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
    iconComponent: BsHddStack,
    title: "Consultoria de TI",
    description:
      "Os serviços de consultoria de TI ajudam empresas a alcançar seus objetivos de negócios otimizando e implementando sistemas de TI personalizados para melhorar eficiência, segurança e rentabilidade.",
  }),
  createServiceCard({
    iconComponent: BsTools,
    title: "Professional Services",
    description:
      "Nossa equipe de Professional Services oferece design, planejamento e execução de projetos de alta complexidade técnica. Oferecemos soluções criativas, colaboração próxima com clientes e suporte contínuo para garantir sucesso em seus projetos.",
  }),
];

export default serviceCards;
