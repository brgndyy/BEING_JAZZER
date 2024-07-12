'use client';

import SlideOfSingleChord from './SlideOfSingleChord';
import { WhiteChordImageData, DarkChordImageData } from '@/_types';
import { carouselCard } from './slideOfSingleChord.css';
import Metronome from '../__metronome/Metronome';
import useCarousel from '@/_hooks/useCarousel';

type Props = {
  whiteChordImages: WhiteChordImageData[];
  darkChordImages: DarkChordImageData[];
};

export default function PageOfSingleChord({ whiteChordImages, darkChordImages }: Props) {
  const { carouselRef, handleNextCarousel } = useCarousel();

  return (
    <div className={carouselCard}>
      <Metronome autoPlay onEndCount={handleNextCarousel}>
        <Metronome.BPMInput />
        <Metronome.Button />
        <SlideOfSingleChord
          whiteChordImages={whiteChordImages}
          darkChordImages={darkChordImages}
          carouselRef={carouselRef}
        />
      </Metronome>
    </div>
  );
}
