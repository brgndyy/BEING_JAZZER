import React, { RefObject } from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ChordImageData } from '@/_types';
import SingleChordImage from './SingleChordImage';

type Props = {
  currentImages: ChordImageData[];
  carouselRef: RefObject<Carousel>;
  responsive: ResponsiveType;
};

export default function SlideOfSingleChord({ responsive, currentImages, carouselRef }: Props) {
  return (
    <Carousel responsive={responsive} infinite draggable={false} arrows={false} ref={carouselRef}>
      {currentImages.map((image) => {
        return <SingleChordImage key={image.id} imageUrl={image.imageUrl} />;
      })}
    </Carousel>
  );
}
