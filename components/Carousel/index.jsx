import { useCallback, useEffect, useState } from "react";

import * as S from "./styles";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SlidesProgress from "./components/SlidesProgress";

let autoSkipInterval;
let AUTO_SKIP_DELAY_MS = 6000;

const Carousel = ({ slides = [] }) => {
  const [carouselRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    speed: 15,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const reupdateCurrentSlidde = useCallback(() => {
    if (!emblaApi) return;

    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const initializeAutoskip = useCallback(() => {
    if (autoSkipInterval) clearInterval(autoSkipInterval);

    autoSkipInterval = setInterval(() => {
      scrollNext();
    }, AUTO_SKIP_DELAY_MS);

    return () => {
      clearInterval(autoSkipInterval);
    };
  }, [scrollNext]);

  const renderSlides = useCallback((slides = []) => {
    return slides.map((slide) => (
      <li key={slide.url} className="embla__slide">
        <article>
          <Image
            src={slide.importedImage}
            alt={slide.imageAlt}
            priority={true}
          />
        </article>
      </li>
    ));
  }, []);

  /**
   * Timer autoskip
   */
  useEffect(() => {
    initializeAutoskip();
  }, [initializeAutoskip]);

  /**
   * Current index refresher
   */
  useEffect(() => {
    if (!emblaApi) return () => {};

    emblaApi.on("select", reupdateCurrentSlidde);
    emblaApi.on("scroll", initializeAutoskip);

    return () => {
      emblaApi.off("select", reupdateCurrentSlidde);
      emblaApi.off("scroll", initializeAutoskip);
    };
  }, [emblaApi, initializeAutoskip, reupdateCurrentSlidde]);

  return (
    <S.Container id="home-carousel" className="embla">
      <div className="embla__viewport" ref={carouselRef}>
        <ul className="embla__container">{renderSlides(slides)}</ul>
      </div>
      <S.Controllers>
        <S.Controller
          aria-label="Voltar para o slide anterior"
          className="embla__prev"
          onClick={scrollPrev}
        >
          <FaChevronLeft />
        </S.Controller>
        <S.Controller
          aria-label="Ir para o próximo slide"
          className="embla__next"
          onClick={scrollNext}
        >
          <FaChevronRight />
        </S.Controller>
      </S.Controllers>
      <S.SlidesProgressContainer>
        <SlidesProgress
          totalCount={slides.length}
          currentIndex={currentIndex}
          onNavigate={(index) => scrollTo(index)}
        />
      </S.SlidesProgressContainer>
    </S.Container>
  );
};

export default Carousel;
