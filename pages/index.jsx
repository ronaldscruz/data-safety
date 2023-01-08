import DefaultLayout from "../layouts/DefaultLayout";

import HomeCarousel from "../components/pages/index/HomeCarousel";
import ServicesCards from "../components/pages/index/ServicesCards";
import WhyYouNeed from "../components/pages/index/WhyYouNeed";

export default function Home() {
  return (
    <DefaultLayout>
      <HomeCarousel />
      <ServicesCards />
      <WhyYouNeed />
    </DefaultLayout>
  );
}
