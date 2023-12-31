import React, { useEffect, useContext, useRef } from 'react';
import { METRONOME_CONDITION } from '@/_constants/condition';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MetronomeContext from '../_metonome/MetronomeContext';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1500, min: 1000 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 3,
  },
};

export default function SlideOfSingleChord() {
  const { first, count } = useContext(MetronomeContext);
  const carouselRef = useRef(null);

  useEffect(() => {
    console.log(count);
    if (first && count === METRONOME_CONDITION.min_metronome_count) {
      //       const totalSlides = darkTheme ? images.dark.length : images.white.length;
      //       const nextSlide = (count - 1) % totalSlides;
      //       carouselRef.current && carouselRef.current.next(nextSlide);
    }
  }, [count, first]);
  return (
    <Carousel responsive={responsive} infinite draggable={false} arrows={false} ref={carouselRef}>
      <div>캐러셀</div>
    </Carousel>
  );
}
