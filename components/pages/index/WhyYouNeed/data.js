const createReason = ({
  title = "",
  description = "",
  imageFile,
  imageAlt = "",
}) => ({
  title,
  description,
  imageFile,
  imageAlt,
});

/**
 * A cyber attack or data breach can seriously damage your company's reputation.
 * Customers may lose trust in your business and be hesitant to do business with you in the future.
 * Investing in cybersecurity can help prevent such incidents and protect your company's reputation.
 */

const reasons = [
  createReason({
    title: "Proteger sua reputação e a confiança na sua empresa",
    description:
      "Um ciberataque pode causar danos severos à reputação da sua empresa, fazendo com que seus clientes percam a confiança no seu negócio. Investir em segurança te protege desses incidentes e mantém a confiança de seus usuários.",
    imageFile: require("./assets/deal.png"),
    imageAlt: "Duas pessoas apertando as mãos, fechando negócio.",
  }),
  createReason({
    title: "Economizar dinheiro e aumentar a eficiência",
    description: [
      "A implementação de melhores medidas de segurança pode te ajudar a reduzir seu downtime, permitindo que sua empresa opere de forma mais sólida e eficiente.",
      "Além disso, investimentos em segurança podem gerar economia para o seu negócio, através da prevenção de ciberataques e vazamentos de informações. Um estudo feito pela National Small Business Association (NSBA) concluiu que 43% dos pequenos negócios já sofreram ciberataques. Destes, 69% passaram por altos prejuízos financeiros.",
    ],
    imageFile: require("./assets/stonks.png"),
    imageAlt: "Pessoa visualizando um gráfico em crescimento.",
  }),
];

export default reasons;
