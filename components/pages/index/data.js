const createSlide = ({
  title = "",
  description = "",
  url = "",
  importedImage,
  imageAlt,
}) => {
  return {
    title,
    description,
    url,
    importedImage,
    imageAlt,
  };
};

export const homeCarouselSlides = [
  createSlide({
    title: "Serviços",
    description: "Conheça nossos serviços!",
    url: "/servicos",
    importedImage: require("./assets/brand-highlight.png"),
    imageAlt: "Serviços",
  }),
  createSlide({
    title: "Mídia",
    description: "Acesse nosso conteúdo institucional",
    url: "/midia",
    importedImage: require("./assets/our-priority-station.png"),
    imageAlt: "Mídia",
  }),
  createSlide({
    title: "Tecnologias",
    description: "Conheça as tecnologias de ponta utilizadas pela Data Safety",
    url: "/tecnologias",
    importedImage: require("./assets/our-priority-presentation.png"),
    imageAlt: "Tecnologias",
  }),
];
