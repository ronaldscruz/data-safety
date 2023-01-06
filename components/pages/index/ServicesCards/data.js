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
      "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.",
  }),
  createServiceCard({
    iconComponent: BsCloudArrowUp,
    title: "Nuvem",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.",
  }),
  createServiceCard({
    iconComponent: BsHddStack,
    title: "Consultoria de TI",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Posuere libero varius.",
  }),
  createServiceCard({
    iconComponent: BsTools,
    title: "Professional Services",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Aenean aliquam molestie leo, vitae iaculis nisl.Si u mundo tá muito paradis?",
  }),
];

export default serviceCards;
