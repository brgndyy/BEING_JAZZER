'use client';

import SlideOfSingleChord from './SlideOfSingleChord';
import { ChordImageData } from '@/_types';
import { carouselCard } from './slideOfSingleChord.css';
import Metronome from '../__metronome/Metronome';
import useCarousel from '@/_hooks/useCarousel';
import useThemeStore from '@/_store/useThemeStore';
import { useWindowWidth } from '@/_hooks/useWindowWidth';
import { useEffect, useState } from 'react';
import { ResponsiveType } from 'react-multi-carousel';
import { metronomeContainer, text, container, button, input } from './pageOfSingChord.css';
import VinylImage from '../_common/images/vinylImage/VinylImage';
import { myStyle } from '@/_styles/vars.css';
import { BMHANNAAir } from '@/_styles/fonts/fonts';

type Props = {
  whiteChordImages: ChordImageData[];
  darkChordImages: ChordImageData[];
  currentTheme: 'dark' | 'light';
};

const responsiveSetting = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1500, min: 1000 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
  },
};

export default function PageOfSingleChord({ whiteChordImages, darkChordImages }: Props) {
  const { carouselRef, handleNextCarousel } = useCarousel();
  const theme = useThemeStore((state) => state.theme);
  const currentImages = theme ? darkChordImages : whiteChordImages;

  // const windowWidth = useWindowWidth();
  // const [responsive, setResponsive] = useState<ResponsiveType>(responsiveSetting);

  // useEffect(() => {
  //   if (windowWidth >= 1500) {
  //     setResponsive({ ...responsiveSetting });
  //   } else if (windowWidth >= 1000) {
  //     setResponsive({ ...responsiveSetting, desktop: responsiveSetting.tablet });
  //   } else {
  //     setResponsive({ ...responsiveSetting, desktop: responsiveSetting.mobile });
  //   }
  // }, [windowWidth]);

  return (
    <div className={carouselCard}>
      <Metronome autoPlay onEndCount={handleNextCarousel}>
        <div className={metronomeContainer}>
          <div className={container}>
            <VinylImage />
          </div>

          <span className={`${text} ${myStyle}`}>현재 박자:</span>
          <Metronome.BPMInput className={`${input} ${BMHANNAAir.className}`} />
          <Metronome.Button
            className={`${button} ${myStyle} ${BMHANNAAir.className}`}
            buttonContents={['재생', '일시정지']}
          />
        </div>

        <SlideOfSingleChord
          currentImages={currentImages}
          carouselRef={carouselRef}
          responsive={responsiveSetting}
        />
      </Metronome>
    </div>
  );
}
