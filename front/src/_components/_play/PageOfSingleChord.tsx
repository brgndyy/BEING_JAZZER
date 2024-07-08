'use client';

import SlideOfSingleChord from './SlideOfSingleChord';
import Metronome from '../_metronome/Metronome';
import MetronomeProvider from '../_metronome/MetronomeProvider';
import { WhiteChordImageData, DarkChordImageData } from '@/_types';
import { carouselCard } from './slideOfSingleChord.css';

type Props = {
  whiteChordImages: WhiteChordImageData[];
  darkChordImages: DarkChordImageData[];
};

export default function PageOfSingleChord({ whiteChordImages, darkChordImages }: Props) {
  return (
    <div className={carouselCard}>
      <MetronomeProvider>
        <Metronome />
        <SlideOfSingleChord whiteChordImages={whiteChordImages} darkChordImages={darkChordImages} />
      </MetronomeProvider>
    </div>
  );
}
