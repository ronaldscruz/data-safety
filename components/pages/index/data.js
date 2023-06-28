const createIcon = ({title, importedIcon}) => {
  return {
    title,
    importedIcon,
  };
};

const createSlide = ({
                       title = "",
                       description = "",
                       url = "",
                       importedImage,
                       imageAlt,
                       align = "left",
                       icons = [],
                     }) => {
  return {
    title,
    description,
    url,
    importedImage,
    imageAlt,
    align,
    icons,
  };
};

export const homeCarouselSlides = [
  createSlide({
    title: "Nossa prioridade é a sua proteção digital",
    description: "Proteja os dados da sua empresa com os serviços Data Safety",
    url: "#por-que-se-proteger",
    importedImage: require("./assets/1-nossa-prioridade.png"),
    imageAlt: "Serviços",
    align: "left",
  }),
  createSlide({
    title: "Precisando proteger os dados da sua empresa?",
    description:
      "Solicite agora mesmo uma consultoria gratuita para o seu negócio",
    url: "#fale-com-um-especialista",
    importedImage: require("./assets/2-precisando-proteger.png"),
    imageAlt: "Mídia",
    align: "left",
  }),
  createSlide({
    title: "Pensou em segurança?",
    description: "Pensou em Data Safety!",
    url: "#servicos",
    importedImage: require("./assets/3-nossos-servicos.png"),
    imageAlt: "Tecnologias",
    align: "center",
    icons: [
      createIcon({
        title: "Segurança e proteção",
        importedIcon: require("./assets/icons/shield.png"),
      }),
      createIcon({
        title: "Nuvem",
        importedIcon: require("./assets/icons/cloud.png"),
      }),
      createIcon({
        title: "Pentest",
        importedIcon: require("./assets/icons/gear.png"),
      }),
      createIcon({
        title: "Workspace",
        importedIcon: require("./assets/icons/screen.png"),
      }),
      createIcon({
        title: "Infraestrutura",
        importedIcon: require("./assets/icons/network.png"),
      }),
      createIcon({
        title: "Backup",
        importedIcon: require("./assets/icons/cloud-upgrade.png"),
      }),
    ],
  }),
];
