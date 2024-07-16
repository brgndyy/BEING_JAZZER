import { useRef } from 'react';
import Carousel from 'react-multi-carousel';

const useCarousel = () => {
  const carouselRef = useRef<Carousel>(null);

  const handleNextCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.next(0);
    }
  };

  return {
    carouselRef,
    handleNextCarousel,
  };
};

export default useCarousel;
