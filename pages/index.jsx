import DefaultLayout from "../layouts/DefaultLayout";

// import HomeCarousel from "../components/pages/index/HomeCarousel";
import ServicesCards from "../components/pages/index/ServicesCards";

export default function Home() {
  return (
    <DefaultLayout>
      {/* <HomeCarousel /> */}
      <ServicesCards />
    </DefaultLayout>
  );
}
