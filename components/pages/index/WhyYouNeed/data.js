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
      "Um ciberataque pode causar danos severos à reputação da sua empresa, fazendo com que seus clientes percam a confiança no seu negócio. Investir em segurança te protege desses incidences e mantém a confiança de seus clientes.",
    imageFile: require("./assets/deal.png"),
    imageAlt: "Duas pessoas apertando as mãos, fechando negócio.",
  }),
];

export default reasons;
