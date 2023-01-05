const createMenuOption = ({
  label = "",
  url = "",
  highlighted = false,
} = {}) => ({
  label,
  url,
  highlighted,
});

export const menuOptions = [
  createMenuOption({
    label: "Serviços",
    url: "/servicos",
  }),
  createMenuOption({
    label: "Quem somos",
    url: "/quem-somos",
  }),
  createMenuOption({
    label: "Mídia",
    url: "/midia",
  }),
  createMenuOption({
    label: "Fale com um especialista",
    url: "/contato",
    highlighted: true,
  }),
];
