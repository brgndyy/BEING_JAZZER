'use client';

import SlideOfSingleChord from './SlideOfSingleChord';
import Metronome from '../_metonome/Metronome';
import MetronomeProvider from '../_metonome/MetronomeProvider';
import { WhiteChordImageData, DarkChordImageData } from '@/_types';

type Props = {
  whiteChordImages: WhiteChordImageData[];
  darkChordImages: DarkChordImageData[];
};

export default function PageOfSingleChord({ whiteChordImages, darkChordImages }: Props) {
  console.log('whiteChordImages: ', whiteChordImages);
  console.log('darkChordImages: ', darkChordImages);
  return (
    <MetronomeProvider>
      <Metronome />
      <SlideOfSingleChord />
    </MetronomeProvider>
  );
}
