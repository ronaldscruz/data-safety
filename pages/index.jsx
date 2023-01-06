import DefaultLayout from "../layouts/DefaultLayout";

import HomeCarousel from "../components/pages/index/HomeCarousel";
import ServicesCards from "../components/pages/index/ServicesCards";
import { defaultHeadParams } from "../constants/defaultHeadParams";

export default function Home() {
  return (
    <DefaultLayout>
      <HomeCarousel />
      <ServicesCards />
    </DefaultLayout>
  );
}
