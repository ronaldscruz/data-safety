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
    url: "#services",
  }),
  createMenuOption({
    label: "Por que se proteger?",
    url: "#why-you-need",
  }),
  createMenuOption({
    label: "Sobre nós",
    url: "#why-choose",
  }),
  createMenuOption({
    label: "Fale com um especialista",
    url: "#contact",
    highlighted: true,
  }),
];
