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
    url: "#servicos",
  }),
  createMenuOption({
    label: "Por que se proteger?",
    url: "#por-que-se-proteger",
  }),
  createMenuOption({
    label: "Sobre nós",
    url: "#sobre-nos",
  }),
  createMenuOption({
    label: "Fale com um especialista",
    url: "#fale-com-um-especialista",
    highlighted: true,
  }),
];
