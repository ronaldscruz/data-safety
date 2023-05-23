import DefaultLayout from "../layouts/DefaultLayout";

import Carousel from "../components/Carousel";
import { homeCarouselSlides } from "../components/pages/index/data";

import ServicesCards from "../components/pages/index/ServicesCards";
import WhyYouNeed from "../components/pages/index/WhyYouNeed";
import WhyChoose from "../components/pages/index/WhyChoose";
import Contact from "../components/pages/index/Contact";

export default function Home() {
  return (
    <DefaultLayout>
      <Carousel slides={homeCarouselSlides} />
      <ServicesCards />
      <WhyYouNeed />
      <WhyChoose />
      <Contact />
    </DefaultLayout>
  );
}
