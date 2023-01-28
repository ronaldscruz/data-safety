import DefaultLayout from "../layouts/DefaultLayout";

import HomeCarousel from "../components/pages/index/HomeCarousel";
import ServicesCards from "../components/pages/index/ServicesCards";
import WhyYouNeed from "../components/pages/index/WhyYouNeed";
import WhyChoose from "../components/pages/index/WhyChoose";
import Contact from "../components/pages/index/Contact";
import Technologies from "../components/pages/index/Technologies";

export default function Home() {
  return (
    <DefaultLayout>
      <HomeCarousel />
      <ServicesCards />
      <Technologies />
      <WhyYouNeed />
      <WhyChoose />
      <Contact />
    </DefaultLayout>
  );
}
