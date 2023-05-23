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

export const blogCarouselSlides = [
  createSlide({
    title: "Serviços",
    description: "Conheça nossos serviços!",
    url: "/servicos",
    imageAlt: "Serviços",
  }),
  createSlide({
    title: "Mídia",
    description: "Acesse nosso conteúdo institucional",
    url: "/midia",
    imageAlt: "Mídia",
  }),
  createSlide({
    title: "Tecnologias",
    description: "Conheça as tecnologias de ponta utilizadas pela Data Safety",
    url: "/tecnologias",
    imageAlt: "Tecnologias",
  }),
];
