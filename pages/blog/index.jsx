import DefaultLayout from "../../layouts/DefaultLayout";

import Carousel from "../../components/Carousel";
import { blogCarouselSlides } from "./data";

export default function Blog() {
  return (
    <DefaultLayout>
      <Carousel slides={blogCarouselSlides} />
    </DefaultLayout>
  );
}
