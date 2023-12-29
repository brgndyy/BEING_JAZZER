'use client';

import SlideOfSingleChord from './SlideOfSingleChord';
import Metronome from '../_metonome/Metronome';
import MetronomeProvider from '../_metonome/MetronomeProvider';

export default function PageOfSingleChord() {
  return (
    <MetronomeProvider>
      <Metronome />
      <SlideOfSingleChord />
    </MetronomeProvider>
  );
}
