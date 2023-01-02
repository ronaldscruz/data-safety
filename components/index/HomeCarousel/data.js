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
    description: "Conheça nossos serviços",
    url: "/servicos",
    importedImage: require("./assets/services.webp"),
    imageAlt: "Serviços",
  }),
  createSlide({
    title: "Mídia",
    description: "Acesse nosso conteúdo institucional",
    url: "/midia",
    importedImage: require("./assets/media.jpeg"),
    imageAlt: "Mídia",
  }),
];
