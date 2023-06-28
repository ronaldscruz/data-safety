import {useCallback, useEffect, useState} from "react";

import * as S from "./styles";
import {CarouselBackground, CarouselButtonContainer, CarouselContent, CarouselText, CarouselTitle} from "./styles";

import useEmblaCarousel from "embla-carousel-react";

import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import SlidesProgress from "./components/SlidesProgress";
import navigateTo from "../../utils/navigateTo";

let autoSkipInterval;
let AUTO_SKIP_DELAY_MS = 6000;

const Carousel = ({slides = []}) => {
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
  
  const reUpdateCurrentSlide = useCallback(() => {
    if (!emblaApi) return;
    
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  
  const initializeAutoSkip = useCallback(() => {
    if (autoSkipInterval) clearInterval(autoSkipInterval);
    
    autoSkipInterval = setInterval(() => {
      scrollNext();
    }, AUTO_SKIP_DELAY_MS);
    
    return () => {
      clearInterval(autoSkipInterval);
    };
  }, [scrollNext]);
  
  const renderSlides = useCallback((slides = []) => {
    return slides.map((slide) => {
      // const IconsJSX = slide.icons.length > 0 ?
      //   (
      //     <IconsContainer>
      //       {
      //         slide.icons.map(icon => {
      //           return (
      //             <IconContainer key={icon.url} className="icon">
      //               <IconContentContainer>
      //                 <Image
      //                   src={icon.importedIcon}
      //                   alt={icon.imageAlt}
      //                   priority={true}
      //                   height={48}
      //                 />
      //                 <IconTitle>{icon.title}</IconTitle>
      //               </IconContentContainer>
      //             </IconContainer>
      //           )
      //         })
      //       }
      //     </IconsContainer>
      //   ) : null;
      
      return (
        <li key={slide.url} className="embla__slide">
          <CarouselButtonContainer onClick={() => navigateTo(slide.url)}>
            <CarouselContent>
              <CarouselTitle>
                {slide.title}
              </CarouselTitle>
              {/*{IconsJSX}*/}
              <CarouselBackground
                src={slide.importedImage}
                alt={slide.imageAlt}
                priority={true}
              />
              <CarouselText>
                <span>
                  {slide.description}
                </span>
              </CarouselText>
            </CarouselContent>
          </CarouselButtonContainer>
        </li>
      )
    });
  }, []);
  
  /**
   * Timer autoskip
   */
  useEffect(() => {
    initializeAutoSkip();
  }, [initializeAutoSkip]);
  
  /**
   * Current index refresher
   */
  useEffect(() => {
    if (!emblaApi) return () => {
    };
    
    emblaApi.on("select", reUpdateCurrentSlide);
    emblaApi.on("scroll", initializeAutoSkip);
    
    return () => {
      emblaApi.off("select", reUpdateCurrentSlide);
      emblaApi.off("scroll", initializeAutoSkip);
    };
  }, [emblaApi, initializeAutoSkip, reUpdateCurrentSlide]);
  
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
          <FaChevronLeft/>
        </S.Controller>
        <S.Controller
          aria-label="Ir para o próximo slide"
          className="embla__next"
          onClick={scrollNext}
        >
          <FaChevronRight/>
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
